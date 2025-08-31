#Gram Panchayat Devnagar

Devnagar, situated in the heart of **Ajmer district, Rajasthan**, is a progressive village known for its cultural heritage and community-driven development.  
With deep roots in tradition and a strong commitment to modern governance, Devnagar Gram Panchayat works towards **clean water, paved roads, quality education, healthcare awareness, and digital inclusion** for its residents.  
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
https://grampanchayatdevnagar.netlify.app/



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
4. Host the generated `/dist-sites/<name>` folders on Netlify — each row becomes one site.

<img width="1160" height="868" alt="image" src="https://github.com/user-attachments/assets/f3a1f7f6-6660-4500-95d6-b6cc1a019a50" />
<img width="1896" height="762" alt="image" src="https://github.com/user-attachments/assets/1fac1530-3874-4aea-89a5-ccff9b3dbee3" />
<img width="1868" height="776" alt="image" src="https://github.com/user-attachments/assets/2890c6bf-6a52-4488-afc1-bce7a0efa2fb" />

---

© 2025 Gram Panchayat Devnagar 
