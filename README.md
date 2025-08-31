# Gram Panchayat Demo – Devnagar

A clean React + Tailwind one‑page template inspired by the Behance reference. Includes content JSON and automation scripts so you can scale to **100 sites/day**.

## ✨ Features
- Hero, About, Gallery (lightbox), News/Updates, Members, Contact (map), Footer
- Mobile‑first, fast, accessible
- Content in `src/data/site.json` (easy to swap)
- Automation: `scripts/generate.js` and `scripts/bulk-build.js`
- Ready for Netlify/Vercel or to embed in WordPress (Elementor/iFrame)

## 🧰 Prerequisites
- Node.js 18+
- VS Code

## 🚀 Quick Start
```bash
npm install
npm run dev
```
Open http://localhost:5173

## 🏗️ Build
```bash
npm run build
npm run preview
```

## 📝 Edit Content
Update **src/data/site.json**:
- `panchayat.name`, `about`
- `gallery[]` (3–5 photos)
- `news[]` (at least 2 posts)
- `members[]`
- `contact`, `social`

Images live in **/public/images**.

## 🌐 Deploy (fastest)
- **Vercel**: Import repo → Framework: Vite → Deploy
- **Netlify**: Drag‑and‑drop the `dist/` folder
- **GitHub Pages**: Use `vite` + `gh-pages` (optional)

## 🧩 WordPress integration
Option A: Host this static site and embed via Elementor **HTML** widget or iFrame.Option B: Copy HTML blocks per section into Elementor and use the JSON as your source of truth.

## 🤖 Scale to 100 Websites/Day
1. Prepare a CSV (`data/sample.csv`) with columns: `name,address,phone,email,facebook,instagram,twitter,about,members` (members separated by `|`).
2. Generate content for one site:
   ```bash
   npm run generate:one
   ```
3. Bulk build all rows to static folders:
   ```bash
   npm run bulk
   ```
4. Host the generated `/dist-sites/<name>` folders on Netlify or S3 — each row becomes one site.
5. Team workflow:
   - One teammate maintains CSV
   - One runs `bulk` batch builds
   - One uploads `dist-sites` via Netlify CLI
   - Use a shared Google Sheet → CSV export to feed the scripts

**Automation Ideas (extra):**
- Connect Google Sheets API to auto‑pull rows every hour
- Add a GitHub Action that builds and deploys on every change
- Use WordPress REST API to push posts/members programmatically later

## 📋 What to paste in the form
- **Q9 Live Link**: After deploy, paste your Netlify/Vercel URL (e.g., `https://gp-devnagar.netlify.app`)
- **Q10 Video**: Record a 60‑sec Loom/Screenrec scrolling through sections
- **Q11 Scaling**: Copy the “Scale to 100 Websites/Day” plan above

---

© 2025 Gram Panchayat Devnagar — demo for Channel009 skill test.
