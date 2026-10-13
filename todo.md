# Anuradha Sweet & Restaurant — Website Development Plan

**Client / Brand Details:**
- **Brand Name:** Anuradha Sweet and Restaurant
- **Location:** Near Kishan Chowk, Kaptanganj, Kushinagar, Uttar Pradesh — 274301 (Google Maps: Anuradha Sweet House, Kaptanganj, Kushinagar)
- **Founding Date:** 30th July, 2006 (Serving authenticity and sweet traditions since 2006)
- **WhatsApp Order Hotline:** +91 9609657777
- **Hosting Target:** GitHub Pages (100% Client-Side / Static Frontend)

---

## Brand Color Palette
- Primary Maroon / Royal Burgundy: `#7A1F2B`
- Antique Gold / Accent: `#C9A227`
- Champagne Gold / Soft Cream Light: `#E8CD8A`
- Warm Saffron / Amber: `#E8A33D`
- Caramel Bronze / Warm CTA: `#D6862B`

---

## Implementation Roadmap

### Phase 1: Architectural Recommendation & Stack Setup
- [x] Analyze Chowdhry Sweet House reference site structure & features
- [x] Select stack: Modern Vanilla HTML5 + Bootstrap 5.3 + Custom CSS3 Design System + Font Awesome 6 + Vanilla JS
- [x] Incorporate official brand logo into `assets/images/logo.png`
- [x] Define brand palette CSS tokens (`#7A1F2B`, `#C9A227`, `#E8CD8A`, `#E8A33D`, `#D6862B`)

### Phase 2: Design System & Styling (`css/style.css`)
- [x] Setup luxury typography (Playfair Display for headings, Plus Jakarta Sans for body)
- [x] Create glassmorphism sticky navbar with custom logo and cart counter
- [x] Build hero banner with royal burgundy gradient, gold trims, and trust badges
- [x] Design product cards with 100% pure veg badge, portion selector, and hover animations
- [x] Style offcanvas cart drawer, quantity step buttons, and checkout modal
- [x] Floating pulsating WhatsApp button and floating cart launcher

### Phase 3: High-Quality Menu Database (`js/menu-data.js`)
- [x] Desi Ghee Mithai: Kaju Katli, Motichoor Laddu, Gulab Jamun, Besan Laddu, Milk Cake, Kaju Pista Roll
- [x] Bengali & Milk Specialties: Spongy Rasgulla, Kesar Rasmalai, Rajbhog, Malai Cham Cham
- [x] Restaurant & Meals: Anuradha Royal Deluxe Thali, Amritsari Chole Bhature, Paneer Butter Masala, Pav Bhaji, Masala Dosa
- [x] Snacks & Chaat: Desi Ghee Samosa, Kurkuri Aloo Tikki, Khaman Dhokla, Khasta Kachori
- [x] Beverages: Matka Kesar Pista Lassi, Shahi Badam Milk, Rabdi Kulfi Falooda
- [x] Gift Hampers: Shahi Utsav Celebration Box, Grand Dry Fruit & Mithai Hamper
- [x] Multiple portion/weight pricing (250g, 500g, 1 Kg, portions)

### Phase 4: Interactive Client-Side Cart & WhatsApp Engine (`js/app.js`)
- [x] Category filtering and instant live search
- [x] Dynamic portion/weight selection price recalculation
- [x] Cart state management with browser `localStorage` persistence
- [x] Offcanvas cart rendering with item +/- and delete
- [x] Instant 1-click single-item WhatsApp ordering
- [x] Full checkout modal generating itemized receipts with emojis to `+91 9609657777`
- [x] Interactive toast notifications

### Phase 5: Core Website Sections & SEO (`index.html`)
- [x] Top announcement bar with store timings (8:00 AM – 10:30 PM) and hotline
- [x] Hero section celebrating 18+ years since 30-July-2006
- [x] Quality pillars (100% Pure Desi Ghee, Fresh Daily, Hygienic Kitchen, Fast Delivery)
- [x] Heritage story section dedicated to 30th July, 2006 founding
- [x] Special bulk & wedding catering inquiry banner
- [x] Customer reviews & Google ratings
- [x] Embedded Google Map for "Anuradha sweet house kaptanganj kushinagar"
- [x] Rich LocalBusiness Schema.org JSON-LD structured data for Google SEO
- [x] Developer attribution: "Developed and Designed at balajiailab.com"
- [x] Fully responsive mobile, tablet, and desktop design
- [x] Ready for GitHub Pages hosting (zero build steps, pure static)
