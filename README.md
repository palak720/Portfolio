# 🚀 Palak Kasaudhan — Portfolio

A bold, animated personal portfolio website for a **Full Stack Developer**, built with pure HTML, CSS & vanilla JavaScript. No frameworks, no build tools — just open and go.

---

## ✨ Features & Animations

| Feature | Description |
|---|---|
| 🔮 Glitch Text | Name animates with a RGB glitch effect on loop |
| 🖱️ Custom Cursor | Magnetic cursor with a trailing ring that reacts to hover |
| 🃏 3D Card Tilt | Project & hero cards tilt in 3D on mouse movement |
| 🌊 Parallax Orbs | Background orbs drift with mouse movement |
| 📜 Scroll Reveal | Sections fade/slide in as you scroll down |
| ⚡ Skill Bars | Progress bars animate to fill when scrolled into view |
| 🔢 Count-Up Stats | Numbers count up from 0 when the About section loads |
| ✍️ Typing Effect | Hero role cycles through phrases with a blinking cursor |
| 🔦 Nav Underline | Active nav link underlines on scroll |

---

## 📁 Project Structure

```
portfolio/
│
├── palak_portfolio_v2.html   ← Main file (entire portfolio)
└── README.md                 ← You are here
```

> Everything lives in one self-contained `.html` file —
> styles, scripts, and markup all together for easy deployment.

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, animations, Grid, Flexbox
- **Vanilla JavaScript** — All interactivity (no libraries)
- **Google Fonts** — Syne · Space Mono · DM Sans

---

## 📦 Sections

1. **Hero** — Glitch name, typing role, parallax background, info card
2. **About** — Bio text + animated stat counters
3. **Skills** — Animated skill bars + tech chip grid
4. **Projects** — 4 cards (2 live + 2 placeholders) with 3D tilt
5. **Experience** — Timeline card for Qurocity.ai internship
6. **Contact** — Email, LinkedIn, GitHub cards
7. **Footer** — Minimal branded footer

---

## 🚀 How to Run

### Option 1 — Open Locally
```bash
# Just double-click the file, or:
open palak_portfolio_v2.html
```

### Option 2 — Deploy on Netlify (Recommended)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag & drop `palak_portfolio_v2.html`
3. Your portfolio is live in seconds ✅

### Option 3 — Deploy on GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
# Then enable GitHub Pages in repo Settings → Pages
```

---

## ✏️ How to Customize

### 🔁 Update Your Name / Role
Find in the `<body>`:
```html
<h1 class="glitch" data-text="Palak">Palak</h1>
<h1 class="glitch hero-name-em" data-text="Kasaudhan">Kasaudhan</h1>
```
Replace `Palak` and `Kasaudhan` with your name (update **both** the `data-text` attribute and the inner text).

---

### ✍️ Update Typing Phrases
In the `<script>` section:
```js
const phrases = [
  'Full Stack Developer_',
  'React Developer_',
  'Building the Web_',
  'Frontend + Backend_'
];
```
Edit or add your own phrases. End each with `_` for the blinking cursor effect.

---

### 💼 Add a Real Project (replace placeholder)
Find the placeholder card block:
```html
<div class="project-title">Full-Stack App #1</div>
<p class="project-desc">A full-stack web application...</p>
<a class="plink" href="YOUR_LIVE_LINK">↗ Live Demo</a>
<a class="plink" href="YOUR_GITHUB_LINK">⌥ Source Code</a>
```
Update the title, description, and `href` links. Also update the badges:
```html
<span class="badge badge-front">React</span>   <!-- Frontend tech -->
<span class="badge badge-back">Node.js</span>  <!-- Backend tech -->
<span class="badge badge-db">MongoDB</span>    <!-- Database -->
```
Remove the `<div class="wip-badge">Coming Soon</div>` line once the project is ready.

---

### 📊 Change Skill Bar Percentages
```html
<div class="skill-bar-fill" data-width="90"></div>
```
Change `90` to any value from `0` to `100`.

---

### 📞 Update Contact Links
```html
<a class="ccard" href="mailto:YOUR_EMAIL">
<a class="ccard" href="https://linkedin.com/in/YOUR_PROFILE">
<a class="ccard" href="https://github.com/YOUR_USERNAME">
```

---

### 🎨 Change Accent Color
All colors are CSS variables at the top of the `<style>` block:
```css
:root {
  --accent:  #7c5cfc;   /* Main purple — change this */
  --accent2: #c084fc;   /* Lighter purple */
  --green:   #22d3a5;   /* Green dot / bars */
  --pink:    #f472b6;   /* Pink glitch / hover */
}
```

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | palakkasaudhan123@gmail.com |
| LinkedIn | [palak-kasaudhan](https://www.linkedin.com/in/palak-kasaudhan-098399208/) |
| GitHub | [palak720](https://github.com/palak720) |

---

## 📄 License

This project is open for personal use. Feel free to use it as inspiration or a base for your own portfolio — a credit or shoutout is always appreciated! 🙌

---

> Made with ♥ by **Palak Kasaudhan** · Full Stack Developer