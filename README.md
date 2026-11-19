# Закладки tyne.pro для Instagram

**UA** · [EN](#english)

Офіційні закладки сайту [tyne.pro](https://tyne.pro). Вони зроблені тільки для двох інструментів кабінету tyne.pro:

- [Аудит профілю Instagram](https://tyne.pro/tools/instagram-profile-audit/) — [`profile-audit/`](profile-audit)
- [Перевірка підписників Instagram на ботів](https://tyne.pro/tools/instagram-follower-check/) — [`follower-check/`](follower-check)

Закладка — це кнопка на панелі закладок браузера. Ви перетягуєте її з кабінету один раз, відкриваєте профіль на instagram.com і натискаєте її. Тут лежить саме той код, який опиняється у вашій закладці, щоб кожен міг його прочитати й перевірити. У кабінеті в закладку підставляється ваш особистий ключ — тут замість нього стоїть `YOUR_PERSONAL_TOKEN_FROM_THE_CABINET`.

## Що роблять і чого не роблять

- Працюють тільки на відкритій сторінці профілю на instagram.com, у вашому браузері.
- **Не просять і не читають пароль** від Instagram.
- Збирають публічні дані профілю, який ви відкрили:
  - **аудит** — ім’я, шапку, хайлайти й останні дописи;
  - **перевірка підписників** — список підписників (до 10 000 за запуск), з паузами, щоб не навантажувати Instagram.
- Надсилають ці дані **тільки у ваш кабінет tyne.pro** (`cp.tyne.pro`), щоб там з’явився звіт. Більше нікуди.
- Нічого не встановлюють і не працюють у фоні: код виконується лише тоді, коли ви натиснули закладку.

## Файли

| Файл | Що це |
|---|---|
| [`profile-audit/bookmark.uk.js`](profile-audit/bookmark.uk.js), [`.en.js`](profile-audit/bookmark.en.js) | Закладка «Аудит профілю» українською та англійською |
| [`follower-check/bookmark.uk.js`](follower-check/bookmark.uk.js), [`.en.js`](follower-check/bookmark.en.js) | Закладка «Перевірка підписників» українською та англійською |

Пошукайте в коді адреси: запити йдуть тільки на `instagram.com` (за даними профілю) і на `cp.tyne.pro` (щоб передати результат у ваш кабінет).

## Як звірити свою закладку

Клацніть правою кнопкою по закладці → «Змінити» → скопіюйте адресу, що починається з `javascript:`, і розкодуйте її (наприклад, у консолі браузера: `decodeURIComponent("…")`). Код збігатиметься з файлом тут, окрім вашого особистого ключа.

---

## English

Official bookmarks of [tyne.pro](https://tyne.pro/en/). They are made only for two tools of the tyne.pro cabinet: the [Instagram profile audit](https://tyne.pro/en/tools/instagram-profile-audit/) (`profile-audit/`) and the [Instagram follower bot check](https://tyne.pro/en/tools/instagram-follower-check/) (`follower-check/`).

A bookmark is a button on your browser’s bookmarks bar. You drag it from the cabinet once, open a profile on instagram.com and click it. This repository holds exactly the code that ends up in your bookmark, so anyone can read and check it. In the cabinet your personal key is put into the bookmark; here it is replaced with `YOUR_PERSONAL_TOKEN_FROM_THE_CABINET`.

- Runs only on the open profile page on instagram.com, in your browser.
- **Does not ask for or read** your Instagram password.
- Collects public data of the profile you opened: the audit takes the name, bio, highlights and recent posts; the follower check takes the follower list (up to 10,000 per run), with pauses.
- Sends this data **only to your tyne.pro cabinet** (`cp.tyne.pro`) so the report appears there. Nowhere else.
- Installs nothing and does not run in the background: the code runs only when you click the bookmark.

**Check your bookmark**: right-click it → Edit → copy the address that starts with `javascript:` and decode it (for example `decodeURIComponent("…")` in the browser console). The code matches the file here, except for your personal key.

---

© 2026 tyne.pro. All rights reserved. See [LICENSE](LICENSE).
