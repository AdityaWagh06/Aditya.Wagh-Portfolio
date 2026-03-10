# Aditya Wagh — Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS. All content is driven from a single `src/content.js` file — edit one file to update everything on the site.

**Live:** [aditya-wagh-portfolio.vercel.app](https://aditya-wagh-portfolio.vercel.app)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 + Vite 7 | UI framework & build tool |
| Tailwind CSS 3 | Utility-first styling |
| Lenis | Smooth scroll |
| Framer Motion | Animations |
| Three.js / R3F | 3D elements |
| Vercel | Hosting & CI/CD |

---

## Sections

- **Header** — Hero with name, bio, resume download
- **About** — Photo strip with cursor-tracking scroll, bio, stats, tools
- **Experience** — Scroll-driven animated timeline with traveling avatar dot
- **Skills** — Expandable inline skill drawers per category
- **Projects** — Flip cards with detailed back face, show more/less
- **Highlights** — Key achievements
- **Contact** — Web3Forms contact form

---

## Project Structure

```
src/
├── content.js          ← single source of truth for ALL content
├── App.jsx
├── main.jsx
├── index.css
├── assets/
└── components/
    ├── Header.jsx
    ├── Navbar.jsx
    ├── About.jsx
    ├── Experience.jsx
    ├── Services.jsx    (Skills)
    ├── Work.jsx        (Projects)
    ├── Highlights.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── LenisScroll.jsx
```

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Customisation

Everything — text, links, photos, projects, skills, experience — lives in **`src/content.js`**. Edit that file and the whole site updates automatically.
