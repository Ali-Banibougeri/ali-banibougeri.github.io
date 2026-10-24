(() => {
  const cfg = window.ALI_SITE_CONFIG || {};
  const key = String(cfg.publishableKey || "").trim();
  const configured = Boolean(cfg.supabaseUrl && key.length > 10 && !key.includes("PASTE_SUPABASE"));
  const endpoint = String(cfg.supabaseUrl || "").replace(/\/$/, "") + "/functions/v1/" + (cfg.functionName || "arcade-api");
  const DISPLAY_NAME_KEY = "ali-browser-display-name-v1";
  function cleanDisplayName(value) {
    return String(value || "").replace(/[\u0000-\u001f\u007f]/g, "").trim().replace(/\s+/g, " ").slice(0, 18);
  }
  function getDisplayName() {
    try {
      const name = cleanDisplayName(localStorage.getItem(DISPLAY_NAME_KEY));
      return name.length >= 2 ? name : "";
    } catch (_) { return ""; }
  }
  function saveDisplayName(value) {
    const name = cleanDisplayName(value);
    if (name.length < 2) return "";
    try { localStorage.setItem(DISPLAY_NAME_KEY, name); } catch (_) {}
    window.dispatchEvent(new CustomEvent("ali-display-name-changed", { detail: { name } }));
    return name;
  }
  function visitorId() {
    const k = "ali-site-visitor-id-v1";
    try {
      let id = localStorage.getItem(k);
      if (!id) {
        id = crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
          const r = Math.random() * 16 | 0;
          return (c === "x" ? r : (r & 3 | 8)).toString(16);
        });
        localStorage.setItem(k, id);
      }
      return id;
    } catch (_) {
      return crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + "-" + String(Math.random());
    }
  }
  async function call(payload) {
    if (!configured) throw new Error("supabase_not_configured");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "apikey": key },
      body: JSON.stringify(payload),
      cache: "no-store"
    });
    let data = {};
    try { data = await response.json(); } catch (_) {}
    if (!response.ok) {
      const error = new Error(data.message || data.error || ("API " + response.status));
      error.status = response.status;
      error.code = data.error || "api_error";
      throw error;
    }
    return data;
  }
  window.AliSiteAPI = { call, isConfigured: () => configured, visitorId, getDisplayName, saveDisplayName };
  async function recordPageVisit() {
    const page = document.body && document.body.dataset ? document.body.dataset.page : null;
    const output = document.getElementById("pageViews");
    if (!output || !["home", "arcade"].includes(page) || !configured) return;
    try {
      const result = await call({ action: "view", page, visitor_id: visitorId() });
      output.textContent = new Intl.NumberFormat(document.documentElement.lang === "fa" ? "fa-IR" : "en-US").format(result.count);
      output.setAttribute("aria-label", String(result.count));
    } catch (_) {
      output.textContent = "—";
      output.title = document.documentElement.lang === "fa" ? "شمارنده پس از تنظیم Supabase فعال می‌شود" : "The counter will be enabled after Supabase setup.";
    }
  }

  function bindComments() {
    const form = document.getElementById("commentForm");
    if (!form) return;
    const list = document.getElementById("commentsList");
    const counter = document.getElementById("commentCounter");
    const count = document.getElementById("commentsCount");
    const display = document.getElementById("commentsDisplay");
    const nameInput = document.getElementById("commentName");
    const nameRow = document.getElementById("commentNameRow");
    const identity = document.getElementById("commentIdentity");
    const identityName = document.getElementById("commentIdentityName");
    const editName = document.getElementById("changeCommentName");
    const messageInput = document.getElementById("commentMessage");
    const submit = document.getElementById("submitComment");
    const status = document.getElementById("commentStatus");
    let comments = [];
    let submitting = false;
    const isFa = () => document.documentElement.lang === "fa";
    const t = (en, fa) => isFa() ? fa : en;
    const wordsIn = value => String(value || "").trim().split(/\s+/u).filter(Boolean).length;
    function updateCounter() {
      const words = wordsIn(messageInput.value);
      counter.textContent = t(words + " / 100 words", words + " / ۱۰۰ کلمه");
      counter.classList.toggle("over-limit", words > 100);
      submit.disabled = submitting || words < 1 || words > 100 || messageInput.value.length > 1000;
    }
    function showSavedIdentity(editing) {
      const saved = getDisplayName();
      if (saved && !editing) {
        nameInput.value = saved;
        nameRow.hidden = true;
        identity.hidden = false;
        identityName.textContent = saved;
      } else {
        nameRow.hidden = false;
        identity.hidden = true;
        if (saved) nameInput.value = saved;
      }
    }
    function addComment(comment) {
      const card = document.createElement("article");
      card.className = "comment-card";
      const head = document.createElement("div");
      head.className = "comment-card-head";
      const name = document.createElement("strong");
      name.className = "comment-author";
      name.textContent = String(comment.display_name || t("Guest", "مهمان")).slice(0, 18);
      const date = document.createElement("time");
      date.className = "comment-date";
      const stamp = new Date(comment.created_at);
      date.dateTime = Number.isNaN(stamp.getTime()) ? "" : stamp.toISOString();
      date.textContent = Number.isNaN(stamp.getTime()) ? "" : new Intl.DateTimeFormat(isFa() ? "fa-IR" : "en-US", { year: "numeric", month: "short", day: "numeric" }).format(stamp);
      head.append(name, date);
      const body = document.createElement("p");
      body.className = "comment-text";
      body.textContent = String(comment.message || "");
      card.append(head, body);
      list.append(card);
    }
    function renderComments() {
      list.replaceChildren();
      if (display) display.hidden = comments.length === 0;
      count.textContent = new Intl.NumberFormat(isFa() ? "fa-IR" : "en-US").format(comments.length) +
        t(" notes", " نظر");
      if (!comments.length) return;
      comments.forEach(addComment)
    }
    async function loadComments() {
      if (!configured) {
        list.textContent = t("The guestbook is temporarily unavailable.", "دفتر نظرات فعلاً در دسترس نیست.");
        return;
      }
      try {
        const result = await call({ action: "comments_list" });
        comments = Array.isArray(result.comments) ? result.comments : [];
        renderComments();
      } catch (_) {
        list.textContent = t("Could not load notes just now. Please refresh and try again.", "بارگذاری نظرات انجام نشد؛ صفحه را تازه‌سازی کنید.");
      }
    }
    editName.addEventListener("click", () => showSavedIdentity(true));
    nameInput.addEventListener("input", () => {
      const name = cleanDisplayName(nameInput.value);
      if (name.length >= 2) status.textContent = "";
    });
    messageInput.addEventListener("input", updateCounter);
    window.addEventListener("site-language-changed", () => {
      updateCounter();
      showSavedIdentity(!nameRow.hidden);
      renderComments();
    });
    form.addEventListener("submit", async event => {
      event.preventDefault();
      if (submitting) return;
      const name = cleanDisplayName(nameRow.hidden ? getDisplayName() : nameInput.value);
      const message = String(messageInput.value || "").trim();
      const words = wordsIn(message);
      if (name.length < 2) {
        showSavedIdentity(true);
        status.textContent = t("Please enter a nickname with at least 2 characters.", "لطفاً نامی با حداقل ۲ نویسه وارد کنید.");
        nameInput.focus();
        return;
      }
      if (!message || words > 100 || message.length > 1000) {
        updateCounter();
        status.textContent = t("Please keep your note within 100 words.", "لطفاً نظر را حداکثر در ۱۰۰ کلمه بنویسید.");
        return;
      }
      if (!configured || !window.AliSiteAPI) {
        status.textContent = t("Comments are temporarily unavailable.", "ثبت نظر فعلاً در دسترس نیست.");
        return;
      }
      submitting = true;
      submit.disabled = true;
      submit.textContent = t("Posting…", "در حال ثبت…");
      status.classList.remove("error");
      status.textContent = "";
      try {
        const result = await call({
          action: "comment_submit",
          visitor_id: visitorId(),
          display_name: name,
          message
        });
        if (!result.comment) throw new Error("comment_missing");
        saveDisplayName(name);
        comments = [result.comment, ...comments].slice(0, 30);
        renderComments();
        messageInput.value = "";
        showSavedIdentity(false);
        status.textContent = t("Thank you — your note has been posted.", "ممنون؛ نظر شما ثبت شد.");
      } catch (error) {
        status.classList.add("error");
        if (error && error.message === "comment_missing") {
          status.textContent = t("The comment could not be confirmed. Please refresh and check the list.", "ثبت نظر تأیید نشد؛ صفحه را تازه‌سازی و فهرست را بررسی کنید.");
        } else if (error && error.code === "comment_rate_limited") {
          status.textContent = t("You have posted a few notes recently. Please try again later.", "تعداد نظرات اخیر شما زیاد است؛ لطفاً بعداً دوباره تلاش کنید.");
        } else if (error && error.code === "invalid_comment") {
          status.textContent = t("Please use a nickname with 2–18 characters and a note no longer than 100 words.", "نام باید ۲ تا ۱۸ نویسه و متن نظر حداکثر ۱۰۰ کلمه باشد.");
        } else {
          status.textContent = t("Could not post your note. Please try again later.", "ثبت نظر انجام نشد؛ لطفاً بعداً دوباره تلاش کنید.");
        }
      } finally {
        submitting = false;
        submit.textContent = t("Post comment ↗", "ثبت نظر ↗");
        updateCounter();
      }
    });
    showSavedIdentity(false);
    updateCounter();
    loadComments();
  }

  document.addEventListener("DOMContentLoaded", () => {
    recordPageVisit();
    bindComments();
  }, { once: true });
  window.addEventListener("site-language-changed", () => {
    const out = document.getElementById("pageViews");
    if (out && out.textContent !== "—") {
      const n = Number(out.getAttribute("aria-label"));
      if (Number.isFinite(n)) out.textContent = new Intl.NumberFormat(document.documentElement.lang === "fa" ? "fa-IR" : "en-US").format(n);
    }
  });
})();