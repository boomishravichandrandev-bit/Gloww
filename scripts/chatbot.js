/**
 * GLOW Skin & Laser — AI Skin Assistant
 * Skincare-specific knowledge base with product recommender, routine builder, package booking, loyalty
 */

(function() {
  'use strict';

  // ==========================================================================
  // KNOWLEDGE BASE — SKINCARE SPECIFIC
  // ==========================================================================
  const KNOWLEDGE_BASE = {
    categories: [
      {
        id: 'treatments',
        label: 'Treatments',
        icon: 'sparkles',
        keywords: ['facial', 'hydrafacial', 'laser', 'botox', 'filler', 'microneedling', 'peel', 'chemical peel', 'prp', 'morpheus', 'coolsculpting', 'profhilo', 'skin booster', 'treatment'],
        responses: {
          default: `Our medical-grade treatments are dermatologist-supervised using FDA-cleared technology:

**Signature Facials**
• HydraFacial MD (Signature / Platinum) — deep cleanse, extract, hydrate
• Oxygen Infusion Therapy — instant glow, no downtime
• Chemical Peels (Glycolic / Salicylic / TCA) — customised strength
• Microneedling + PRP — collagen induction, scar revision

**Laser Treatments**
• Diode Laser Hair Removal — full body, 6-8 sessions for permanent reduction
• PicoSure Pigmentation Removal — melasma, sun spots, post-acne marks
• Fractional CO2 — acne scars, texture, pores
• Laser Toning / Carbon Peel — glow, oil control

**Injectables**
• Botox / Dysport — forehead, crow's feet, frown lines, masseter slimming
• Juvederm / Restylane Fillers — lips, cheeks, under-eye, jawline, chin
• Profhilo — skin remodeling, hydration, laxity
• Skin Boosters — deep hydration, glow

**Body**
• CoolSculpting Elite — non-invasive fat freezing
• Morpheus8 — RF microneedling for tightening
• Stretch mark revision

👉 **Book any treatment:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20a%20treatment%20consultation%20at%20GLOW%20Skin%20%26%20Laser.`,
          hydrafacial: `**HydraFacial MD** — our most popular facial
• **Signature (₹4,500):** Cleanse + peel + extract + hydrate in 30 min
• **Platinum (₹7,500):** Signature + custom booster + LED + lymphatic drainage
• **Perk (₹2,500):** Eye/lip add-on for instant refresh

**Best for:** dullness, congestion, dehydration, pre-event glow
**Downtime:** Zero. Makeup-ready immediately.
**Frequency:** Monthly for maintenance

👉 **Book HydraFacial:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20a%20HydraFacial%20at%20GLOW%20Skin%20%26%20Laser.`,
          laser: `**Laser Hair Removal — Diode 810nm (Gold Standard)**
• **Packages:** 6 sessions + 1 free touch-up
• **Pricing:** Underarms ₹12,000 | Full Face ₹18,000 | Full Legs ₹35,000 | Full Arms ₹25,000 | Bikini ₹20,000 | Full Body ₹1,20,000
• **PCOS/hormonal:** May need 8-10 sessions + maintenance

**Pigmentation Lasers**
• **PicoSure (₹8,000/session):** Melasma, sun spots, freckles — 3-5 sessions
• **Laser Toning / Carbon Peel (₹4,500):** Dullness, open pores, oil control — monthly

**Acne Scar Revision**
• **Fractional CO2 (₹12,000/session):** Deep scars, texture — 3-5 sessions, 5-7 days downtime
• **Microneedling + PRP (₹6,500):** Rolling scars, overall rejuvenation

👉 **Book Laser Consultation:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20laser%20consultation%20at%20GLOW%20Skin%20%26%20Laser.`,
          injectables: `**Injectables — Natural Results, Doctor-Led**

**Neurotoxins (Botox / Dysport)**
• Forehead lines: ₹8,000-12,000
• Crow's feet: ₹8,000-10,000
• Frown lines (11s): ₹8,000-10,000
• Masseter slimming (face slimming): ₹12,000-15,000
• Neck bands: ₹10,000-15,000
• **Duration:** 3-4 months

**Dermal Fillers (Juvederm / Restylane)**
• Lips: ₹25,000-35,000/syringe
• Under-eye (tear trough): ₹30,000-40,000
• Cheeks / Midface: ₹30,000-45,000
• Jawline / Chin: ₹30,000-45,000
• Nasolabial folds: ₹25,000-35,000
• **Duration:** 9-18 months

**Bio-Remodeling**
• **Profhilo (₹25,000/2ml):** 2 sessions 1 month apart — hydration, laxity, crepey skin
• **Skin Boosters (₹15,000/session):** Deep hydration, glow

**Safety:** Only FDA-approved products. Doctor consultation mandatory. No "lunch break" shortcuts.

👉 **Book Injectables Consultation:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20Botox%20or%20filler%20consultation%20at%20GLOW%20Skin%20%26%20Laser.`,
        }
      },
      {
        id: 'booking',
        label: 'Booking',
        icon: 'calendar',
        keywords: ['book', 'appointment', 'schedule', 'slot', 'available', 'consultation', 'booking'],
        responses: {
          default: `Booking is simple — everything happens on WhatsApp:

1. **Tap any "Book on WhatsApp" button** on this site
2. **Our AI assistant** will ask: treatment type, preferred date/time, any concerns
3. **Get real-time availability** & confirm your slot instantly
4. **Receive confirmation** with prep instructions

**Consultation Fees (redeemable against treatment):**
• In-clinic: ₹500
• Virtual (skin analysis + routine): ₹999
• Follow-up: Complimentary

**Clinic Hours:** Mon-Sat 10 AM - 8 PM | Sun 11 AM - 4 PM

👉 **Start Booking:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20GLOW%20Skin%20%26%20Laser.`,
          virtual: `**Virtual Skin Analysis (₹999)** — perfect if you're not in Chennai or want a routine first

**What you get:**
1. Detailed questionnaire (skin type, concerns, current routine, goals)
2. Submit 3 selfies (front, left, right, natural light)
3. Dermatologist reviews → custom AM/PM routine with product links
4. Delivered to WhatsApp within 24 hours
5. **₹999 credited** toward any product purchase

**Best for:** Starting a routine, product curation, maintenance between visits

👉 **Book Virtual Analysis:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20a%20Virtual%20Skin%20Analysis%20at%20GLOW%20Skin%20%26%20Laser.`,
        }
      },
      {
        id: 'products',
        label: 'Skincare Shop',
        icon: 'shopping-bag',
        keywords: ['product', 'buy', 'order', 'serum', 'retinol', 'sunscreen', 'vitamin c', 'moisturizer', 'cleanser', 'skincare', 'shop', 'routine', 'kit'],
        responses: {
          default: `**Curated Medical-Grade Skincare** — only what works, selected by dermatologists

**Categories:**
• **Vitamin C Serums:** SkinCeuticals C E Ferulic, Phloretin CF, Obagi Professional-C, IS Clinical Pro-Heal
• **Retinoids:** SkinMedica Retinol 0.25/0.5/1.0, ZO Skin Health Retinol, Prescription Tretinoin (Rx)
• **Sunscreens:** EltaMD UV Clear, UV Daily, La Roche-Posay Anthelios, Heliocare 360
• **Barrier Repair:** SkinCeuticals Triple Lipid Restore, ZO Recovery Crème, Cerave Healing Ointment
• **Treatment Kits (8-12 week protocols):**
  - Acne Clear Kit: Cleanser + Salicylic Serum + Retinoid + SPF
  - Brightening Protocol: Vitamin C + Tranexamic Acid + Niacinamide + SPF
  - Age Reverse System: Retinoid + Peptide Serum + Growth Factors + SPF
  - Barrier Rescue: Gentle Cleanser + Ceramide Serum + Rich Moisturizer + SPF

**Ordering:** All orders via WhatsApp — we verify stock, confirm price, arrange delivery/pickup
**Shipping:** Free on orders >₹3,000 | Chennai same-day | Rest of India 2-3 days
**Auto-Replenish:** Set up recurring orders on WhatsApp — never run out

👉 **Shop on WhatsApp:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20order%20skincare%20products%20from%20GLOW%20Skin%20%26%20Laser.`,
          routine: `**Custom Routine Builder** — get a dermatologist-formulated AM/PM routine

**Two ways:**
1. **Virtual Analysis (₹999):** Questionnaire + selfies → full routine with product links + application order + tips
2. **In-Clinic Skin Analysis (₹1,500):** VISIA® 3D imaging + doctor consult → routine + treatment plan

**What your routine includes:**
• AM: Cleanser → Treatment Serum (Vit C/Niacinamide) → Moisturizer → SPF
• PM: Double Cleanse → Treatment (Retinoid/Acid) → Moisturizer/Occlusive
• Weekly: Exfoliant, Mask, Treatment pads
• **Product links** direct to our WhatsApp shop
• **Patch test instructions** for every active
• **Progress check-in** at 4 weeks via WhatsApp

👉 **Get Your Routine:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20a%20custom%20skincare%20routine%20from%20GLOW%20Skin%20%26%20Laser.`,
          retinol: `**Retinoid Guide — Starter to Advanced**

**Beginner (0-3 months):**
• SkinMedica Retinol 0.25% — 2x/week → nightly
• ZO Skin Health Retinol 0.25% — buffered with moisturizer
• **Expect:** Mild dryness weeks 2-4 (retinization)

**Intermediate (3-12 months):**
• SkinMedica Retinol 0.5% — nightly
• ZO Retinol 0.5% + Daily Power Defense
• Add: Niacinamide AM for barrier support

**Advanced (12+ months / Rx):**
• SkinMedica Retinol 1.0%
• **Prescription Tretinoin 0.025% → 0.05% → 0.1%** (dermatologist only)
• Combine: Azelaic acid AM, Peptide serum PM

**Rules:**
• Start low, go slow. Pea-size for full face.
• SPF 50+ non-negotiable (we stock EltaMD, La Roche-Posay)
• Pause 3 days before/after laser, peels, waxing
• Pregnancy/breastfeeding: switch to Bakuchiol or Azelaic acid

👉 **Order Retinoid:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20order%20Retinol%20from%20GLOW%20Skin%20%26%20Laser.`,
          sunscreen: `**Sunscreen — Your #1 Anti-Aging Product**

**Our Picks (all SPF 50+ PA++++):**

**Oily / Acne-Prone:**
• EltaMD UV Clear (niacinamide, matte) — ₹2,200/48g
• La Roche-Posay Anthelios UVMune 400 (fluid, invisible) — ₹1,800/50ml

**Dry / Sensitive / Post-Procedure:**
• EltaMD UV Daily (hyaluronic acid, dewy) — ₹2,200/48g
• Heliocare 360 Water Gel (fernblock, antioxidant) — ₹2,000/50ml

**Tinted / Makeup Replacement:**
• EltaMD UV Elements Tinted (mineral, sheer coverage) — ₹2,500/48g
• IS Clinical Extreme Protect (antioxidant, slight tint) — ₹3,200/30ml

**Body:**
• La Roche-Posay Anthelios Dermo-Pediatrics (kids safe) — ₹1,500/100ml
• EltaMD UV Sport (water-resistant 80min) — ₹2,000/85g

**Reapplication:** Every 2 hours outdoors. Powder SPF (IS Clinical) over makeup.

👉 **Order Sunscreen:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20order%20Sunscreen%20from%20GLOW%20Skin%20%26%20Laser.`,
        }
      },
      {
        id: 'packages',
        label: 'Packages & Pricing',
        icon: 'package',
        keywords: ['package', 'price', 'cost', 'emi', 'installment', 'bundle', 'offer', 'discount', 'membership', 'loyalty'],
        responses: {
          default: `**Treatment Packages — Better Value, Structured Plans**

**Laser Hair Removal (6+1 sessions):**
• Underarms: ₹12,000 | Face: ₹18,000 | Bikini: ₹20,000
• Full Arms: ₹25,000 | Full Legs: ₹35,000 | Full Body: ₹1,20,000
• **PCOS Add-on:** +2 sessions ₹8,000

**Facial Packages:**
• HydraFacial Signature × 6: ₹24,000 (save ₹3,000)
• HydraFacial Platinum × 4: ₹27,000 (save ₹3,000)
• Chemical Peel Series × 4: ₹16,000

**Injectable Bundles:**
• Botox 3-area × 4 sessions: ₹96,000 (save ₹12,000)
• Filler 2ml + Botox 2-area: ₹85,000
• Profhilo 2-session protocol: ₹45,000

**Body Contouring:**
• CoolSculpting 4-cycle package: ₹80,000
• Morpheus8 Face+Neck × 3: ₹75,000

**EMI:** 0% for 6-12 months on packages >₹25,000 (partner NBFCs)

👉 **Get Package Details:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20know%20about%20treatment%20packages%20at%20GLOW%20Skin%20%26%20Laser.`,
          loyalty: `**GLOW Loyalty Program — Rewards for Your Skin Journey**

**Tiered Benefits:**
• **Silver (0-₹25K spend):** 5% product discount | Birthday gift | Priority booking
• **Gold (₹25K-₹75K):** 10% product discount | 1 free HydraFacial/year | Free skin analysis | EMI access
• **Platinum (₹75K+):** 15% product discount | 2 free HydraFacials/year | Complimentary Profhilo session | Dedicated concierge | Family sharing

**Earn Points:**
• ₹100 spend = 1 point
• Referral: 500 points (friend gets ₹500 off first treatment)
• Review: 100 points
• Birthday month: 2x points

**Redeem:** 1,000 points = ₹1,000 off treatments/products
**Auto-tracked:** Your WhatsApp thread = your loyalty dashboard

👉 **Check Your Tier:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20check%20my%20loyalty%20status%20at%20GLOW%20Skin%20%26%20Laser.`,
        }
      },
      {
        id: 'skin-analysis',
        label: 'Skin Analysis',
        icon: 'scan',
        keywords: ['analysis', 'visia', 'skin scan', 'assessment', 'diagnosis', 'skin type', 'concern'],
        responses: {
          default: `**VISIA® 3D Skin Analysis (₹1,500)** — the gold standard

**What it measures:**
• UV damage (sun spots, freckles)
• Porphyrins (acne bacteria)
• Redness (rosacea, sensitivity)
• Texture (pores, fine lines, wrinkles)
• Pigmentation (melasma, PIH)
• **TruSkin Age** — your skin's biological age vs chronological

**Process:** 15 min scan → instant report → dermatologist review → custom plan
**Best for:** Baseline before treatment, tracking progress, routine optimisation
**Frequency:** Every 3-4 months to track improvement

**Virtual Alternative:** ₹999 questionnaire + selfies → routine only (no imaging)

👉 **Book Skin Analysis:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20a%20VISIA%20skin%20analysis%20at%20GLOW%20Skin%20%26%20Laser.`,
        }
      },
      {
        id: 'faq',
        label: 'Common Questions',
        icon: 'help-circle',
        keywords: ['downtime', 'pain', 'safe', 'side effect', 'recovery', 'how long', 'last', 'maintenance', 'pregnant', 'breastfeeding', 'acne', 'sensitive'],
        responses: {
          default: `**Quick Answers:**

**Downtime by Treatment:**
• HydraFacial / Oxygen / Laser Toning: **Zero** — makeup-ready
• Chemical Peels: **2-5 days** mild flaking
• Microneedling: **1-3 days** redness, light peeling
• Fractional CO2: **5-7 days** social downtime (red, scabbing)
• Botox/Fillers: **Minimal** — possible bruising (arnica helps)
• Laser Hair Removal: **Few hours** redness

**Safety:**
• All devices FDA-cleared | Products from authorised distributors
• Doctor consultation mandatory for injectables, lasers, Rx products
• Patch test included for all new actives

**Pregnancy/Breastfeeding:**
• ✅ Safe: HydraFacial, Oxygen, LED, gentle peels (lactic), azelaic acid, niacinamide, hyaluronic acid, mineral SPF
• ❌ Avoid: Retinoids, high% acids, laser, injectables, hydroquinone, Botox

**Maintenance:**
• Laser hair: 1 touch-up/year after package
• Botox: every 3-4 months
• Fillers: 9-18 months
• Facials: monthly
• Skin analysis: quarterly

👉 **Ask Specific Question:** https://wa.me/919876543210?text=Hi%2C%20I%20have%20a%20question%20about%20treatment%20at%20GLOW%20Skin%20%26%20Laser.`,
        }
      },
      {
        id: 'location',
        label: 'Location & Directions',
        icon: 'map-pin',
        keywords: ['where', 'address', 'location', 'direction', 'metro', 'bus', 'parking', 'reach', 'anna nagar', 'chennai'],
        responses: {
          default: `**GLOW Skin & Laser Clinic**
No. 18, 3rd Floor, Anna Nagar West, Chennai — 600 040
**Landmark:** Opp. Anna Nagar Roundtana, Above ICICI Bank

**Getting Here:**
🚇 **Metro (Green Line):** Anna Nagar Tower / Thirumangalam — 200m walk
🚌 **Bus:** Routes 37E, 53E, 121C stop at Anna Nagar Roundtana
🚗 **Parking:** Building basement (validated for patients)
🚕 **Auto/Cab:** "Anna Nagar Roundtana, ICICI Bank building"

**Hours:** Mon-Sat 10 AM - 8 PM | Sun 11 AM - 4 PM

📍 **Google Maps:** https://maps.google.com/?q=GLOW+Skin+Laser+Anna+Nagar+West+Chennai

👉 **WhatsApp for Directions:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20directions%20to%20GLOW%20Skin%20%26%20Laser.`,
        }
      },
      {
        id: 'contact',
        label: 'Contact Us',
        icon: 'phone',
        keywords: ['call', 'phone', 'email', 'whatsapp', 'contact', 'speak', 'talk', 'human', 'reception'],
        responses: {
          default: `**Reach Us Directly:**

📞 **Call/WhatsApp:** +91 98765 43210
📧 **Email:** hello@glowskinlaser.in | orders@glowskinlaser.in
💬 **WhatsApp:** https://wa.me/919876543210 (fastest response)

**Response Times:**
• WhatsApp: <5 min (clinic hours) | <2 hours (after hours)
• Email: Within 2 hours weekdays
• Phone: 10 AM - 8 PM Mon-Sat, 11 AM - 4 PM Sun

**For Emergencies:** Call +91 98765 43210 — we prioritize existing patients

👉 **Message Us Now:** https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20speak%20with%20the%20team%20at%20GLOW%20Skin%20%26%20Laser.`,
        }
      },
      {
        id: 'emergency',
        label: 'Urgent / Reaction',
        icon: 'alert-triangle',
        keywords: ['reaction', 'allergy', 'burn', 'emergency', 'urgent', 'worse', 'swelling', 'rash', 'irritation', 'side effect'],
        responses: {
          default: `**If You're Having a Reaction:**

1. **STOP** the product/treatment immediately
2. **Cool compress** (clean cloth + cold water) — no ice directly
3. **Message us on WhatsApp with photos** — we triage within 2 hours (clinic hours)
4. **Do not** apply new actives, acids, retinoids, vitamin C
5. **Gentle only:** Cerave Healing Ointment, La Roche-Posay Cicaplast, thermal water

**Red Flags — Go to ER:**
• Difficulty breathing / swallowing
• Swelling of lips, tongue, throat
• Worsening despite stopping product
• Fever + spreading redness

**Post-Laser/Injectable Concerns:**
• Normal: Redness, swelling, bruising (2-7 days)
• Not normal: Increasing pain, heat, pus, fever, vision changes

👉 **Message Urgent:** https://wa.me/919876543210?text=URGENT%3A%20I%27m%20having%20a%20reaction%20%2F%20concern%20after%20treatment%20at%20GLOW%20Skin%20%26%20Laser.`,
        }
      }
    ],

    // Quick action chips shown on welcome
    quickActions: [
      { label: 'Book Consultation', category: 'booking', query: 'book consultation' },
      { label: 'HydraFacial', category: 'treatments', query: 'hydrafacial' },
      { label: 'Laser Hair Removal', category: 'treatments', query: 'laser hair removal' },
      { label: 'Botox / Fillers', category: 'treatments', query: 'injectables' },
      { label: 'Skin Analysis', category: 'skin-analysis', query: 'skin analysis' },
      { label: 'Order Products', category: 'products', query: 'order products' },
      { label: 'Custom Routine', category: 'products', query: 'custom routine' },
      { label: 'Packages & EMI', category: 'packages', query: 'packages' },
      { label: 'Loyalty Program', category: 'packages', query: 'loyalty' },
      { label: 'Location & Directions', category: 'location', query: 'location' }
    ],

    // WhatsApp number (used for all deep links)
    whatsappNumber: '919876543210',

    // Clinic info
    clinicName: 'GLOW Skin & Laser Clinic',
    clinicPhone: '+91 98765 43210',
    clinicAddress: 'No. 18, 3rd Floor, Anna Nagar West, Chennai — 600 040'
  };

  // ==========================================================================
  // CHATBOT CLASS
  // ==========================================================================
  class SkinChatbot {
    constructor() {
      this.isOpen = false;
      this.messages = [];
      this.context = { lastCategory: null, awaitingResponse: false };
      this.typingTimeout = null;
      this.init();
    }

    init() {
      this.cacheElements();
      this.bindEvents();
      this.loadHistory();
      this.showWelcome();
    }

    cacheElements() {
      this.toggle = document.querySelector('[data-chatbot-toggle]');
      this.panel = document.querySelector('[data-chatbot-window]');
      this.closeBtn = document.querySelector('[data-chatbot-close]');
      this.messagesContainer = document.querySelector('[data-chatbot-messages]');
      this.quickActionsContainer = document.querySelector('[data-chatbot-quick]');
      this.input = document.querySelector('[data-chatbot-input]');
      this.sendBtn = document.querySelector('[data-chatbot-send]');
    }

    bindEvents() {
      this.toggle.addEventListener('click', () => this.togglePanel());
      this.closeBtn.addEventListener('click', () => this.closePanel());
      this.sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleSubmit();
      });
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.handleSubmit();
        }
      });
      this.input.addEventListener('input', () => this.updateSendButton());

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (this.isOpen && !this.panel.contains(e.target) && !this.toggle.contains(e.target)) {
          this.closePanel();
        }
      });

      // Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) this.closePanel();
      });

      // Quick action delegation
      this.quickActionsContainer?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action]');
        if (btn) {
          this.handleQuickAction(btn.dataset.action);
        }
      });
    }

    togglePanel() {
      this.isOpen ? this.closePanel() : this.openPanel();
    }

    openPanel() {
      this.isOpen = true;
      this.panel.classList.add('active');
      this.toggle.setAttribute('aria-expanded', 'true');
      this.input.focus();
      this.trackEvent('chatbot_open');
    }

    closePanel() {
      this.isOpen = false;
      this.panel.classList.remove('active');
      this.toggle.setAttribute('aria-expanded', 'false');
      this.trackEvent('chatbot_close');
    }

    showWelcome() {
      const welcomeMsg = `Hi! I'm your **GLOW AI Skin Assistant** 👋

I can help you with:
• **Booking** consultations & treatments
• **Treatment info** — HydraFacial, laser, injectables, body contouring
• **Product recommendations** — Vitamin C, retinoids, sunscreens, kits
• **Custom routines** — virtual or in-clinic skin analysis
• **Packages & EMI** — loyalty rewards too
• **Location & directions** to our Anna Nagar clinic

What would you like to know?`;

      this.addMessage(welcomeMsg, 'bot');
      this.renderQuickActions();
    }

    loadHistory() {
      try {
        const saved = localStorage.getItem('glow_chatbot_history');
        if (saved) {
          this.messages = JSON.parse(saved);
          this.messages.forEach(msg => this.renderMessage(msg));
        }
      } catch (e) {
        console.warn('Chatbot history load failed:', e);
      }
    }

    saveHistory() {
      try {
        localStorage.setItem('glow_chatbot_history', JSON.stringify(this.messages.slice(-50)));
      } catch (e) {
        console.warn('Chatbot history save failed:', e);
      }
    }

    handleSubmit() {
      const text = this.input.value.trim();
      if (!text) return;

      this.addMessage(text, 'user');
      this.input.value = '';
      this.updateSendButton();
      this.processMessage(text);
    }

    updateSendButton() {
      this.sendBtn.disabled = !this.input.value.trim();
    }

    addMessage(content, role, meta = {}) {
      const message = {
        id: Date.now() + Math.random(),
        role,
        content,
        timestamp: new Date().toISOString(),
        ...meta
      };
      this.messages.push(message);
      this.renderMessage(message);
      this.saveHistory();
      this.scrollToBottom();
      return message;
    }

    renderMessage(message) {
      const div = document.createElement('div');
      div.className = `chatbot-message ${message.role}`;
      div.dataset.id = message.id;

      const time = new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const avatarInitial = message.role === 'bot' ? 'G' : 'U';

      div.innerHTML = `
        <div class="chatbot-avatar" aria-hidden="true">${avatarInitial}</div>
        <div class="chatbot-bubble">${this.formatContent(message.content)}</div>
      `;

      this.messagesContainer.appendChild(div);
    }

    formatContent(content) {
      return content
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/•/g, '<br>•')
        .replace(/\n/g, '<br>')
        .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="chatbot-link">$1</a>');
    }

    showTyping() {
      const div = document.createElement('div');
      div.className = 'chatbot-message bot chatbot-typing-message';
      div.innerHTML = `
        <div class="chatbot-avatar" aria-hidden="true">G</div>
        <div class="chatbot-typing" aria-label="Typing">
          <span class="chatbot-typing-dot"></span>
          <span class="chatbot-typing-dot"></span>
          <span class="chatbot-typing-dot"></span>
        </div>
      `;
      this.messagesContainer.appendChild(div);
      this.scrollToBottom();
      return div;
    }

    hideTyping(typingEl) {
      if (typingEl && typingEl.parentNode) {
        typingEl.parentNode.removeChild(typingEl);
      }
    }

    scrollToBottom() {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    processMessage(text) {
      const typingEl = this.showTyping();

      // Simulate thinking time
      setTimeout(() => {
        this.hideTyping(typingEl);
        const response = this.generateResponse(text);
        this.addMessage(response.text, 'bot', { category: response.category });
        this.renderQuickActions(response.suggestedActions);
        this.trackEvent('chatbot_response', { category: response.category });
      }, 600 + Math.random() * 400);
    }

    generateResponse(text) {
      const lower = text.toLowerCase();

      // Find matching category
      let matchedCategory = null;
      let matchedResponse = null;
      let specificity = 0;

      for (const cat of KNOWLEDGE_BASE.categories) {
        for (const keyword of cat.keywords) {
          if (lower.includes(keyword.toLowerCase())) {
            const spec = keyword.length;
            if (spec > specificity) {
              specificity = spec;
              matchedCategory = cat;
            }
          }
        }
      }

      // Check for specific sub-topics within treatments
      if (matchedCategory && matchedCategory.id === 'treatments') {
        if (lower.includes('hydrafacial') || lower.includes('hydra facial')) {
          matchedResponse = matchedCategory.responses.hydrafacial;
        } else if (lower.includes('laser') || lower.includes('hair removal') || lower.includes('pigment') || lower.includes('scar')) {
          matchedResponse = matchedCategory.responses.laser;
        } else if (lower.includes('botox') || lower.includes('filler') || lower.includes('inject') || lower.includes('profhilo') || lower.includes('booster')) {
          matchedResponse = matchedCategory.responses.injectables;
        }
      }

      if (matchedCategory && matchedCategory.id === 'booking') {
        if (lower.includes('virtual') || lower.includes('online') || lower.includes('remote')) {
          matchedResponse = matchedCategory.responses.virtual;
        }
      }

      if (matchedCategory && matchedCategory.id === 'products') {
        if (lower.includes('routine') || lower.includes('regimen') || lower.includes('regime')) {
          matchedResponse = matchedCategory.responses.routine;
        } else if (lower.includes('retinol') || lower.includes('retinoid') || lower.includes('tretinoin') || lower.includes('retinal')) {
          matchedResponse = matchedCategory.responses.retinol;
        } else if (lower.includes('sunscreen') || lower.includes('spf') || lower.includes('sun protection')) {
          matchedResponse = matchedCategory.responses.sunscreen;
        }
      }

      if (matchedCategory && matchedCategory.id === 'packages') {
        if (lower.includes('loyalty') || lower.includes('reward') || lower.includes('tier') || lower.includes('point')) {
          matchedResponse = matchedCategory.responses.loyalty;
        }
      }

      // Default response from category
      if (!matchedResponse && matchedCategory) {
        matchedResponse = matchedCategory.responses.default;
      }

      // Fallback: general help
      if (!matchedResponse) {
        matchedResponse = `I want to make sure I give you the right info. Could you clarify?

**I can help with:**
• **Treatments** — HydraFacial, laser, Botox, fillers, body contouring
• **Booking** — slots, virtual consult, pricing
• **Products** — Vitamin C, retinoids, SPF, kits
• **Skin Analysis** — VISIA scan or virtual
• **Packages** — bundles, EMI, loyalty rewards
• **Location** — directions, parking, metro

Just tell me what you're looking for, or tap a quick action below.`;
        matchedCategory = { id: 'general' };
      }

      this.context.lastCategory = matchedCategory.id;

      // Determine suggested follow-up actions
      const suggestedActions = this.getSuggestedActions(matchedCategory.id);

      return { text: matchedResponse, category: matchedCategory.id, suggestedActions };
    }

    getSuggestedActions(categoryId) {
      const suggestions = {
        treatments: ['Book Consultation', 'HydraFacial', 'Laser Hair Removal', 'Botox / Fillers', 'Packages & EMI'],
        booking: ['Book Consultation', 'Virtual Analysis', 'Check Availability', 'Packages & EMI'],
        products: ['Order Products', 'Custom Routine', 'Vitamin C Serums', 'Retinoids', 'Sunscreens'],
        'skin-analysis': ['Book VISIA Scan', 'Virtual Analysis', 'Book Consultation'],
        packages: ['Laser Packages', 'Facial Packages', 'Injectable Bundles', 'Loyalty Program', 'EMI Options'],
        faq: ['Downtime Info', 'Safety & Pregnancy', 'Maintenance Schedule', 'Book Consultation'],
        location: ['Get Directions', 'Book Consultation', 'Parking Info'],
        contact: ['WhatsApp Us', 'Call Clinic', 'Email Us'],
        emergency: ['Message Urgent', 'Call Clinic', 'Stop Product'],
        general: ['Book Consultation', 'HydraFacial', 'Laser Hair Removal', 'Skin Analysis', 'Order Products']
      };
      return suggestions[categoryId] || suggestions.general;
    }

    renderQuickActions(labels = null) {
      const actions = labels || KNOWLEDGE_BASE.quickActions.map(a => a.label);
      this.quickActionsContainer.innerHTML = '';

      actions.forEach(label => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chatbot-quick-btn';
        btn.textContent = label;
        btn.setAttribute('role', 'menuitem');
        btn.setAttribute('data-action', label.toLowerCase().replace(/\s+/g, '-'));
        btn.addEventListener('click', () => this.handleQuickAction(label));
        this.quickActionsContainer.appendChild(btn);
      });
    }

    handleQuickAction(label) {
      const action = KNOWLEDGE_BASE.quickActions.find(a => a.label === label);
      const query = action ? action.query : label.toLowerCase();
      this.addMessage(label, 'user');
      this.processMessage(query);
      this.trackEvent('chatbot_quick_action', { label });
    }

    trackEvent(eventName, data = {}) {
      // Analytics hook — extend for GA4, Mixpanel, etc.
      if (window.gtag) {
        window.gtag('event', eventName, {
          chatbot: 'glow_skin_assistant',
          ...data
        });
      }
      // Console for debugging
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('[Chatbot Event]', eventName, data);
      }
    }
  }

  // ==========================================================================
  // INITIALIZE
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    window.glowChatbot = new SkinChatbot();
  });

})();