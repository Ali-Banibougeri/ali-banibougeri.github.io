(() => {
  const translations = {
    "Ali Bani Bougeri — Applied AI & Python Engineering":"علی بنی‌بوگری — مهندسی پایتون و هوش مصنوعی کاربردی",
    "Ali Bani Bougeri":"علی بنی‌بوگری",
    "© Ali Bani Bougeri · Applied AI & Python Engineering":"© علی بنی‌بوگری · هوش مصنوعی کاربردی و مهندسی پایتون",
    "Applied AI · Python · Petroleum & industrial data context":"هوش مصنوعی کاربردی · پایتون · شناخت صنعت نفت و داده‌های صنعتی",
    "Information retrieval":"بازیابی اطلاعات",
    "LLM evaluation":"ارزیابی مدل‌های زبانی",
    "Energy & industry":"انرژی و صنعت",
    "Routing":"مسیریابی",
    "Async I/O":"ورودی/خروجی ناهمگام",
    "Drilling operations":"عملیات حفاری",
    "Rig workflows":"فرایندهای دکل حفاری",
    "Well-control equipment familiarity":"آشنایی با تجهیزات کنترل چاه",
    "HSE procedures":"رویه‌های ایمنی، بهداشت و محیط‌زیست",
    "Petroleum operational data context":"شناخت داده‌های عملیاتی نفت",
    "Industrial process knowledge":"شناخت فرایندهای صنعتی",
    "Ali Bani Bougeri | Applied AI & Python Engineering":"علی بنی‌بوگری | هوش مصنوعی کاربردی و مهندسی پایتون",
    "Ali Bani Bougeri | Applied AI & Python Engineer":"علی بنی‌بوگری | مهندس هوش مصنوعی کاربردی و پایتون",
    "Each block cleared in a completed line earns 1 point.":"هر بلوکی که با کامل‌شدن یک خط پاک شود، ۱ امتیاز دارد.",
    "Your nickname is saved here. Save this score?":"نام شما در این مرورگر ذخیره شده است. این رکورد را ثبت می‌کنید؟",
    "07 / Guestbook":"۰۷ / دفتر نظرات",
    "Leave a thoughtful note.":"یادداشتی کوتاه و ارزشمند بگذارید.",
    "Share a suggestion, a kind word, or a professional thought. Please keep it respectful and under 100 words.":"پیشنهاد، پیام محبت‌آمیز یا دیدگاه حرفه‌ای‌تان را بنویسید. لطفاً محترمانه و حداکثر در ۱۰۰ کلمه باشد.",
    "A small guestbook":"دفترچه‌ای کوچک برای پیام‌ها",
    "A few words can start a meaningful conversation.":"چند کلمه می‌تواند آغاز یک گفت‌وگوی ارزشمند باشد.",
    "This space is for feedback, ideas, and constructive messages. Please avoid private or sensitive information.":"این فضا برای بازخورد، ایده‌ها و پیام‌های سازنده است. لطفاً اطلاعات خصوصی یا حساس ننویسید.",
    "100 words max":"حداکثر ۱۰۰ کلمه",
    "No account needed":"بدون نیاز به حساب کاربری",
    "Be respectful":"با احترام بنویسید",
    "Posting as":"ارسال با نام",
    "Change name":"تغییر نام",
    "Your name or nickname":"نام یا نام مستعار شما",
    "How should we call you?":"شما را با چه نامی صدا کنیم؟",
    "Your message":"متن پیام",
    "Write a note... (up to 100 words)":"پیام خود را بنویسید... (حداکثر ۱۰۰ کلمه)",
    "Up to 1,000 characters":"حداکثر ۱۰۰۰ نویسه",
    "Post comment ↗":"ثبت نظر ↗",
    "Your note is public. Your nickname stays saved in this browser for next time.":"نظر شما عمومی است و نام مستعار پس از ثبت نظر در این مرورگر ذخیره می‌شود.",
    "Visitor notes":"پیام‌های بازدیدکنندگان",
    "0 notes":"۰ نظر",
    "Loading notes…":"در حال بارگذاری نظرات…",
    "Guest":"مهمان",
    "notes":"نظر",
    "No notes yet. Be the first to leave one.":"هنوز نظری ثبت نشده؛ اولین نفر باشید.",
    "The guestbook is temporarily unavailable.":"دفتر نظرات فعلاً در دسترس نیست.",
    "Could not load notes just now. Please refresh and try again.":"بارگذاری نظرات انجام نشد؛ صفحه را تازه‌سازی کنید.",
    "Please enter a nickname with at least 2 characters.":"لطفاً نامی با حداقل ۲ نویسه وارد کنید.",
    "Please keep your note within 100 words.":"لطفاً نظر را حداکثر در ۱۰۰ کلمه بنویسید.",
    "Comments are temporarily unavailable.":"ثبت نظر فعلاً در دسترس نیست.",
    "Posting…":"در حال ثبت…",
    "Thank you — your note has been posted.":"ممنون؛ نظر شما ثبت شد.",
    "The comment could not be confirmed. Please refresh and check the list.":"ثبت نظر تأیید نشد؛ صفحه را تازه‌سازی و فهرست را بررسی کنید.",
    "Could not post your note. Please try again later.":"ثبت نظر انجام نشد؛ لطفاً بعداً دوباره تلاش کنید.",
    "Your nickname is saved on this browser.":"نام شما در این مرورگر ذخیره شده است.",
    "Ali Bani Bougeri is an applied AI and Python engineer building LLM/RAG prototypes, data pipelines and automation tools, with experience in petroleum and drilling operations.":"علی بنی‌بوگری مهندس پایتون و هوش مصنوعی کاربردی است و روی نمونه‌های LLM/RAG، خط لوله‌های داده و ابزارهای اتوماسیون کار می‌کند؛ با تجربه در حوزه نفت و عملیات حفاری.",
    "Applied AI, Python engineering, LLM/RAG prototypes, data pipelines and industrial automation.":"هوش مصنوعی کاربردی، مهندسی پایتون، نمونه‌های LLM/RAG، خط لوله داده و اتوماسیون صنعتی.",
    "Made with ❤️ · Built with":"ساخته‌شده با ❤️ · با کمک",
    "Template ↗":"قالب ↗",
    "Guestbook":"دفتر نظرات","About":"درباره من","Experience":"تجربه","Projects":"پروژه‌ها","Skills":"مهارت‌ها","Contact":"تماس",
    "A Little Intermission ↗":"وقفه‌ای کوتاه ↗","A Little Intermission":"وقفه‌ای کوتاه",
    "Applied AI · Python Engineering":"هوش مصنوعی کاربردی · مهندسی پایتون",
    "Industrial AI · Petroleum & Drilling Operations":"هوش مصنوعی صنعتی · نفت و عملیات حفاری",
    "Building useful AI systems,":"ساخت سیستم‌های کاربردی هوش مصنوعی،",
    "from data to decisions.":"از داده تا تصمیم.",
    "I'm Ali Bani Bougeri, a Python developer and applied AI practitioner pursuing an M.Sc. in Artificial Intelligence. My background combines software and data engineering with field experience in drilling operations at the National Iranian Drilling Company. I build data-collection pipelines, LLM/RAG prototypes, and automation tools, with a particular interest in applying AI to industrial and petroleum-domain problems.":"من علی بنی‌بوگری هستم؛ توسعه‌دهنده پایتون و فعال در حوزه هوش مصنوعی کاربردی که در مقطع کارشناسی ارشد هوش مصنوعی تحصیل می‌کنم. پیشینه من مهندسی نرم‌افزار و داده را با تجربه میدانی عملیات حفاری در شرکت ملی حفاری ایران ترکیب می‌کند. خط لوله‌های گردآوری داده، نمونه‌های LLM/RAG و ابزارهای اتوماسیون می‌سازم و به کاربرد هوش مصنوعی در صنعت و حوزه نفت علاقه‌مندم.",
    "Contact me ↗":"تماس با من ↗","Explore GitHub ↗":"مشاهده گیت‌هاب ↗","Print / Save PDF ↓":"چاپ / ذخیره PDF ↓",
    "● Isfahan, Iran":"● اصفهان، ایران","Current focus":"تمرکز فعلی",
    "LLM Applications & RAG":"کاربردهای مدل زبانی و RAG","Grounded retrieval, semantic search, and AI-assisted workflows":"بازیابی مستند، جست‌وجوی معنایی و گردش‌کارهای هوشمند",
    "Knowledge-Intensive Systems":"سامانه‌های دانش‌محور","Knowledge graphs, information retrieval, technical document workflows":"گراف دانش، بازیابی اطلاعات و گردش‌کار اسناد فنی",
    "Applied & Industrial AI":"هوش مصنوعی کاربردی و صنعتی","Practical Python systems, data pipelines, enterprise automation":"سامانه‌های پایتونی، خط لوله داده و اتوماسیون سازمانی",
    "Petroleum & Drilling Data Context":"زمینه داده‌های نفت و حفاری","Field exposure to drilling operations and industrial data context":"تجربه میدانی عملیات حفاری و شناخت زمینه داده‌های صنعتی",
    "01 / Profile":"۰۱ / معرفی","Engineering first.":"اول مهندسی.","Research-minded.":"با نگاه پژوهشی.",
    "A cross-disciplinary background connecting software development, applied AI, and industrial domain knowledge.":"پیشینه‌ای میان‌رشته‌ای در پیوند توسعه نرم‌افزار، هوش مصنوعی کاربردی و دانش صنعت.",
    "I develop Python-based software and AI prototypes that turn messy data and complex workflows into usable tools. My experience includes web data collection, backend APIs, analytics, machine learning, deep learning, and early-stage LLM/RAG systems.":"نرم‌افزارهای پایتونی و نمونه‌های هوش مصنوعی می‌سازم که داده‌های پراکنده و فرایندهای پیچیده را به ابزارهای قابل استفاده تبدیل می‌کنند. تجربه من شامل گردآوری داده از وب، APIهای بک‌اند، تحلیل داده، یادگیری ماشین و عمیق و سامانه‌های اولیه LLM/RAG است.",
    "My background combines a B.Sc. in Petroleum Engineering from the Petroleum University of Technology in Abadan with field-based drilling operations experience at the National Iranian Drilling Company (NIDC). That experience gives me practical familiarity with rig workflows, drilling operations, safety procedures, and the operational context needed to interpret petroleum and industrial data.":"پیشینه من شامل کارشناسی مهندسی نفت از دانشگاه صنعت نفت در آبادان و تجربه میدانی عملیات حفاری در شرکت ملی حفاری ایران است. این تجربه شناخت عملی از گردش‌کار دکل، عملیات حفاری، الزامات ایمنی و زمینه عملیاتی لازم برای تفسیر داده‌های نفتی و صنعتی را برایم فراهم کرده است.",
    "Alongside my M.Sc. studies in Artificial Intelligence, I work in HR and workforce planning at NIDC, focusing on enterprise process improvement and Odoo-based workflow automation. I am interested in connecting applied AI, information retrieval, and data engineering with real industrial problems.":"در کنار تحصیل کارشناسی ارشد هوش مصنوعی، در حوزه منابع انسانی و برنامه‌ریزی نیروی انسانی شرکت ملی حفاری فعالیت می‌کنم و بر بهبود فرایندهای سازمانی و اتوماسیون گردش‌کار با Odoo تمرکز دارم. علاقه‌مندم هوش مصنوعی کاربردی، بازیابی اطلاعات و مهندسی داده را به مسائل واقعی صنعت پیوند بدهم.",
    "Python systems":"سامانه‌های پایتونی","LLM integration":"یکپارچه‌سازی LLM","Web data collection":"گردآوری داده وب","Petroleum data context":"زمینه داده‌های نفتی","Workflow automation":"اتوماسیون گردش‌کار",
    "Research direction":"مسیر پژوهشی","Exploring how RAG and graph-based retrieval can improve evidence-grounded question answering over technical and industrial documents.":"بررسی اینکه RAG و بازیابی مبتنی بر گراف چگونه می‌توانند پاسخ‌گویی مستند به پرسش‌ها درباره اسناد فنی و صنعتی را بهبود دهند.",
    "Working style":"شیوه کار","Prototype quickly, measure what matters, document decisions, and turn research ideas into maintainable software.":"نمونه‌سازی سریع، اندازه‌گیری معیارهای مهم، مستندسازی تصمیم‌ها و تبدیل ایده پژوهشی به نرم‌افزار قابل نگهداری.",
    "02 / Experience":"۰۲ / سوابق","Professional experience":"تجربه حرفه‌ای","Enterprise process automation, Python development, and data-driven technology work.":"اتوماسیون فرایندهای سازمانی، توسعه پایتون و راهکارهای فناورانه مبتنی بر داده.",
    "National Iranian Drilling Company (NIDC)":"شرکت ملی حفاری ایران",
    "Ahvaz, Iran · Continuous employment across field operations and workforce planning":"اهواز، ایران · سابقه پیوسته از عملیات میدانی تا برنامه‌ریزی نیروی انسانی",
    "HR & Workforce Planning Specialist":"کارشناس منابع انسانی و برنامه‌ریزی نیروی انسانی",
    "Work on workforce-planning and HR process analysis in an industrial organization.":"فعالیت در حوزه برنامه‌ریزی نیروی انسانی و تحلیل فرایندهای منابع انسانی در یک سازمان صنعتی.",
    "Design Odoo-based performance-evaluation workflows and management decision-support views.":"طراحی گردش‌کارهای ارزیابی عملکرد مبتنی بر Odoo و نماهای پشتیبان تصمیم مدیریتی.",
    "Translate business rules into structured processes intended to improve consistency, traceability, and data-informed decisions.":"تبدیل قواعد کسب‌وکار به فرایندهای ساخت‌یافته برای افزایش یکپارچگی، ردیابی‌پذیری و تصمیم‌گیری مبتنی بر داده.",
    "Drilling Operations Personnel · Field Operations":"نیروی عملیات حفاری · عملیات میدانی",
    "Worked in field-based drilling operations within a shift-based rig environment.":"فعالیت میدانی در عملیات حفاری و محیط کاری شیفتی دکل.",
    "Gained practical familiarity with rig workflows, drilling procedures, well-control equipment, and HSE practices.":"کسب آشنایی عملی با گردش‌کار دکل، رویه‌های حفاری، تجهیزات کنترل چاه و رویه‌های HSE.",
    "Built first-hand context for interpreting drilling and petroleum operational data and translating field needs into software or analytics requirements.":"کسب شناخت مستقیم از زمینه داده‌های عملیاتی حفاری و نفت و تبدیل نیازهای میدانی به نیازمندی‌های نرم‌افزاری یا تحلیلی.",
    "Python Developer":"توسعه‌دهنده پایتون","Technology Monitoring · Isfahan, Iran":"پایش فناوری · اصفهان، ایران",
    "Developed Python services and REST APIs using Django/Flask with PostgreSQL integration.":"توسعه سرویس‌های پایتون و APIهای REST با Django/Flask و اتصال به PostgreSQL.",
    "Worked on conversational AI and retrieval-augmented workflows for finding and answering questions over data.":"فعالیت روی هوش مصنوعی مکالمه‌ای و گردش‌کارهای بازیابی‌افزوده برای جست‌وجو و پاسخ‌گویی بر پایه داده.",
    "Built data-processing pipelines with NumPy and Pandas and wrote unit/integration tests for software reliability.":"ساخت خط لوله‌های پردازش داده با NumPy و Pandas و نوشتن آزمون‌های واحد و یکپارچه‌سازی برای افزایش قابلیت اطمینان نرم‌افزار.",
    "Technology Development Specialist":"کارشناس توسعه فناوری",
    "Collected, processed, analyzed, and visualized internal and web-sourced data.":"گردآوری، پردازش، تحلیل و مصورسازی داده‌های داخلی و داده‌های گردآوری‌شده از وب.",
    "Contributed to analytics and brand-intelligence systems to support organizational decisions.":"مشارکت در سامانه‌های تحلیل داده و هوشمندی برند برای پشتیبانی از تصمیم‌های سازمانی.",
    "Worked with cross-functional stakeholders to translate technology needs into practical software solutions.":"همکاری با ذی‌نفعان واحدهای مختلف برای تبدیل نیازهای فناوری به راهکارهای نرم‌افزاری عملی.",
    "03 / Selected work":"۰۳ / کارهای منتخب","Projects & prototypes":"پروژه‌ها و نمونه‌ها","Public repositories and product work. Project status is stated explicitly; no performance metrics are claimed without published evaluations.":"مخازن عمومی و پروژه‌های محصول. وضعیت هر پروژه شفاف بیان شده و بدون ارزیابی منتشرشده ادعای عددی درباره عملکرد مطرح نشده است.",
    "One4All — Modular Expert System with SLMs":"One4All — سامانه ماژولار مدل‌های زبانی تخصصی",
    "A prototype concept for routing questions to domain-specialized language-model experts and using LoRA adapters to support modular model specialization on constrained hardware.":"نمونه‌ای برای مسیریابی پرسش‌ها به مدل‌های زبانی تخصصی هر حوزه و استفاده از آداپتورهای LoRA برای تخصصی‌سازی ماژولار روی سخت‌افزار محدود.",
    "Research prototype · In progress":"نمونه پژوهشی · در حال توسعه","View repository ↗":"مشاهده مخزن ↗",
    "DataScrapeKit — Persian Web Crawler":"DataScrapeKit — خزنده وب فارسی",
    "A modular asynchronous collection tool for Persian-language web content, aimed at corpus preparation and downstream NLP/LLM dataset workflows, with SQLite-based storage.":"ابزار ماژولار و ناهمگام برای گردآوری محتوای فارسی وب با هدف آماده‌سازی پیکره و مجموعه‌داده‌های NLP/LLM، همراه با ذخیره‌سازی مبتنی بر SQLite.",
    "Open-source project":"پروژه متن‌باز",
    "Divar Scraper — Classifieds Data Pipeline":"Divar Scraper — خط لوله داده آگهی‌ها",
    "An end-to-end Python data-collection pipeline for Divar listings. Selenium navigates dynamic search pages and extracts listing tokens; Scrapy retrieves listing details and exports structured JSON/CSV data for downstream analysis.":"خط لوله کامل گردآوری داده آگهی‌های دیوار با پایتون. Selenium صفحات جست‌وجوی پویا را پیمایش و توکن آگهی‌ها را استخراج می‌کند؛ Scrapy جزئیات آگهی را می‌گیرد و داده ساخت‌یافته JSON/CSV برای تحلیل بعدی تولید می‌کند.",
    "Active development":"در حال توسعه","04 / Toolkit":"۰۴ / ابزارها","Technical skills":"مهارت‌های فنی","Grouped by practical use rather than subjective percentage ratings.":"مهارت‌ها بر اساس کاربرد عملی دسته‌بندی شده‌اند، نه درصدهای خودارزیابی ذهنی.",
    "Programming & backend":"برنامه‌نویسی و بک‌اند","Machine learning & deep learning":"یادگیری ماشین و یادگیری عمیق","LLMs, NLP & retrieval":"مدل‌های زبانی، NLP و بازیابی","Data & automation":"داده و اتوماسیون","Petroleum & industrial domain":"حوزه نفت و صنعت",
    "05 / Education":"۰۵ / تحصیلات","Education":"تحصیلات","An interdisciplinary foundation in petroleum engineering and artificial intelligence.":"پایه‌ای میان‌رشته‌ای در مهندسی نفت و هوش مصنوعی.",
    "M.Sc. in Computer Engineering — Artificial Intelligence":"کارشناسی ارشد مهندسی کامپیوتر — هوش مصنوعی","University of Isfahan · Isfahan, Iran":"دانشگاه اصفهان · اصفهان، ایران",
    "B.Sc. in Petroleum Engineering":"کارشناسی مهندسی نفت","Petroleum University of Technology · Abadan, Iran":"دانشگاه صنعت نفت · آبادان، ایران",
    "06 / Contact":"۰۶ / تماس","Let's build something useful — or investigate a good research question.":"بیایید چیزی کاربردی بسازیم یا یک پرسش پژوهشی ارزشمند را بررسی کنیم.",
    "I'm interested in applied AI engineering, LLM and retrieval systems, enterprise automation, and research collaborations around industrial knowledge systems.":"به مهندسی هوش مصنوعی کاربردی، سامانه‌های LLM و بازیابی، اتوماسیون سازمانی و همکاری پژوهشی درباره سامانه‌های دانش‌محور صنعتی علاقه‌مندم.",
    "Start a conversation ↗":"شروع گفت‌وگو ↗","Email":"ایمیل","GitHub":"گیت‌هاب","Languages":"زبان‌ها",
    "Persian (native) · English (technical reading/listening; developing professional writing and speaking)":"فارسی (زبان مادری) · انگلیسی (مطالعه و شنیدن فنی؛ در حال تقویت نوشتار و مکالمه حرفه‌ای)",
    "© Ali Bani Bougeri · Applied AI & Python Engineering":"© علی بنی‌بوگری · هوش مصنوعی کاربردی و مهندسی پایتون",
    "Applied AI · Python · Petroleum & industrial data context":"هوش مصنوعی کاربردی · پایتون · داده‌های نفت و صنعت",

    "Oct 2024 — Present":"اکتبر ۲۰۲۴ تا اکنون",
    "Jun 2026 — Present":"ژوئن ۲۰۲۶ تا اکنون",
    "Oct 2024 — Mar 2026":"اکتبر ۲۰۲۴ تا مارس ۲۰۲۶",
    "Apr 2024 — Oct 2024":"آوریل ۲۰۲۴ تا اکتبر ۲۰۲۴",
    "May 2023 — Mar 2024":"مه ۲۰۲۳ تا مارس ۲۰۲۴",
    "2024 — Present":"۲۰۲۴ تا اکنون",
    "2016 — 2021":"۲۰۱۶ تا ۲۰۲۱",

    "Server verification failed. This score was not added to the shared board.":"اعتبارسنجی سرور ناموفق بود؛ این امتیاز در جدول مشترک ثبت نشد.",
    "The shared API is unavailable; this record is local only.":"API مشترک در دسترس نیست؛ این رکورد فقط محلی ذخیره شده است.",
    "This score is saved only in this browser. Configure Supabase and deploy arcade-api for shared verified scores.":"این امتیاز فقط در همین مرورگر ذخیره شده است. برای رکورد مشترک و تأییدشده، Supabase را تنظیم و arcade-api را منتشر کن.",
    "SCORE REJECTED BY SERVER — RESTART TO TRY AGAIN":"امتیاز توسط سرور رد شد — دوباره بازی کن",
    "TRACE TOO LONG — SCORE NOT SUBMITTABLE":"ردیابی بازی بیش از حد طولانی است — امتیاز قابل ثبت نیست",
    "The shared API is unavailable; this record is local only.":"API مشترک در دسترس نیست؛ این رکورد فقط محلی ذخیره شده است.",
    "Unique visits":"بازدیدهای یکتا",
    "Build your own résumé site ↗":"راهنمای ساخت وب‌سایت رزومه ↗",
    "INSERT COIN · PLAYER 01":"سکه را وارد کن · بازیکن ۰۱",
    "Now playing /":"در حال بازی /",
    "This game requires a modern browser with canvas support.":"برای اجرای این بازی به مرورگر جدید با پشتیبانی Canvas نیاز است.",
    "LOCAL MODE · Records are saved in this browser only until shared storage is configured.":"حالت محلی · تا زمان اتصال ذخیره‌سازی مشترک، رکوردها فقط در این مرورگر ذخیره می‌شوند.",
    "LOCAL MODE · Records stay in this browser until shared storage is configured.":"حالت محلی · رکوردها تا زمان اتصال دیتابیس فقط در این مرورگر می‌مانند.",
    "Shared scoreboard setup:":"راه‌اندازی جدول رکورد مشترک:",
    "the public key is configured; run the database SQL and deploy the Edge Function to enable shared scores and visitor counts. In local mode records stay in this browser. Follow the":"کلید عمومی تنظیم شده است؛ برای فعال‌شدن رکوردهای مشترک و شمارنده بازدید، SQL دیتابیس را اجرا و تابع Edge را منتشر کن. در حالت محلی رکوردها فقط در همین مرورگر می‌مانند. برای راه‌اندازی،",
    "and":"و",
    "to turn on shared records.":"برای فعال‌سازی رکوردهای مشترک.",

    "Choose a game":"انتخاب بازی",
    "← Back to résumé":"← بازگشت به رزومه",
    "A little corner of the internet for the classic games that made a few pixels feel like an entire universe. Pick a game, chase a high score, and leave a little nostalgia behind.":"گوشه‌ای کوچک از اینترنت برای بازی‌های کلاسیکی که چند پیکسل را به یک جهان کامل تبدیل می‌کردند. بازی‌ات را انتخاب کن، دنبال رکورد برو و کمی نوستالژی به‌جا بگذار.",
    "Page visits":"بازدیدهای صفحه",
    "Unique visits":"بازدیدهای یکتا",
    "Page visits":"بازدید صفحه","Unique visits (browser/day)":"بازدید یکتا (مرورگر/روز)",
    "A tiny escape from the scroll":"وقفه‌ای کوچک میان پیمایش‌ها",
    "Pause the work.":"کمی از کار فاصله بگیر.","Press play.":"و بازی را شروع کن.",
    "Two classic games. One shared arcade. All signal, no noise.":"دو بازی کلاسیک؛ یک آرکید مشترک. نوستالژی خالص، بدون شلوغی.",
    "01 / Choose your game":"۰۱ / انتخاب بازی","Which memory are we playing?":"کدام خاطره را بازی کنیم؟",
    "Snake — Pocket Classic":"مار — کلاسیک جیبی","A mint bonus appears at random. Eat it before it vanishes for +30 points.":"غذای ویژهٔ فیروزه‌ای تصادفی ظاهر می‌شود؛ پیش از ناپدید شدن آن را بخور و ۳۰ امتیاز بگیر.",
    "One more pixel. One more turn. Try not to eat your own tail.":"یک پیکسل دیگر، یک دور دیگر؛ فقط دم خودت را نخور!",
    "PLAY SNAKE ↗":"شروع مار ↗","ARROWS / WASD":"جهت‌ها / WASD",
    "Tetris — Falling Blocks":"تتریس — بلوک‌های سقوط‌کننده","Fit the falling pieces, clear lines, and chase a higher score.":"قطعه‌های در حال سقوط را بچین، خط‌ها را کامل کن و امتیاز بیشتری بگیر.",
    "PLAY TETRIS ↗":"شروع تتریس ↗","ARROWS / UP / SPACE":"جهت‌ها / بالا / فاصله",
    "Now playing /":"در حال بازی /","PLAYER ONE · READY":"بازیکن اول · آماده","SNAKE // POCKET GAME":"مار // بازی جیبی","AB-ARCADE / 001":"آرکید AB / ۰۰۱",
    "READY — PRESS START":"آماده — شروع را بزن","PERSONAL BEST":"بهترین امتیاز شخصی","PIXELS · PATIENCE · PLAY":"پیکسل · صبر · بازی",
    "Current score":"امتیاز فعلی","Collect food to grow.":"غذا را بخور و بزرگ شو.","Personal best":"بهترین امتیاز شخصی","Top record":"رکورد برتر",
    "Start game":"شروع بازی","Pause":"مکث","Restart":"شروع دوباره","Move with arrow keys or WASD. Avoid the walls and your tail.":"با کلیدهای جهت یا WASD حرکت کن؛ به دیوار و دم خودت برخورد نکن.",
    "High-score hall":"تالار رکوردها","LOCAL MODE":"حالت محلی","SHARED BOARD":"جدول مشترک","LOCAL FALLBACK":"بازگشت به محلی","Player":"بازیکن","Score":"امتیاز","Date":"تاریخ","Loading records…":"در حال بارگذاری رکوردها…",
    "New high score! Put your name on the board.":"رکورد جدید! نامت را در جدول ثبت کن.","Save record":"ثبت رکورد",
    "Use a nickname, not private contact details. Names and scores may be public.":"از نام مستعار استفاده کن و اطلاعات تماس خصوصی ننویس. نام و امتیاز ممکن است عمومی باشد.",
    "LOCAL MODE · Records are saved in this browser only until shared storage is configured.":"حالت محلی · تا زمان اتصال دیتابیس، رکوردها فقط در همین مرورگر ذخیره می‌شوند.",
    "Shared scoreboard setup:":"راه‌اندازی جدول رکورد مشترک:","database setup SQL":"فایل SQL راه‌اندازی دیتابیس","repository guide":"راهنمای مخزن","to turn on shared records.":"برای فعال‌سازی رکوردهای مشترک.",
    "© Ali Bani Bougeri · A Little Intermission":"© علی بنی‌بوگری · وقفه‌ای کوتاه",
    "Left/Right to move, Down to soft-drop, Up/W to rotate, Space to hard-drop.":"چپ/راست برای حرکت، پایین برای سقوط سریع، بالا/W برای چرخاندن و فاصله برای سقوط فوری.",
    "Clear lines to score; higher scores fall faster.":"با کامل‌کردن خط‌ها امتیاز بگیر؛ هرچه امتیازت بیشتر شود، قطعه‌ها سریع‌تر می‌افتند.","Left/Right to move, Down to soft-drop, Up/W to rotate, Space to hard-drop.":"چپ/راست برای حرکت، پایین برای سقوط سریع، بالا/W برای چرخاندن و فاصله برای سقوط فوری.",
    "PLAYING — GOOD LUCK!":"بازی شروع شد — موفق باشی!","PAUSED — PRESS START":"مکث — برای ادامه شروع را بزن",
    "GAME OVER":"پایان بازی","GAME OVER — SCORE ":"پایان بازی — امتیاز ",
    "RECORD SAVED LOCALLY":"رکورد به‌صورت محلی ذخیره شد","RECORD SAVED TO SHARED BOARD":"رکورد در جدول مشترک ذخیره شد",
    "REMOTE SAVE FAILED — SAVED LOCALLY":"ذخیره مشترک ناموفق بود؛ رکورد محلی ذخیره شد",
    "No records yet. Claim the first place!":"هنوز رکوردی نیست؛ اولین نفر باش!","No records yet on this browser.":"هنوز در این مرورگر رکوردی ثبت نشده.",
    "Enter a nickname. The nickname and score will be public.":"نام مستعار وارد کن؛ نام و امتیاز عمومی خواهد بود.",
    "This record is local for now; connect shared storage to publish it for everyone.":"فعلاً رکورد محلی است؛ برای نمایش به همه، دیتابیس مشترک را وصل کن.",
    "Please enter a nickname with at least 2 characters.":"نام مستعار باید دست‌کم ۲ نویسه داشته باشد.",
    "Shared storage unavailable; showing records saved in this browser.":"ذخیره‌سازی مشترک در دسترس نیست؛ رکوردهای این مرورگر نمایش داده می‌شوند.",
    "No records yet. Be the first player on this browser.":"هنوز رکوردی نیست؛ اولین بازیکن این مرورگر باش.",
    "SHARED MODE · Nicknames and scores are visible to all visitors.":"حالت مشترک · نام مستعار و امتیاز برای همه بازدیدکنندگان قابل مشاهده است.",
    "LOCAL MODE · Records stay in this browser until shared storage is configured.":"حالت محلی · رکوردها تا زمان تنظیم دیتابیس فقط در این مرورگر می‌مانند.",
    "SHARED MODE · Nicknames and scores can be seen by all visitors.":"حالت مشترک · نام‌ها و امتیازها برای همه بازدیدکنندگان قابل مشاهده است.",
    "Shared storage is unavailable. Showing local records for now.":"ذخیره‌سازی مشترک در دسترس نیست؛ فعلاً رکوردهای محلی نمایش داده می‌شوند.",
    "REMOTE SAVE FAILED — SAVED LOCALLY":"ذخیره در سرور ناموفق بود؛ فقط محلی ذخیره شد.",
    "Shared leaderboard setup: the arcade is ready for a free Supabase database, but its project URL and publishable key are not configured yet. In local mode records stay in this browser. Follow the":"جدول رکورد مشترک: آرکید برای دیتابیس رایگان Supabase آماده است، اما URL پروژه و کلید عمومی هنوز تنظیم نشده‌اند. در حالت محلی، رکوردها فقط در مرورگر ذخیره می‌شوند. برای راه‌اندازی،",
    "HIGH-SCORE LEADERBOARD":"جدول رکوردهای برتر"
  };

  const originals = new WeakMap();
  let current = "en";
  function rememberAndTranslate(root=document.body) {
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const list=[];
    while(walker.nextNode()){
      const node=walker.currentNode;
      const parent=node.parentElement;
      if(!parent||parent.closest("script,style,canvas,noscript"))continue;
      list.push(node);
    }
    for(const node of list){
      if(!originals.has(node)) originals.set(node,node.nodeValue || "");
      const original=originals.get(node);
      const trimmed=original.trim();
      if(!trimmed)continue;
      let translated=trimmed;
      if(current==="fa"){
        translated=translations[trimmed]||trimmed;
        if(!translations[trimmed]){
          const prefix=Object.keys(translations).filter(k=>k.endsWith(" ")&&trimmed.startsWith(k)).sort((a,b)=>b.length-a.length)[0];
          if(prefix)translated=translations[prefix]+trimmed.slice(prefix.length);
        }
      }
      const start=original.match(/^\s*/)?.[0]||"";
      const end=original.match(/\s*$/)?.[0]||"";
      node.nodeValue=start+translated+end;
    }
    document.querySelectorAll("[placeholder],[title],[aria-label]").forEach(el=>{
      ["placeholder","title","aria-label"].forEach(attr=>{
        if(!el.hasAttribute(attr))return;
        const value=el.getAttribute(attr);
        if(!el.dataset["i18nOriginal"+attr])el.dataset["i18nOriginal"+attr]=value;
        const orig=el.dataset["i18nOriginal"+attr];
        el.setAttribute(attr,current==="fa"?(translations[orig]||orig):orig);
      });
    });
  }
  function ensureToggle(){
    let nav=document.querySelector(".nav-links")||document.querySelector(".nav-right");
    if(!nav||document.getElementById("languageToggle"))return;
    const button=document.createElement("button");
    button.id="languageToggle";button.type="button";button.className="language-toggle";
    button.addEventListener("click",()=>{
      const next=current==="en"?"fa":"en";
      const isPersianPath=window.location.pathname.startsWith("/fa/");
      if(next==="fa"&&!isPersianPath){
        try{localStorage.setItem("ali-site-language","fa")}catch(_){}
        window.location.href="/fa/";return;
      }
      if(next==="en"&&isPersianPath){
        try{localStorage.setItem("ali-site-language","en")}catch(_){}
        window.location.href="/";return;
      }
      setLanguage(next,true);
    });
    nav.appendChild(button);
  }
  function updateMeta(){
    document.documentElement.lang=current;
    document.documentElement.dir=current==="fa"?"rtl":"ltr";
    const toggle=document.getElementById("languageToggle");
    if(toggle){toggle.textContent=current==="fa"?"English":"فارسی";toggle.title=current==="fa"?"Switch to English":"نمایش فارسی";toggle.setAttribute("aria-label",toggle.title)}
    const isArcade=document.body.dataset.page==="arcade";
    document.title=isArcade
      ?(current==="fa"?"وقفه‌ای کوتاه — آرکید مار و تتریس | علی بنی‌بوگری":"A Little Intermission — Snake & Tetris | Ali Bani Bougeri")
      :(current==="fa"?"علی بنی‌بوگری | مهندس هوش مصنوعی کاربردی و پایتون":"Ali Bani Bougeri | Applied AI & Python Engineer");
    const desc=document.querySelector('meta[name="description"]');
    const description=current==="fa"
      ?(isArcade?"وقفه‌ای کوتاه؛ بازی مار و تتریس، ثبت رکورد و گذاشتن یادداشت در دفتر نظرات.":"رزومه علی بنی‌بوگری؛ مهندس پایتون و هوش مصنوعی کاربردی با تمرکز بر LLM/RAG، خط لوله داده و اتوماسیون صنعتی، همراه با تجربه در نفت و عملیات حفاری.")
      :(isArcade?"A Little Intermission — play Snake and Tetris, set a high score, and leave a note in the guestbook.":"Ali Bani Bougeri is an applied AI and Python engineer building LLM/RAG prototypes, data pipelines and automation tools, with experience in petroleum and drilling operations.");
    if(desc)desc.content=description;
    const ogTitle=document.querySelector('meta[property="og:title"]');
    if(ogTitle)ogTitle.content=document.title;
    const ogDesc=document.querySelector('meta[property="og:description"]');
    if(ogDesc)ogDesc.content=description;
    const ogLocale=document.querySelector('meta[property="og:locale"]');
    if(ogLocale)ogLocale.content=current==="fa"?"fa_IR":"en_US";
    const twitterTitle=document.querySelector('meta[name="twitter:title"]');
    if(twitterTitle)twitterTitle.content=document.title;
    const twitterDesc=document.querySelector('meta[name="twitter:description"]');
    if(twitterDesc)twitterDesc.content=description;
  }
  function setLanguage(lang,save){
    current=lang==="fa"?"fa":"en";
    if(save){try{localStorage.setItem("ali-site-language",current)}catch(_){}}
    rememberAndTranslate(document.body);
    updateMeta();
    window.dispatchEvent(new CustomEvent("site-language-changed",{detail:{language:current}}));
  }
  window.AliSiteI18n={setLanguage,getLanguage:()=>current,translate:()=>rememberAndTranslate(document.body)};
  ensureToggle();
  const isPersianPath=window.location.pathname.startsWith("/fa/");
  let saved=isPersianPath?"fa":"en";
  if(!isPersianPath){try{saved=localStorage.getItem("ali-site-language")||"en"}catch(_){}}
  setLanguage(saved,false);
  const observer=new MutationObserver(mutations=>{
    if(current!=="fa")return;
    for(const m of mutations){for(const node of m.addedNodes){if(node.nodeType===Node.TEXT_NODE){rememberAndTranslate(node.parentElement||document.body)}else if(node.nodeType===Node.ELEMENT_NODE){rememberAndTranslate(node)}}}
  });
  observer.observe(document.body,{childList:true,subtree:true});
})();