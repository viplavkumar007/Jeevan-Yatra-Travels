# 🚗 Jeevan Yatra Travels — Website

**Premium Cab & Self Drive Car Rental Website**  
Palanpur, Gujarat | +91 91045 66024

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Icons | Icon library |

---

## 📁 Folder Structure

```
jeevan-yatra-travels/
├── public/
├── src/
│   ├── assets/
│   │   └── images/          # All images (logo, hero, vehicles)
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navbar with glass effect
│   │   ├── CTAStrip.jsx      # Glowing CTA banner
│   │   ├── Footer.jsx        # Footer with links & contact
│   │   ├── Toast.jsx         # Success/error toast notifications
│   │   ├── WhatsAppFloat.jsx # Floating WhatsApp button
│   │   └── ScrollReveal.jsx  # Framer Motion scroll animation hooks
│   ├── sections/
│   │   ├── Hero.jsx          # Hero section with desktop/mobile BG
│   │   ├── Fleet.jsx         # Vehicle fleet cards
│   │   ├── Services.jsx      # Why choose us cards
│   │   ├── About.jsx         # About + stats
│   │   ├── Testimonials.jsx  # Customer reviews
│   │   ├── FAQ.jsx           # Accordion FAQ
│   │   └── Contact.jsx       # Form + WhatsApp + phone
│   ├── data/
│   │   └── siteContent.js    # ALL website content (single source of truth)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── netlify.toml
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Navigate into the project
cd jeevan-yatra-travels

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 🏗 Production Build

```bash
npm run build
# Output in /dist folder

npm run preview
# Preview production build locally
```

---

## ☁️ Deploy to Vercel (Recommended — Free)

1. Push project to GitHub
2. Go to https://vercel.com → New Project
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy**
6. Your site is live in ~1 minute!

**Or via Vercel CLI:**
```bash
npm install -g vercel
vercel
```

---

## 🌐 Deploy to Netlify (Alternative — Free)

**Option 1: Drag & Drop**
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `/dist` folder → Done!

**Option 2: Git Integration**
1. Push to GitHub
2. Go to Netlify → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

---

## ✏️ Customizing Content

All content is in one file: `src/data/siteContent.js`

- **Change phone number:** Edit `brand.phone` and `brand.whatsapp`
- **Change email:** Edit `brand.email`
- **Add/remove vehicles:** Edit `fleet.categories[].vehicles[]`
- **Edit services:** Edit `services.items[]`
- **Edit FAQs:** Edit `faqs.items[]`
- **Edit testimonials:** Edit `testimonials.items[]`

---

## 📞 Business Info

- **Business:** Jeevan Yatra Travels
- **Phone/WhatsApp:** +91 91045 66024
- **Email:** jeevanyatratravels@gmail.com
- **Location:** Palanpur, Gujarat
- **Service:** Self Drive Car Rental & Cab Services

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Blue | `#1B2B5E` | Primary / Navbar / Buttons |
| Forest Green | `#3A7D2C` | Secondary / Accents / CTAs |
| White | `#FFFFFF` | Background / Text on dark |

---

Built with ❤️ for Jeevan Yatra Travels, Palanpur, Gujarat
