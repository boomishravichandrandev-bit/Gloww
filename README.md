# Glow Skin & Laser Clinic — Professional Website

A production-ready, professional aesthetic clinic website for **Anna Nagar, Chennai** — built to demonstrate modern web development expertise and convert visitors into patients/clients.

## 🎯 Project Goals

- **Professional Medical Aesthetic**: No purple gradients, no emojis, no rounded buttons — clean, trustworthy design
- **Lead Generation**: Every interaction drives toward WhatsApp booking (primary CTA)
- **Portfolio Quality**: Demonstrates advanced CSS, vanilla JS, accessibility, and performance best practices
- **Real-World Ready**: SEO-optimized, accessible (WCAG 2.1 AA), responsive, performant
- **Vertical Adaptation**: Same architecture as dental site, adapted for skincare/aesthetic vertical

---

## 🏗️ Architecture

### Stack
- **HTML5** — Semantic, accessible markup
- **CSS Custom Properties** — Design token system (colors, spacing, typography, shadows)
- **Vanilla JavaScript (ES6+)** — No framework dependencies, ~18KB gzipped (including chatbot)
- **IntersectionObserver API** — Scroll animations, lazy loading, counters
- **CSS Grid + Flexbox** — Modern layout, no floats
- **Native `<details>/<summary>`** — Accessible FAQ accordion with zero-JS fallback

### File Structure
```
GLOW/
├── index.html           # Main HTML document
├── styles.css           # Complete design system + components (~2000 lines)
├── scripts/
│   ├── main.js          # Navigation, forms, header, tracking
│   ├── chatbot.js       # AI chatbot widget (WhatsApp integration) — Skincare KB
│   └── animations.js    # Reveal, parallax, carousel, counters
├── assets/
│   ├── favicon.svg      # Brand favicon (rose gradient + sparkle)
│   ├── hero-clinic.jpg  # Hero placeholder (SVG)
│   ├── about-team.jpg   # About section placeholder (SVG)
│   ├── og-image.jpg     # Open Graph social preview (SVG)
│   ├── gallery-*-before.jpg  # Gallery before placeholders (SVG)
│   └── gallery-*-after.jpg   # Gallery after placeholders (SVG)
└── README.md
```

---

## ✨ Features

### 1. Trust Bar (NEW)
- 4 credibility indicators: Board-Certified Dermatologist, FDA-Cleared Technology, Medical-Grade Products, WhatsApp Booking
- Responsive grid layout (2-col mobile, 4-col desktop)

### 2. Hero Section (Enhanced)
- Professional headline with animated gradient text highlight
- Floating gradient orbs for depth and atmosphere
- Floating trust cards with animated hover effects
- Animated counter statistics (years, clients, treatments, retention)
- Experience badge overlay on hero image
- Dual CTA: WhatsApp booking (primary) + Explore treatments
- Scroll indicator with bounce animation

### 3. Treatments Grid (6 Categories)
- Signature Facials (HydraFacial, Oxygen, Peels, Microneedling+PRP)
- Laser Treatments (Hair Removal, PicoSure, Fractional CO2, Toning)
- Injectables (Botox/Dysport, Juvederm/Restylane, Profhilo, Skin Boosters)
- Skin Analysis & Custom Routines (VISIA® 3D + dermatologist routine)
- Body Contouring (CoolSculpting Elite, Morpheus8, Stretch Marks)
- Curated Skincare Retail (Medical-grade products, auto-replenish)
- Feature lists with checkmarks
- Direct WhatsApp booking per treatment (pre-filled messages)
- Hover elevation with sharp shadow

### 4. About Section
- 4 trust pillars: Dermatologist-Led, FDA-Cleared Technology, Transparent Pricing, Continuity of Care
- Accreditation badges (Board-Certified, FDA Devices, Medical-Grade Products)
- Team placeholder with specialist names

### 5. Before & After Gallery (Interactive Comparison Sliders)
- 4 real-style cases: Acne Scars, Pigmentation, HydraFacial Glow, Forehead Lines
- **Draggable before/after image comparison sliders** (21st.dev pattern)
- Side-by-side before/after layout (stacked on mobile)
- Unedited, patient-consented disclaimer
- CTA to view more on WhatsApp

### 6. Testimonials Carousel (NEW)
- 5 patient reviews with star ratings
- **Interactive carousel** with keyboard navigation (←/→ keys)
- Dot indicators with active state
- Auto-pause on hover/focus
- Touch/swipe support
- Responsive: 3-col desktop, 2-col tablet, 1-col mobile

### 7. Pricing Section (NEW)
- **Per Session / Package toggle** with animated switch
- 4 treatment tiers: Essential, Advanced, Premium, Elite
- Popular badges on recommended tiers
- Feature lists with checkmarks
- EMI mention for packages
- Direct WhatsApp CTAs per plan

### 8. FAQ Accordion
- 8 common questions (booking, consultation, product authenticity, laser sessions, downtime, virtual analysis, EMI, reactions)
- Native `<details>` + enhanced styling
- Smooth height animation
- Multiple open allowed

### 9. Contact & Location
- 3-column info cards: Address, Phone/WhatsApp, Email
- Validated contact form (name, phone, email, interest dropdown, message)
- Formspree-ready endpoint
- Embedded Google Maps (Anna Nagar West)
- Directions: Metro, Bus, Parking

### 10. AI Chatbot Widget (WhatsApp-Connected) — **Skincare Knowledge Base**
- Floating action button with pulse animation
- 8-category knowledge base: Treatments, Booking, Products, Packages/Loyalty, Skin Analysis, FAQ, Location, Emergency
- Quick-action chips for common flows (Book, HydraFacial, Laser, Botox, Analysis, Products, Routine, Packages, Loyalty, Directions)
- Pre-filled WhatsApp deep links for every action
- Typing indicator, message history, context awareness
- Tracks events for analytics
- Skincare-specific responses: routine builder, retinol guide, sunscreen picker, package bundles, loyalty tiers

### 11. Professional Footer (Updated)
- Brand + tagline + social links (Instagram, WhatsApp, Maps)
- 4-column navigation: Treatments, Shop, Info, Trust (NEW)
- Copyright + portfolio credit

---

## 🎨 Design System (ENHANCED — Beauty/Spa/Wellness Luxury)

### Colors (Soft Pink + Lavender Luxury Palette)
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#EC4899` | Primary actions, links, headers |
| `--color-primary-dark` | `#DB2777` | Hover states |
| `--color-primary-light` | `#FDF2F8` | Backgrounds, badges |
| `--color-secondary` | `#F9A8D4` | Light pink - secondary CTAs, accents |
| `--color-secondary-dark` | `#F472B6` | Hover |
| `--color-secondary-light` | `#FCE7F3` | Light backgrounds |
| `--color-accent` | `#8B5CF6` | Lavender - ratings, highlights |
| `--color-accent-dark` | `#7C3AED` | Hover |
| `--color-accent-light` | `#F5F3FF` | Light backgrounds |
| `--color-gray-50` to `--color-gray-900` | Neutral scale | Text, borders, backgrounds |

### Gradients
- `--gradient-primary`: `linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)`
- `--gradient-hero`: Radial gradient orbs for atmospheric depth
- `--gradient-card`: Subtle card surface gradient

### Typography: Medical Clean (Figtree + Noto Sans)
- **Display**: Figtree (sans, 300–700) — headings, trust numbers, UI
- **Body**: Noto Sans (sans, 300–700) — content, forms, buttons
- **Scale**: 11px → 80px (clamped fluid typography via `clamp()`)
- **Weights**: Light 300, Regular 400, Medium 500, Semibold 600, Bold 700

### Spacing
- Base unit: 4px (`--space-1`)
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px

### Radius
- **Professional, not overly rounded**: 0 (buttons), 6px (inputs), 10px (cards), 16px (larger cards), 20px (hero), 9999px (badges/avatars)

### Shadows (Elegant, Layered)
- Subtle layering: `xs` → `xl` + `--shadow-glow` for primary elements

### Transitions
- `--transition-fast`: 120ms
- `--transition-base`: 200ms
- `--transition-slow`: 350ms
- `--transition-slower`: 500ms
- `--transition-spring`: 400ms cubic-bezier(0.34, 1.56, 0.64, 1)

---

## ♿ Accessibility (WCAG 2.1 AA)

- ✅ Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`, `aside`)
- ✅ Skip link for keyboard users
- ✅ Focus-visible outlines on all interactive elements (2px solid, 2px offset)
- ✅ ARIA labels, roles, live regions (chatbot, carousel)
- ✅ Color contrast ratios ≥ 4.5:1 (AAA for key text)
- ✅ Reduced motion support (`prefers-reduced-motion`)
- ✅ Form validation with `aria-live` errors
- ✅ Keyboard navigation throughout (carousel arrows, tab order)
- ✅ Alt text for all images
- ✅ Language declaration (`lang="en"`)
- ✅ Touch targets ≥ 44×44px
- ✅ Auto-rotation controls on carousel (pause on hover/focus)

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger menu, stacked hero, 1-col testimonials/pricing |
| Tablet | 640–991px | 2-col treatments, 2-col gallery, 2-col testimonials, side-by-side contact |
| Desktop | 992–1199px | 3-col treatments, 4-col gallery, 3-col testimonials, sticky form |
| Large | ≥ 1200px | Max-width container, generous whitespace |

---

## ⚡ Performance

- **No external JS frameworks** — ~18KB JS total (gzipped)
- **CSS custom properties** — No runtime theme switching overhead
- **IntersectionObserver** — Efficient scroll animations
- **Native `<details>`** — Zero-JS accordion fallback
- **Lazy-loading images** — `loading="lazy"` on below-fold images
- **Eager hero image** — `loading="eager"` for LCP
- **Preconnect fonts** — Google Fonts optimization
- **Minimal reflows** — Transform/opacity animations only
- **All placeholders as inline SVG** — Zero external image requests for demo

---

## 🔧 Customization

### Update Clinic Info
Edit these in `index.html`:
- Clinic name, phone, email, address
- WhatsApp number (search for `919876543210`)
- Doctor names, specialties
- Services, pricing references

### Colors
Modify CSS custom properties in `styles.css`:
```css
:root {
  --color-primary: #EC4899;      /* Your brand pink */
  --color-secondary: #F9A8D4;    /* Your accent light pink */
  --color-accent: #8B5CF6;       /* Your lavender */
}
```

### Chatbot Knowledge Base
Edit `KNOWLEDGE_BASE` object in `scripts/chatbot.js`:
- Add/remove categories
- Customize responses for treatments, products, packages
- Add quick actions
- Update WhatsApp deep links

### Form Endpoint
Replace Formspree URL in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 🚀 Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag & drop `GLOW` folder
- **Vercel**: `vercel deploy GLOW`
- **GitHub Pages**: Push to repo, enable Pages
- **Cloudflare Pages**: Connect repo

### Custom Domain
1. Add `CNAME` file with your domain
2. Configure DNS (A + CNAME or CNAME flattening)
3. Enable HTTPS (automatic on modern hosts)

### Analytics
Add Google Analytics / GA4 in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📸 Replacing Placeholder Images

Replace SVG placeholders in `assets/` with real photos:
| File | Recommended | Dimensions |
|------|-------------|------------|
| `hero-clinic.jpg` | Clinic reception/treatment room | 800×600 (4:3) |
| `about-team.jpg` | Team photo or doctor collage | 800×600 (4:3) |
| `og-image.jpg` | Branded social preview | 1200×630 (1.91:1) |
| `gallery-*-before.jpg` | Patient before photos (consented) | 400×400 (1:1) |
| `gallery-*-after.jpg` | Patient after photos (consented) | 400×400 (1:1) |

Keep filenames identical — no HTML changes needed.

---

## 🧪 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Safari | 14+ |
| Chrome Android | 90+ |

**Polyfills included**: Smooth scroll (Safari), IntersectionObserver (auto-loaded if needed)

---

## 📝 License & Credits

**Built as a portfolio demonstration** — free to use, modify, and showcase.

### Design Inspiration
- Component patterns from [21st.dev](https://21st.dev) catalog
- Medical UI best practices from leading aesthetic clinic sites
- Beauty/Spa/Wellness design language from luxury wellness brands

### Fonts
- **Figtree** — [Google Fonts](https://fonts.google.com/specimen/Figtree) (SIL OFL)
- **Noto Sans** — [Google Fonts](https://fonts.google.com/specimen/Noto+Sans) (SIL OFL)

### Icons
- Custom SVG icons (inline, zero dependencies)
- Inspired by [Lucide](https://lucide.dev) / [Heroicons](https://heroicons.com)

---

## 🎓 What This Demonstrates

| Skill | Implementation |
|-------|----------------|
| **Design Systems** | CSS custom properties, token architecture, component variants |
| **Modern CSS** | Grid, Flexbox, clamp(), logical properties, cascade layers ready |
| **Vanilla JS Architecture** | ES6 modules pattern, event delegation, observer APIs |
| **Accessibility** | WCAG 2.1 AA, ARIA, semantic HTML, focus management |
| **Performance** | Critical CSS, lazy loading, minimal JS, efficient animations |
| **UX Engineering** | Micro-interactions, loading states, error handling, progressive enhancement |
| **Lead Gen Engineering** | WhatsApp deep links, form validation, conversion tracking, chatbot funnel |
| **Vertical Adaptation** | Reusable architecture adapted from dental → skincare |
| **21st.dev Patterns** | Image comparison slider, testimonial carousel, pricing toggle, animated counters |

---

## 📞 Support

For questions about this implementation:
- **Portfolio context**: This demonstrates production-ready frontend engineering
- **Customization**: All values are tokenized — change in one place
- **Extension**: Add pages (blog, careers, patient portal) using same design system

---

*Built with precision for the Anna Nagar community. ✨*