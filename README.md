# Ali Bani Bougeri — Portfolio & Arcade

<p align="center">
  <a href="https://ali-banibougeri.github.io/"><img src="https://img.shields.io/badge/Portfolio-Live-79d5c5?style=for-the-badge&logo=githubpages&logoColor=10151f" alt="Live portfolio"></a>
  <a href="https://ali-banibougeri.github.io/arcade/"><img src="https://img.shields.io/badge/Arcade-Play-f5a44b?style=for-the-badge&logo=gamepad&logoColor=10151f" alt="Play arcade"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT license"></a>
</p>

<p align="center"><strong>A bilingual portfolio, a tiny retro arcade, and a public guestbook.</strong><br><sub>Static frontend · GitHub Pages · Supabase Edge Functions</sub></p>

<p align="center"><a href="#فارسی">فارسی</a> · <a href="#english">English</a></p>

---

## فارسی

### معرفی

این مخزن، وب‌سایت شخصی و رزومهٔ دوزبانهٔ علی بنی‌بوگری و یک صفحهٔ مستقل برای بازی‌های آرکید را در بر می‌گیرد. پروژه با HTML، CSS و JavaScript ساخته شده و بدون فرایند build یا میزبان پولی روی GitHub Pages منتشر می‌شود.

- **رزومه:** [ali-banibougeri.github.io](https://ali-banibougeri.github.io/)
- **بازی‌ها و دفتر نظرات:** [صفحهٔ آرکید](https://ali-banibougeri.github.io/arcade/)
- **مخزن کد:** [GitHub](https://github.com/Ali-Banibougeri/ali-banibougeri.github.io)

### امکانات

- رزومهٔ واکنش‌گرا به زبان‌های فارسی و انگلیسی، با پشتیبانی از چیدمان راست‌چین.
- معرفی تجربه‌ها، مهارت‌ها و پروژه‌های منتخب در پایتون، هوش مصنوعی کاربردی، داده و اتوماسیون.
- صفحهٔ آرکید مستقل با بازی‌های Snake و Tetris، جدول رکوردها و کنترل‌های لمسی موبایل.
- دفتر نظرات عمومی در صفحهٔ آرکید؛ بدون نیاز به حساب کاربری، با نام یا نام مستعار و محدودیت ۱۰۰ کلمه و ۱۰۰۰ نویسه.
- نمایش کارت‌های نظرات فقط در صورت وجود نظر ثبت‌شده.
- ذخیرهٔ نام مستعار در مرورگر و ارتباط قابلیت‌های مشترک با Supabase.
- شمارندهٔ بازدیدهای یکتا، در صورت پیکربندی backend.
- فوتر یکپارچه با عبارت «ساخته‌شده با ❤️» در پایین همهٔ صفحات.

### ساختار پروژه

```text
.
├── index.html                    # رزومهٔ انگلیسی
├── fa/index.html                 # رزومهٔ فارسی
├── arcade/index.html             # بازی‌ها و دفتر نظرات
├── assets/
│   ├── i18n.js                   # ترجمه و تغییر زبان
│   ├── site-api.js               # API سمت مرورگر و شمارندهٔ بازدید
│   └── site-config.js            # تنظیمات عمومی قابل انتشار
├── supabase/
│   ├── arcade-schema.sql         # ساختار پایگاه داده
│   ├── config.toml
│   └── functions/arcade-api/
│       └── index.ts              # تابع API سمت سرور
└── docs/folioforge/prompts/      # نمونه‌پرامپت‌ها و چک‌لیست بازبینی
```

### فناوری‌ها

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=111)
![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-222?logo=githubpages)
![Supabase](https://img.shields.io/badge/Backend-Supabase-3ECF8E?logo=supabase&logoColor=111)

- **Frontend:** HTML معنایی، CSS واکنش‌گرا و JavaScript بدون چارچوب اجباری.
- **میزبانی:** GitHub Pages.
- **Backend و پایگاه داده:** Supabase Edge Functions و PostgreSQL.

### اجرای محلی

```bash
git clone https://github.com/Ali-Banibougeri/ali-banibougeri.github.io.git
cd ali-banibougeri.github.io
python -m http.server 8000
```

سپس `http://localhost:8000/`، `http://localhost:8000/fa/` یا `http://localhost:8000/arcade/` را باز کنید. صفحات ایستا به نصب وابستگی یا build نیاز ندارند. دفتر نظرات، جدول رکوردهای مشترک و شمارندهٔ بازدید به پیکربندی صحیح Supabase وابسته‌اند.

### انتشار در GitHub Pages

۱. در مخزن وارد **Settings → Pages** شوید.
۲. گزینهٔ **Deploy from a branch** را انتخاب کنید.
۳. شاخهٔ `main` و پوشهٔ `/(root)` را انتخاب و ذخیره کنید.
۴. پس از پایان انتشار، هر سه مسیر اصلی را بررسی کنید.

### راه‌اندازی Supabase

نشانی پروژه و کلید عمومی قابل انتشار در `assets/site-config.js` تنظیم می‌شوند. این فایل در مرورگر بارگذاری می‌شود؛ **هرگز کلید محرمانه یا service-role را در آن قرار ندهید**.

1. پروژهٔ Supabase را آماده کنید.
2. فایل [supabase/arcade-schema.sql](./supabase/arcade-schema.sql) را در **SQL Editor** اجرا کنید.
3. کلید عمومی را در `assets/site-config.js` تنظیم کنید.
4. تابع `arcade-api` را منتشر و کلیدهای محرمانه را فقط در secrets سمت سرور ذخیره کنید.

```bash
npx supabase login
npx supabase link --project-ref YOUR_PROJECT_REF
npx supabase secrets set ARCADE_PUBLISHABLE_KEY=YOUR_PUBLIC_KEY ARCADE_SECRET_KEY=YOUR_SERVER_SECRET ARCADE_RATE_SALT=YOUR_RANDOM_SECRET
npx supabase functions deploy arcade-api
```

مقادیر نمونه را با تنظیمات خود جایگزین کنید و هیچ secret واقعی را در کد یا تاریخچهٔ Git قرار ندهید. راهنمای رسمی: [Supabase API Keys](https://supabase.com/docs/guides/getting-started/api-keys).

### کنترل بازی‌ها

| بازی | صفحه‌کلید | موبایل |
|---|---|---|
| Snake | کلیدهای جهت‌دار یا WASD | کنترل‌های جهت‌دار زیر صفحهٔ بازی |
| Tetris | چپ/راست برای حرکت، پایین برای پایین‌انداختن، بالا یا W برای چرخش، Space برای سقوط سریع | کنترل‌های لمسی و دکمهٔ سقوط سریع |

### استفادهٔ مجدد از این پروژه

این مخزن می‌تواند نقطهٔ شروعی برای ساخت رزومهٔ شخصی، صفحهٔ معرفی محصول یا وب‌سایت ایستا باشد. نمونه‌پرامپت‌ها و چک‌لیست‌های بازبینی در [docs/folioforge/prompts](./docs/folioforge/prompts/) قرار دارند.

برای استفادهٔ مجدد، متن‌ها، هویت بصری، پیوندها و اطلاعات شخصی را جایگزین کنید. اگر به قابلیت‌های آنلاین نیاز ندارید، می‌توانید بخش‌های وابسته به Supabase را حذف کنید و صفحات ایستا را نگه دارید. پیش از انتشار، نمایش موبایل، دسترس‌پذیری، پیوندها و نگارش فارسی را بررسی کنید.

### امنیت و حریم خصوصی

- نظرها عمومی هستند و ارسال آن‌ها به حساب کاربری نیاز ندارد؛ اطلاعات خصوصی یا حساس ننویسید.
- نام مستعار برای راحتی کاربر در حافظهٔ محلی مرورگر ذخیره می‌شود.
- کلید عمومی Supabase برای استفاده در مرورگر است؛ کلیدهای محرمانه باید فقط سمت سرور بمانند.
- رکوردهای مشترک باید در سمت سرور اعتبارسنجی شوند؛ به داده‌های ارسالی مرورگر اعتماد نکنید.

---

## English

### Overview

This repository contains Ali Bani Bougeri's bilingual personal portfolio and résumé, alongside a separate retro arcade page. It uses plain HTML, CSS and JavaScript and can be deployed to GitHub Pages without a build step or paid hosting.

- **Portfolio:** [ali-banibougeri.github.io](https://ali-banibougeri.github.io/)
- **Arcade and guestbook:** [Open the arcade](https://ali-banibougeri.github.io/arcade/)
- **Source code:** [GitHub repository](https://github.com/Ali-Banibougeri/ali-banibougeri.github.io)

### Features

- Responsive English/Persian résumé with RTL support.
- Selected work in Python, applied AI, data engineering and automation.
- Standalone Snake and Tetris games with leaderboards and mobile touch controls.
- Public guestbook on the arcade page. No account is required; names/nicknames are supported, with a 100-word and 1,000-character limit.
- Guestbook cards appear only when comments exist.
- Nicknames are saved in the visitor's browser; shared features use Supabase.
- Unique-visit counters when the backend is configured.
- A consistent footer at the bottom of every page, including “Made with ❤️”.

### Project layout

See the directory tree in the Persian section above. Main entry points:

- `index.html` — English résumé.
- `fa/index.html` — Persian résumé.
- `arcade/index.html` — games and guestbook.
- `assets/i18n.js` — translations and language switching.
- `assets/site-api.js` — browser API client and visit tracking.
- `assets/site-config.js` — public browser configuration.
- `supabase/functions/arcade-api/index.ts` — server-side API.
- `docs/folioforge/` — design and reuse guides.

### Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=111)
![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-222?logo=githubpages)
![Supabase](https://img.shields.io/badge/Backend-Supabase-3ECF8E?logo=supabase&logoColor=111)

- **Frontend:** semantic HTML, responsive CSS and vanilla JavaScript.
- **Hosting:** GitHub Pages.
- **Backend and database:** Supabase Edge Functions and PostgreSQL.

### Run locally

```bash
git clone https://github.com/Ali-Banibougeri/ali-banibougeri.github.io.git
cd ali-banibougeri.github.io
python -m http.server 8000
```

Open `http://localhost:8000/`, `http://localhost:8000/fa/` or `http://localhost:8000/arcade/`. Static pages need no dependency installation or build step. The guestbook, shared leaderboards and visit counters require a valid Supabase setup.

### Deploy to GitHub Pages

1. Open **Settings → Pages**.
2. Select **Deploy from a branch**.
3. Choose branch `main` and folder `/(root)`.
4. Save and verify the portfolio, Persian page and arcade after deployment.

### Configure Supabase

The project URL and publishable key are configured in `assets/site-config.js`, which is loaded in the browser. **Never place a secret or service-role key in this file.**

1. Prepare a Supabase project.
2. Run [supabase/arcade-schema.sql](./supabase/arcade-schema.sql) in the SQL Editor.
3. Set the publishable key in `assets/site-config.js`.
4. Deploy `arcade-api` and keep server secrets in Supabase secrets.

```bash
npx supabase login
npx supabase link --project-ref YOUR_PROJECT_REF
npx supabase secrets set ARCADE_PUBLISHABLE_KEY=YOUR_PUBLIC_KEY ARCADE_SECRET_KEY=YOUR_SERVER_SECRET ARCADE_RATE_SALT=YOUR_RANDOM_SECRET
npx supabase functions deploy arcade-api
```

Replace placeholders with your own settings. Never commit real secrets to source code or Git history. See the official [Supabase API key guide](https://supabase.com/docs/guides/getting-started/api-keys).

### Game controls

| Game | Keyboard | Mobile |
|---|---|---|
| Snake | Arrow keys or WASD | Directional controls below the game |
| Tetris | Left/Right to move, Down for soft drop, Up or W to rotate, Space for hard drop | Touch controls and a dedicated hard-drop button |

### Reuse this project

Use this repository as a starting point for a personal résumé, product landing page or lightweight static website. Prompt examples and review checklists are available in [docs/folioforge/prompts](./docs/folioforge/prompts/).

Replace the identity, copy, links and personal details before publishing. Remove Supabase-dependent parts if online features are unnecessary. Before release, review mobile layouts, accessibility, links and Persian typography.

### Security and privacy

- Guestbook posts are public and do not require an account. Do not post private or sensitive information.
- Nicknames are stored locally in the visitor's browser.
- The publishable Supabase key is intended for browser use; server secrets must stay on the server.
- Shared scores must be validated server-side. Never trust browser-submitted values by themselves.

---

<p align="center"><sub>Designed and built with care · Made with ❤️</sub></p>
