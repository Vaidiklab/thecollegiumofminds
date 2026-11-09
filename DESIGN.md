# DESIGN.md — The Collegium of Minds
## Phase Neo Design System & Visual Identity Specification

---

## 1. Brand Identity

**The Collegium of Minds (CoM)** is an independent intellectual guild and decentralized laboratory of ideas. It exists for curious thinkers, scholars, and lifelong learners who explore fundamental questions across theoretical physics, transfinite mathematics, philosophy of mind, cosmology, artificial intelligence, and literature.

CoM does not position itself as an academic institution or a generic technological blog. It embodies the atmosphere of a timeless digital observatory—a place of contemplation, depth, and discovery where inquiry precedes conformity.

### Core Brand Principles
- **Intellectual Curiosity:** The question takes precedence over hasty certainty.
- **Interdisciplinary Rigor:** Cross-pollination between disparate sciences and humanistic thought.
- **Authentic Fellowship:** A collaborative sanctuary for independent minds.
- **Atmospheric Restraint:** Sophistication communicated through negative space, refined typography, and purposeful motion.

---

## 2. Creative Direction

### The Visual Thesis
```
DARK EDITORIAL  ×  CINEMATIC MINIMALISM  ×  INTELLECTUAL EXPLORATION
```

The experience evokes:
- Contemplative stillness and deep-space gravity.
- Intellectual curiosity and exploration of the unknown.
- Precision, craftsmanship, and refined editorial elegance.
- Restraint over decorative excess: every pixel, transition, and word has intention.

### Creative References & Inspirations
- **Compact Floating Navigation:** Restrained horizontal pill capsule inspired by modern minimalist interfaces (e.g., Supaste), floating discreetly above the canvas.
- **Luxury Editorial Publishing:** Expressive high-contrast display serif typography, generous whitespace, asymmetric column balances, and quiet margins.
- **Cinematic Deep Space:** Pure carbon black vacuum with an isolated astronaut embarking into the unknown.
- **Restrained Motion Design:** Purposeful, scroll-linked spatial transformations; no arbitrary animations or kinetic noise.

---

## 3. Design Philosophy

### "Collegium of Minds is not another website trying to explain why it is interesting."

It invites the reader into an intellectual sanctuary through atmosphere and typography.
- **Black creates the atmosphere:** An uncompromising carbon black canvas eliminates digital distractions and focuses attention.
- **Typography establishes identity:** Large high-contrast display serif headlines project authority, intellectual gravitas, and timeless humanity.
- **The astronaut represents exploration:** A physical symbol of human curiosity venturing beyond the known perimeter of knowledge.
- **Purple provides personality:** Used exclusively as an accent—never as an overwhelming background flood.
- **Motion rewards curiosity:** Animations respond to user interaction rather than playing unprompted loops.
- **Minimalism creates meaning:** Generous negative space gives deep ideas room to resonate.

---

## 4. Colour Palette

Phase Neo establishes a strictly disciplined, predominantly monochromatic color hierarchy. Carbon black forms the foundation; warm off-white delivers optimal legibility; subtle purple is restricted strictly to tiny occasional interactive details.

### A. Core Semantic Tokens

| Token Name | Hex / CSS Value | Semantic Role |
| :--- | :--- | :--- |
| **Primary Canvas** | `#030303` | Absolute carbon black background; deep-space void |
| **Secondary Background** | `#050505` | Footers, deep container baselines |
| **Surface Subtle** | `#0D0D0D` / `#101010` | Editorial cards, floating modal panels |
| **Surface Elevated** | `#141414` / `#171717` | Hovered cards, interactive pill states, input fills |
| **Primary Text** | `#F2EEE8` | Warm editorial off-white/cream; headlines, primary reading text |
| **Secondary Text** | `#A3A3A3` / `#A5A19F` | Neutral stone gray; body paragraphs, subheadings, excerpts |
| **Tertiary / Dim** | `#716E6B` | Tabular numerals, metadata labels, timestamps, disabled indicators |
| **Primary Border** | `rgba(255, 255, 255, 0.10)` | Hairline card dividers and capsule contours |
| **Subtle Border** | `rgba(255, 255, 255, 0.05)` | Secondary dividers, internal table rules |
| **Purple Accent** | `#A78BFA` | Selective interactive details (text selection, vote bar distribution fill) |
| **CTA Button** | `#F2EEE8` text `#030303` | High-contrast off-white pill for primary calls to action |

### B. Color Usage Rules
- **Carbon Black Dominance:** The canvas remains uncompromisingly carbon black (`#030303`).
- **Monochromatic Purity:** The website identity is monochromatic. The astronaut asset is the primary visual accent.
- **Strict Purple Removal:** No purple hero typography, no purple gradients, no purple glow effects, no purple-heavy buttons, and no purple borders.
- **Prohibited:**
  - Blue or cyan gradients.
  - Purple-dominated backgrounds or typography.
  - Neon glowing halos or excessive radial flares.
  - Heavy frosted glassmorphism.

---

## 5. Typography System

Typography is central to Phase Neo's confident identity. The system pairs an authoritative, bold geometric display with a clean interface sans-serif, an elegant secondary serif italic for selected editorial phrases, and a technical monospace.

### A. Font Families

1. **Primary Display & Hero Heading (`--font-display`, `--font-sans`):**
   - **Primary:** `Inter Bold`, `Inter ExtraBold` (`font-extrabold`)
   - **Role:** Hero title ("Collegium\nof Minds."), primary section titles.
   - **Characteristics:** Confident, large, highly legible, strong weight, tight tracking (`tracking-tight` / `tracking-tighter`), commanding presence without thin letterforms.

2. **Secondary Editorial Phrase (`--font-serif`):**
   - **Primary:** `Instrument Serif`, `Cormorant Garamond`, `Georgia`
   - **Role:** "Beyond what we know.", selected philosophical pull-quotes.
   - **Characteristics:** Elegant italic posture, warm off-white (`#E5E0D8` / `#F2EEE8`), visually subordinate to the bold display heading. Never purple.

3. **Interface & Body Sans (`--font-sans`):**
   - **Primary:** `Inter Regular` (300/400), `Inter Medium` (500), `Inter SemiBold` (600)
   - **Role:** Body copy, navigational links, buttons, metadata labels, guideline prose.
   - **Characteristics:** Neutral geometry, open aperture, superior legibility across dark surfaces.

4. **Technical Monospace (`--font-mono`):**
   - **Primary:** `JetBrains Mono`, `ui-monospace`, `monospace`
   - **Role:** Index numbers (`01 / PHILOSOPHY`), timestamps, poll metrics.

### B. Type Scale & Optical Metrics

| Level | Font & Weight | Size (Mobile → Desktop) | Line Height | Tracking | Color |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | Inter ExtraBold (800) | `3rem` (`48px`) → `7.25rem` (`116px`) | `0.94` | `-0.035em` | `#F2EEE8` |
| **Hero Secondary** | Instrument Serif Italic | `1.5rem` (`24px`) → `3rem` (`48px`) | `1.15` | `-0.01em` | `#E5E0D8` (off-white) |
| **Section Title** | Instrument Serif (Normal) | `2rem` (`32px`) → `3.75rem` (`60px`) | `1.08` | `-0.02em` | `#F2EEE8` |
| **Editorial Quote** | Instrument Serif (Italic) | `1.25rem` (`20px`) → `1.75rem` (`28px`)| `1.40` | `normal` | `#F2EEE8` |
| **Body Large** | Inter (Light 300) | `1.0625rem` (`17px`) → `1.125rem` (`18px`)| `1.75` | `normal` | `#A3A3A3` |
| **Body Standard** | Inter (Light 300) | `0.875rem` (`14px`) → `0.9375rem` (`15px`)| `1.65` | `normal` | `#A3A3A3` |
| **Section Label** | JetBrains Mono (Medium) | `0.6875rem` (`11px`) → `0.75rem` (`12px`)| `1.0` | `+0.25em` (uppercase) | `#A3A3A3` |
| **Capsule Link** | Inter (Medium 500) | `0.75rem` (`12px`) | `1.0` | `+0.05em` | `#A3A3A3` → `#F2EEE8` |

---

## 6. Layout & Spacing System

The layout follows an editorial magazine architecture prioritizing generous vertical rhythm, intentional asymmetry, and strict container bounds.

### A. Grid & Metrics
- **Viewport Canvas:** Fluid width with responsive side gutters (`px-6 sm:px-10 lg:px-16`).
- **Standard Content Max-Width:** `max-w-7xl` (`1280px`).
- **Reading / Manifesto Max-Width:** `max-w-3xl` (`768px`) to ensure comfortable line lengths.
- **Section Spacing Cadence:** `py-28 sm:py-36`.
- **Dividers:** Hairline borders `border-t border-white/10`.

---

## 7. Navigation System — Compact Floating Capsule

Inspired by the compact, centered floating capsule interface (reference: Supaste), the CoM navigation floats serenely at the top center of the viewport.

### A. Architectural Characteristics
- **Position:** `fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none`.
- **Inner Capsule:** `pointer-events-auto w-full max-w-4xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3`.
- **Surface:** `bg-[#070707]/95 backdrop-blur-md border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.85)]`.
- **Structure:**
  - **Left:** CoM circular emblem (`/logo.jpeg`) with fine white border + "Collegium of Minds" wordmark.
  - **Center:** Navigational links (`About`, `Questions`, `Library`, `Discussions`, `Events`).
  - **Right:** High-contrast off-white pill button ("Join CoM", `bg-[#F2EEE8] text-[#030303] hover:bg-white`) for immediate clarity without color clash.
  - **Mobile:** Adaptive hamburger trigger inside the capsule opening a refined dark dropdown with smooth AnimatePresence.

---

## 8. Hero Composition & Deep-Space Departure Motion

### A. Minimalist Editorial Composition
The hero contains only essential elements:
1. **The Display Heading:** `Collegium\nof Minds.` in `Inter ExtraBold` (large, commanding, left-aligned, occupying a confident portion of the left side).
2. **The Secondary Phrase:** `Beyond what we know.` (warm off-white italic serif, visually subordinate, no purple).
3. **The Astronaut Asset:** The original `/assets/astronaut.png` floating in space, preserved with natural transparency, proportion, and subtle lighting.
4. **Mouse Scroll Indicator:** A delicate outlined mouse icon with an animated vertical inner scroll wheel and "SCROLL TO EXPLORE" label, centered near the bottom of the hero viewport, fading out smoothly on scroll.

### B. "Deep-Space Departure" Scroll-Linked Animation
The animation is directly linked to the user's natural scroll progress (`useScroll` with `useTransform`):
1. **Initial View (0% - 15% scroll):**
   - The astronaut floats at natural scale (`1.0`) with gentle idle 3D floating oscillation.
2. **Descent & Inward Translation (15% - 60% scroll):**
   - As the user scrolls, the astronaut moves downward (`y: 0px → 320px`) and drifts inward (`x: 0px → -80px`), creating depth perspective.
3. **Exponential Scale Contraction (40% - 85% scroll):**
   - The astronaut scales down progressively (`scale: 1.0 → 0.12`), receding into deep cosmic distance.
4. **Smooth Vanish into Vacuum (75% - 98% scroll):**
   - Opacity fades progressively (`1.0 → 0.0`) as the Philosophy section arrives. Canvas is clean carbon black `#030303`.
5. **Bidirectional Control:**
   - Scrolling upward pulls the astronaut back from deep space along the exact coordinate trajectory without scroll hijacking.

---

## 9. Homepage Sections Architecture

1. **Section A — Hero:** Dual typography lines + independent astronaut deep-space departure.
2. **Section B — Our Philosophy:** The central manifesto ("We do not gather to settle opinions, but to venture beyond what we know"), pull-quote card, and 3-metric ledger.
3. **Section C — Intellectual Disciplines:** 10 numbered societies (`01` to `10`) in an editorial index table with lead provocative questions, fellow counts, and an interactive Society Detail Modal.
4. **Section D — What Drives Us:** 4 foundational convictions (Primacy of the Question, Interdisciplinary Synthesis, Radical Independence, Lifelong Fellowship).
5. **Section E — Questions Worth Exploring:** Dynamic 6-card inquiry shuffle grid + Question of the Week live vote with Firestore synchronization and real-time result distribution bars.
6. **Section F — What We're Thinking:** Curated lead treatise, secondary essay grid, CoM Monthly Notebook Gazette issues, and Substack enrollment.
7. **Section G — The Guild (Members):** Founder & Executive Director Sarvesh Kore featured profile with authentic photo, quote, and manifesto modal, plus Operations & Development council member dossiers.
8. **Digital Salon (Discussions):** Live Discord channel discussions and bulletin board feed.
9. **Section H — Join the Collegium:** Closing invitation with rotating marginalia reflections (Feynman, Sagan, Socrates, Russell, Curie), code of conduct, guideline agreement checkbox, and Google Form application action.
10. **Section I — Editorial Footer:** Ponder This random prompt, institutional links, Discord/GitHub/LinkedIn portals, and Sarvesh Kore copyright.

---

## 10. Motion Design System

Motion in CoM Phase Neo serves meaning and spatial orientation rather than ornamentation.

### A. Principles
- **Transform & Opacity First:** 100% GPU-accelerated properties (`translate3d`, `scale`, `opacity`).
- **No Heavy Blurs:** Blurring during motion causes frame drops; avoided completely.
- **Scroll Synchronization:** Key spatial movements are driven by native browser scroll position.
- **Reduced-Motion Support:** Evaluates `useReducedMotion()`. If preferred, transforms are simplified to direct static layout.

### B. Timing Curves
- **Standard Entrance:** `duration: 0.7s, ease: [0.16, 1, 0.3, 1]` (custom cubic bezier for fluid deceleration).
- **Hover Transitions:** `duration: 0.25s, ease: easeOut`.
- **Idle Float Cycle:** `duration: 8.5s, repeat: Infinity, ease: easeInOut`.

---

## 11. Interaction & Hover Conventions

- **Links & Buttons:**
  - Standard text link: Color transitions from `#A5A19F` to `#F2EEE8` or `#A78BFA`.
  - Capsule buttons: Hairline border shifts from `border-white/15` to `border-[#A78BFA]/50` with subtle background fill.
- **Editorial Cards:**
  - Resting state: `bg-[#0D0D0D] border border-white/10`.
  - Hover state: `border-[#A78BFA]/35 -translate-y-0.5`.
- **Question Cards:**
  - Clicking any inquiry card immediately triggers a shuffle animation, replacing it with an unshown philosophical prompt.

---

## 12. Responsive Behaviour

- **Large Desktop (≥1280px):** Full asymmetric split hero, horizontal editorial directory, 4-column council grid.
- **Laptop / Tablet (768px – 1024px):** Proportional typography scaling (`text-5xl` to `text-7xl`), 2-column council grid.
- **Mobile (<768px):**
  - Navigation contracts to compact pill with logo + title + hamburger.
  - Hero stacks typography vertically above the floating astronaut.
  - Display titles employ fluid responsive scaling.
  - Inquiry shuffle grid switches to single-column card stack.

---

## 13. Accessibility & Standards

- **Contrast Ratios:** Primary text (`#F2EEE8`) on carbon black (`#030303`) yields a 17.5:1 contrast ratio (exceeding WCAG AAA standard of 7:1).
- **Semantics:** Clean HTML5 landmark tags (`<header>`, `<nav>`, `<section>`, `<article>`, `<blockquote>`, `<footer>`).
- **Keyboard Navigation:** All interactive elements (capsule links, modal close buttons, poll options, checkboxes) feature clear focus indicators and full keyboard accessibility.

---

## 14. Asset Specification

| Asset | Path | Format & Quality | Purpose |
| :--- | :--- | :--- | :--- |
| **Floating Astronaut** | `/assets/astronaut.png` | 1536×1024 Transparent PNG | Hero deep-space departure element |
| **Founder Photo** | `/team/sarvesh.png` | Square Photo (High-res) | Guild leadership profile |
| **Emblem Logo** | `/logo.jpeg` | Circular Avatar | Nav capsule & footer brandmark |
| **OpenGraph Image**| `/og-image.png` | 1200×630 PNG | Social preview meta-card |

---

## 15. Design Anti-Patterns

1. **NO Neon Glows:** Never introduce high-saturation electric cyan or magenta neon glow boxes.
2. **NO Gradient Backgrounds:** The background must never be a gradient wash; it remains carbon black `#030303`.
3. **NO Stock/AI Personas:** All member names, roles, quotes, and avatars represent genuine project contributors.
4. **NO Scroll Hijacking:** Wheel event interception is prohibited. Native scroll must always control page progression.
5. **NO Glassmorphism Clutter:** Never stack translucent glass panels with thick borders. Surfaces are opaque carbon (`#0D0D0D`) with fine hairline rules.
