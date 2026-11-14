# Hardeep Kumar — React Portfolio V2

A modern, responsive and recruiter-focused portfolio, tailored to Indian and international opportunities.

## Requirements
- Node.js 20+ (Node.js 22 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown by Vite (normally http://localhost:5173/).

## Check production build
```bash
npm run build
npm run preview
```
The `dist/` folder is your production site. Deploy to Netlify, Vercel, or any static hosting service. For routes, this project uses only standard section anchors.

## What to edit
- `src/data.js` — name, contact, actual GitHub/LinkedIn links, experience, projects, skills and education.
- `src/App.jsx` — section layout and UI components.
- `src/styles.css` — design, colors and responsive breakpoints.
- `public/Hardeep-Kumar-Resume.pdf` — replace with your updated resume using the same filename, or change the path in `src/data.js`.

## About Python and AI/ML
The resume does not establish professional AI/ML or Python experience. These topics are correctly labeled as **currently exploring**. To showcase real projects, add entries with `{title, url}` to `aiProjects` in `src/data.js`. Avoid claiming employment experience or published work until you have it.

## Notes
- No extra `App.css` is required. The only CSS entry point is `src/styles.css`, imported in `src/main.jsx`.
- `React` is explicitly imported in `App.jsx` so the project also works with the classic JSX runtime.
- External Google Fonts are optional; locally installed sans-serif fallbacks work when offline.
- Resume and contact details are included as provided in the uploaded resume. Review them before publishing.
