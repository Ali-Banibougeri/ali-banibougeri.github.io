import { createClient } from "npm:@supabase/supabase-js@2";

const SITE_ORIGIN = "https://ali-banibougeri.github.io";
const ALLOWED_ORIGINS = new Set([
  SITE_ORIGIN,
  "https://alib771.github.io", // Keep working while the Pages repository is renamed.
  "http://localhost:4173",
  "http://127.0.0.1:4173",
]);
const GAMES = new Set(["snake", "tetris"]);
const PAGES = new Set(["home", "arcade"]);
const TRACE_ALPHABET = "0123456789abcdefghijklmnopqrstuv";
const MAX_TRACE = 20000;
const SESSION_MAX_AGE_MS = 20 * 60 * 1000;
const TICK_MS: Record<string, number> = { snake: 190, tetris: 80 };

const supabaseUrl = (Deno.env.get("SUPABASE_URL") || "https://ymauqmpqersjfmovlvvk.supabase.co").replace(/\/$/, "");
const builtInSecretKey = (() => {
  try {
    const keys = JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") || "{}");
    return typeof keys.default === "string" ? keys.default : "";
  } catch {
    return "";
  }
})();
const serviceKey = Deno.env.get("ARCADE_SECRET_KEY") || builtInSecretKey || Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const builtInPublishableKey = (() => {
  try {
    const keys = JSON.parse(Deno.env.get("SUPABASE_PUBLISHABLE_KEYS") || "{}");
    return typeof keys.default === "string" ? keys.default : "";
  } catch {
    return "";
  }
})();
const expectedPublicKey = Deno.env.get("ARCADE_PUBLISHABLE_KEY") || Deno.env.get("SUPABASE_PUBLISHABLE_KEY") || builtInPublishableKey || Deno.env.get("SUPABASE_ANON_KEY") || "";
const admin = serviceKey ? createClient(supabaseUrl, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } }) : null;

function cors(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.has(origin) ? origin : SITE_ORIGIN;
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Headers": "apikey, content-type, x-client-info",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}
function json(body: unknown, status: number, origin: string | null) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors(origin), "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}
function validUuid(value: unknown): value is string {
  return typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
function cleanName(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().replace(/\s+/g, " ").slice(0, 18);
}

function cleanComment(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
function countWords(value: string): number {
  return value.match(/\S+/gu)?.length || 0;
}
async function sha256(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, "0")).join("");
}
async function getIpHash(req: Request): Promise<string> {
  const forwarded = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const salt = Deno.env.get("ARCADE_RATE_SALT") || supabaseUrl;
  return await sha256(salt + ":" + forwarded);
}
function decodeTrace(trace: unknown): number[] | null {
  if (typeof trace !== "string" || trace.length < 1 || trace.length > MAX_TRACE) return null;
  const frames: number[] = [];
  for (const char of trace) {
    const value = TRACE_ALPHABET.indexOf(char);
    if (value < 0) return null;
    frames.push(value);
  }
  return frames;
}
function rngFromSeed(seed: number) {
  let a = Number(seed) >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
type Replay = { valid: boolean; score: number; reason?: string; durationMs?: number };
function replaySnake(frames: number[], seed: number): Replay {
  const snake = [{ x: 7, y: 10 }, { x: 6, y: 10 }, { x: 5, y: 10 }];
  let direction = { x: 1, y: 0 };
  let food = { x: 14, y: 8 };
  let score = 0;
  let durationMs = 0;
  let tickCount = 0;
  let temporaryFood: { x: number; y: number } | null = null;
  let temporaryFoodExpiresAt = 0;
  const random = rngFromSeed(seed);
  const bonusRandom = rngFromSeed((Number(seed) ^ 0x0B07F00D) >>> 0);
  let nextTemporaryFoodAt = 70 + Math.floor(bonusRandom() * 51);

  const makeFood = () => {
    let p: { x: number; y: number };
    do {
      p = { x: Math.floor(random() * 20), y: Math.floor(random() * 20) };
    } while (
      snake.some(s => s.x === p.x && s.y === p.y) ||
      (temporaryFood && temporaryFood.x === p.x && temporaryFood.y === p.y)
    );
    return p;
  };
  const makeTemporaryFood = () => {
    let p: { x: number; y: number };
    do {
      p = { x: Math.floor(bonusRandom() * 20), y: Math.floor(bonusRandom() * 20) };
    } while (
      snake.some(s => s.x === p.x && s.y === p.y) ||
      (food.x === p.x && food.y === p.y)
    );
    return p;
  };

  let ended = false;
  for (const code of frames) {
    // Match the client timer before each move; eating either food accelerates the next tick.
    durationMs += Math.max(95, 190 - Math.floor(score / 20) * 2);
    const candidates = [
      { x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 },
    ];
    if (code > 3) return { valid: false, score, reason: "invalid_snake_input" };
    direction = candidates[code];

    // The client advances this seeded schedule once before moving on every game tick.
    tickCount++;
    if (temporaryFood && tickCount >= temporaryFoodExpiresAt) temporaryFood = null;
    if (!temporaryFood && tickCount >= nextTemporaryFoodAt) {
      temporaryFood = makeTemporaryFood();
      temporaryFoodExpiresAt = tickCount + 25;
      nextTemporaryFoodAt = tickCount + 70 + Math.floor(bonusRandom() * 51);
    }

    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    const eatsRegular = head.x === food.x && head.y === food.y;
    const eatsBonus = Boolean(temporaryFood && head.x === temporaryFood.x && head.y === temporaryFood.y);
    const eats = eatsRegular || eatsBonus;
    const body = eats ? snake : snake.slice(0, -1);
    if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 ||
      body.some(s => s.x === head.x && s.y === head.y)) {
      ended = true;
      break;
    }

    snake.unshift(head);
    if (eatsRegular) {
      score += 10;
      food = makeFood();
    } else if (!eatsBonus) {
      snake.pop();
    }
    if (eatsBonus) {
      score += 30;
      temporaryFood = null;
    }
  }
  return ended
    ? { valid: true, score, durationMs }
    : { valid: false, score, durationMs, reason: "round_not_finished" };
}
const TETROMINOES: Array<Array<[number,number]>> = [
  [[0,1],[1,1],[2,1],[3,1]], // I
  [[1,0],[2,0],[1,1],[2,1]], // O
  [[1,0],[0,1],[1,1],[2,1]], // T
  [[1,0],[2,0],[0,1],[1,1]], // S
  [[0,0],[1,0],[1,1],[2,1]], // Z
  [[0,0],[0,1],[1,1],[2,1]], // J
  [[2,0],[0,1],[1,1],[2,1]], // L
];
function rotateCells(cells: Array<[number,number]>): Array<[number,number]> {
  return cells.map(([x,y]) => [3-y,x] as [number,number]);
}
function tetrisCollides(board: number[][], piece: any, x: number, y: number, cells: Array<[number,number]>): boolean {
  for(const [cx,cy] of cells) {
    const px=x+cx, py=y+cy;
    if(px<0||px>=10||py>=20)return true;
    if(py>=0&&board[py][px])return true;
  }
  return false;
}
function replayTetris(frames: number[], seed: number): Replay {
  const random=rngFromSeed(seed);
  const board=Array.from({length:20},()=>Array(10).fill(0));
  let score=0,lines=0,gravity=0,rotateHeld=false,dropHeld=false;
  const nextPiece=()=>({x:3,y:0,type:Math.floor(random()*TETROMINOES.length),cells:null as Array<[number,number]>|null});
  let piece=nextPiece();
  const cells=()=>piece.cells||TETROMINOES[piece.type];
  const collides=(x:number,y:number,c:Array<[number,number]>)=>tetrisCollides(board,piece,x,y,c);
  const fallEvery=()=>Math.max(7,14-Math.floor(lines/6));
  const lock=():boolean=>{
    const active=cells();
    if(active.some(([x,y])=>piece.y+y<0))return true;
    for(const [x,y] of active)board[piece.y+y][piece.x+x]=piece.type+1;
    const remaining=board.filter(row=>row.some(v=>v===0)),cleared=20-remaining.length;
    if(cleared){
      board.length=0;
      Array.from({length:cleared},()=>Array(10).fill(0)).concat(remaining).forEach(row=>board.push(row));
      lines+=cleared;
      score+=cleared*10;
    }
    piece=nextPiece();piece.cells=TETROMINOES[piece.type].map(([x,y])=>[x,y] as [number,number]);piece.x=3;piece.y=0;gravity=0;
    return collides(piece.x,piece.y,cells());
  };
  for(const mask of frames) {
    if(mask>31)return {valid:false,score,reason:"invalid_tetris_input"};
    if((mask&1)&&!collides(piece.x-1,piece.y,cells()))piece.x--;
    if((mask&2)&&!collides(piece.x+1,piece.y,cells()))piece.x++;
    const rotate=Boolean(mask&8);
    if(rotate&&!rotateHeld&&piece.type!==1) {
      const next=rotateCells(cells());
      if(!collides(piece.x,piece.y,next))piece.cells=next;
    }
    rotateHeld=rotate;
    const hard=Boolean(mask&16);
    if(hard&&!dropHeld) {
      let distance=0;
      while(!collides(piece.x,piece.y+1,cells())){piece.y++;distance++}
      dropHeld=true;gravity=0;
      if(lock())return {valid:true,score,reason:"tetris_game_over"};
      continue;
    }
    dropHeld=hard;
    if(mask&4) {
      if(!collides(piece.x,piece.y+1,cells())){piece.y++;gravity=0}
      else {gravity=0;if(lock())return {valid:true,score,reason:"tetris_game_over"}}
      continue;
    }
    gravity++;
    if(gravity>=fallEvery()) {
      gravity=0;
      if(!collides(piece.x,piece.y+1,cells()))piece.y++;
      else if(lock())return {valid:true,score,reason:"tetris_game_over"};
    }
  }
  return {valid:false,score,reason:"round_not_finished"};
}
function replayGame(game: string, trace: string, seed: number): Replay {
  const frames=decodeTrace(trace);
  if(!frames)return{valid:false,score:0,reason:"invalid_trace"};
  if(game==="snake")return replaySnake(frames,seed);
  if(game==="tetris")return replayTetris(frames,seed);
  return{valid:false,score:0,reason:"unknown_game"};
}

Deno.serve(async (req: Request) => {
  const origin=req.headers.get("origin");
  if(req.method==="OPTIONS")return new Response("ok",{headers:cors(origin)});
  if(req.method!=="POST")return json({error:"method_not_allowed"},405,origin);
  if(origin && !ALLOWED_ORIGINS.has(origin))return json({error:"origin_not_allowed"},403,origin);
  if(!admin)return json({error:"server_not_configured",message:"Supabase server-side secret key is unavailable in Edge Function secrets."},503,origin);
  const apiKey=req.headers.get("apikey")||"";
  if(!expectedPublicKey || apiKey!==expectedPublicKey)return json({error:"invalid_api_key"},401,origin);
  let body:any;
  try{body=await req.json()}catch(_){return json({error:"invalid_json"},400,origin)}
  const action=body?.action;
  const ipHash=await getIpHash(req);
  const now=new Date();

  if(action==="view"){
    const page=body?.page, visitorId=body?.visitor_id;
    if(!PAGES.has(page)||!validUuid(visitorId))return json({error:"invalid_view"},400,origin);
    const {count:recent,error:limitError}=await admin.from("site_page_views").select("id",{count:"exact",head:true}).eq("ip_hash",ipHash).gte("created_at",new Date(now.getTime()-60*60*1000).toISOString());
    if(limitError)return json({error:"database_error"},500,origin);
    if((recent||0)>=30)return json({error:"rate_limited"},429,origin);
    const visitorHash=await sha256("view:"+page+":"+visitorId);
    const {error:insertError}=await admin.from("site_page_views").upsert(
      {page_id:page,visitor_hash:visitorHash,ip_hash:ipHash,visit_day:now.toISOString().slice(0,10)},
      {onConflict:"page_id,visitor_hash,visit_day",ignoreDuplicates:true}
    );
    if(insertError)return json({error:"database_error"},500,origin);
    const {count,error:countError}=await admin.from("site_page_views").select("id",{count:"exact",head:true}).eq("page_id",page);
    if(countError)return json({error:"database_error"},500,origin);
    return json({ok:true,page,count:count||0,count_type:"unique_browser_days"},200,origin);
  }

  if(action==="comments_list"){
    const {data,error}=await admin.from("portfolio_comments")
      .select("id,display_name,message,word_count,created_at")
      .eq("is_visible",true)
      .order("created_at",{ascending:false})
      .limit(30);
    if(error)return json({error:"database_error"},500,origin);
    return json({ok:true,comments:data||[]},200,origin);
  }

  if(action==="comment_submit"){
    const visitorId=body?.visitor_id;
    const displayName=cleanName(body?.display_name);
    const message=cleanComment(body?.message);
    const wordCount=countWords(message);
    if(!validUuid(visitorId)||displayName.length<2||!message||message.length>1000||wordCount>100){
      return json({
        error:"invalid_comment",
        message:"Use a nickname with 2–18 characters and a comment of no more than 100 words (up to 1,000 characters)."
      },400,origin);
    }
    const visitorHash=await sha256("portfolio-comment:"+visitorId);
    const cutoff=new Date(now.getTime()-60*60*1000).toISOString();
    const {count:visitorCount,error:visitorLimitError}=await admin.from("portfolio_comments")
      .select("id",{count:"exact",head:true})
      .eq("visitor_hash",visitorHash)
      .gte("created_at",cutoff);
    if(visitorLimitError)return json({error:"database_error"},500,origin);
    if((visitorCount||0)>=3)return json({error:"comment_rate_limited",message:"Please wait before posting another comment."},429,origin);
    const {count:ipCount,error:ipLimitError}=await admin.from("portfolio_comments")
      .select("id",{count:"exact",head:true})
      .eq("ip_hash",ipHash)
      .gte("created_at",cutoff);
    if(ipLimitError)return json({error:"database_error"},500,origin);
    if((ipCount||0)>=10)return json({error:"comment_rate_limited",message:"This network has posted several comments recently. Please try again later."},429,origin);
    const {data,error}=await admin.from("portfolio_comments")
      .insert({
        display_name:displayName,
        message,
        word_count:wordCount,
        visitor_hash:visitorHash,
        ip_hash:ipHash
      })
      .select("id,display_name,message,word_count,created_at")
      .single();
    if(error||!data)return json({error:"comment_insert_failed"},500,origin);
    return json({ok:true,comment:data},201,origin);
  }

  if(action==="leaderboard"){
    const game=body?.game_id;
    if(typeof game!=="string"||!GAMES.has(game))return json({error:"invalid_game"},400,origin);
    const {data,error}=await admin.from("arcade_scores").select("game_id,player_name,score,created_at").eq("game_id",game).order("score",{ascending:false}).order("created_at",{ascending:true}).limit(10);
    if(error)return json({error:"database_error"},500,origin);
    return json({ok:true,records:data||[]},200,origin);
  }

  if(action==="start"){
    const game=body?.game_id;
    if(typeof game!=="string"||!GAMES.has(game))return json({error:"invalid_game"},400,origin);
    const {count,error:limitError}=await admin.from("arcade_runs").select("id",{count:"exact",head:true}).eq("ip_hash",ipHash).gte("created_at",new Date(now.getTime()-60*60*1000).toISOString());
    if(limitError)return json({error:"database_error"},500,origin);
    if((count||0)>=30)return json({error:"rate_limited"},429,origin);
    const seedArray=new Uint32Array(1);crypto.getRandomValues(seedArray);const seed=seedArray[0]||1;
    const {data,error}=await admin.from("arcade_runs").insert({game_id:game,seed,ip_hash:ipHash}).select("id,game_id,seed,created_at").single();
    if(error||!data)return json({error:"session_create_failed"},500,origin);
    return json({ok:true,run_id:data.id,game_id:data.game_id,seed:Number(data.seed),started_at:data.created_at},200,origin);
  }

  if(action==="finish"){
    const runId=body?.run_id, game=body?.game_id, trace=body?.trace, name=cleanName(body?.player_name), claimed=Number(body?.score);
    if(!validUuid(runId)||typeof game!=="string"||!GAMES.has(game)||name.length<2||!Number.isSafeInteger(claimed)||claimed<1||claimed>100000){
      return json({error:"invalid_submission"},400,origin);
    }
    const frames=decodeTrace(trace);
    if(!frames)return json({error:"invalid_trace"},400,origin);
    const {data:run,error:runError}=await admin.from("arcade_runs").select("id,game_id,seed,created_at,used_at").eq("id",runId).maybeSingle();
    if(runError||!run)return json({error:"invalid_run"},400,origin);
    if(run.game_id!==game||run.used_at)return json({error:"run_already_used_or_wrong_game"},409,origin);
    const age=now.getTime()-new Date(run.created_at).getTime();
    if(age<0||age>SESSION_MAX_AGE_MS)return json({error:"run_expired"},409,origin);
    const replay=replayGame(game,trace,Number(run.seed));
    if(!replay.valid||replay.score!==claimed){
      // Consume a failed run so the same run ID cannot be probed repeatedly with altered traces.
      await admin.from("arcade_runs").update({used_at:now.toISOString()}).eq("id",runId).is("used_at",null);
      return json({error:"score_replay_mismatch",message:"The server could not verify this score. No record was saved."},422,origin);
    }
    const replayDuration = replay.durationMs ?? frames.length * TICK_MS[game];
    const minimumElapsed = Math.max(1000, replayDuration * 0.48 - 1000);
    if(age < minimumElapsed) {
      await admin.from("arcade_runs").update({used_at:now.toISOString()}).eq("id",runId).is("used_at",null);
      return json({error:"run_too_fast"},422,origin);
    }
    const {data:claimedRun,error:consumeError}=await admin.from("arcade_runs").update({used_at:now.toISOString()}).eq("id",runId).is("used_at",null).select("id").maybeSingle();
    if(consumeError||!claimedRun)return json({error:"run_already_used"},409,origin);
    const {data:inserted,error:insertError}=await admin.from("arcade_scores").insert({game_id:game,player_name:name,score:replay.score}).select("game_id,player_name,score,created_at").single();
    if(insertError||!inserted)return json({error:"score_insert_failed"},500,origin);
    return json({ok:true,record:inserted,verified:true,verification:"server_replay"},200,origin);
  }

  return json({error:"unknown_action"},400,origin);
});
