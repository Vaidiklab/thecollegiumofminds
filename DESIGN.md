# DESIGN.md — Design Language & Experience

## 1. Design Philosophy

### What the Website Visually Communicates
*The Collegium of Minds* (CoM) is designed as a digital digital sanctuary for intellectual curiosity, scientific inquiry, philosophical speculation, and deep contemplation. It bridges the classical, venerated atmosphere of Enlightenment-era scholarly academies with a modern, high-contrast, cosmic-technological aesthetic. Rather than feeling like a sterile academic portal or a generic blog, it projects the ambience of a digital observatory or an ancient scholarly guild transported to the quantum age.

### Atmosphere, Emotion & Impression
The design creates an atmosphere that is:
- **Contemplative & Immersive:** Deep obsidian backgrounds (`#070912`), subtle fractal film grain overlays, and gently drifting mathematical symbols establish an introspective, serene reading environment.
- **Intellectually Elevated:** The deliberate pairing of high-contrast typography—the humanist, editorial serif **Fraunces** with the modern neutral sans **Inter** and technical **JetBrains Mono**—imparts authority, gravitas, and scholarly rigor.
- **Luminescent & Dynamic:** Electric cyan accents (`#21D5ED`), glowing borders, and reactive constellation particle physics create an aura of illumination, revelation, and discovery.

### Target Audience
The visual design targets:
- Curious thinkers, researchers, mathematicians, and physicists.
- Philosophers, writers, essayists, and autodidacts.
- Interdisciplinary scholars drawn to discussions across cosmology, AI, consciousness, ethics, and aesthetics.
- Intellectual communities seeking high-signal discussions away from algorithmic noise.

### Distinctive Identity Characteristics
1. **The Celestial & Constellation Motif:** Interactive headings and starry canvas backgrounds dissolve and connect lines like astronomical constellations as the reader's cursor passes over them.
2. **The "Archive & Salon" Metaphor:** Sections are named *The Archives*, *Library of Minds*, *Intellectual Assemblies*, *Inquiry Platform*, and *The Fellowship*.
3. **Interactive 3D Objects:** 3D book covers in the background tilt with cursor physics and flip open on hover (`rotateY(-135deg)`) to reveal titles like *Cosmos*, *The Feynman Lectures*, and *The Republic*.
4. **Cinematic Cosmic Theme Transitions:** Switching between Dark and Light mode is not an abrupt CSS change; it triggers an orchestrated 1.3-second canvas animation rendering a starburst supernova explosion (Dark → Light) or a gravitational black-hole collapse (Light → Dark).

---

## 2. Visual Identity

### A. Color Palette

The site features a high-contrast dark theme as its primary default, complemented by a calibrated light theme. In the CSS architecture, the color system defines semantic tokens in `@theme` while aliasing legacy token names (`bronze`, `obsidian`, `silver`) to maintain zero runtime breakages across existing components.

#### Primary Dark Theme Palette (Default)
| Token Name | Legacy Alias | Actual HEX / Value | Role / Usage |
| :--- | :--- | :--- | :--- |
| `--color-background` | `--color-obsidian` | `#070912` | Deep Cosmic Obsidian; primary site canvas background |
| `--color-card` / `--color-popover` | `--color-obsidian-surface` | `#0C0F1D` | Surface cards, floating modals, navigation bars |
| `--color-accent` | `--color-obsidian-light` | `#171B30` | Hover states, elevated card backgrounds, active items |
| `--color-foreground` | `--color-silver` | `#E2EBF3` | High-contrast body text, primary headings |
| `--color-muted-foreground` | `--color-silver-muted` | `#8095B3` | Secondary text, descriptions, timestamps, subheaders |
| — | `--color-silver-dim` | `#536783` | Tertiary text, subtle badges, unselected icons |
| `--color-primary` | `--color-bronze` | `#21D5ED` | Electric Cyan; main brand highlight, CTAs, active pills |
| — | `--color-bronze-light` | `#5BE7FA` | Bright Cyan; hover states on primary buttons & links |
| — | `--color-bronze-dim` | `rgba(33, 213, 237, 0.12)` | Subtle glow fills for badges and active pills |
| `--color-border` / `--color-input` | `--color-bronze-border` | `#191D34` / `rgba(33, 213, 237, 0.25)` | Card borders, inputs, structural dividing lines |
| `--color-destructive` | — | `#EF4444` | Errors, warnings, destructive alerts |

#### Light Theme Palette (`html.light`)
| Token Name | Actual HEX / Value | Role / Usage |
| :--- | :--- | :--- |
| `--color-background` | `#F8FAFC` | Slate 50; crisp daylight canvas |
| `--color-card` | `#FFFFFF` | Pure white cards and panels |
| `--color-secondary` / `--color-muted`| `#F1F5F9` | Slate 100; subtle background fills |
| `--color-foreground` | `#0F172A` | Slate 900; deep ink text |
| `--color-muted-foreground` | `#475569` | Slate 600; readable secondary paragraphs |
| `--color-silver-dim` | `#64748B` | Slate 500; metadata and subtle icons |
| `--color-primary` | `#0284C7` | Sky 600; balanced daylight accent blue |
| `--color-primary-light` | `#0369A1` | Sky 700; hover states in light mode |
| `--color-border` / `--color-input` | `#CBD5E1` | Slate 300; soft card outlines and form inputs |

#### Category Color Spectrum (`categoryColors` in `src/data/articles.ts`)
Each knowledge discipline is attributed a distinct chromatic signature used in badges, borders, and ambient glow radials:

| Discipline / Category | Text Class | Border Class | Glow Value |
| :--- | :--- | :--- | :--- |
| **The Physical World** | `text-sky-400` | `border-sky-400/30` | `rgba(56, 189, 248, 0.12)` |
| **Matter & Molecules** | `text-emerald-400` | `border-emerald-400/30` | `rgba(52, 211, 153, 0.12)` |
| **Life & Nature** | `text-lime-400` | `border-lime-400/30` | `rgba(163, 230, 53, 0.12)` |
| **Mathematics** | `text-amber-400` | `border-amber-400/30` | `rgba(251, 191, 36, 0.12)` |
| **Philosophy** | `text-violet-400` | `border-violet-400/30` | `rgba(167, 139, 250, 0.12)` |
| **Innovation & Technology**| `text-slate-300` | `border-slate-400/30` | `rgba(148, 163, 184, 0.15)` |
| **Space & Cosmology** | `text-fuchsia-400` | `border-fuchsia-400/30` | `rgba(217, 70, 239, 0.15)` |
| **Humanity & Society** | `text-rose-400` | `border-rose-400/30` | `rgba(251, 113, 133, 0.12)` |
| **Arts & Expression** | `text-pink-400` | `border-pink-400/30` | `rgba(244, 114, 182, 0.15)` |

---

### B. Typography

The typography system combines an expressive, variable serif with high-legibility body sans and technical monospace:

1. **Heading & Display Font (`--font-heading`, `--font-display`):**
   - **Family:** `"Fraunces", Georgia, serif`
   - **Characteristics:** High-contrast, editorial optical-sizing serif (`opsz 9..144`). Used for section headlines, brand titles, quotation cards, and hero displays.
   - **Hierarchy:**
     - Hero Main Title: `text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight`
     - Section Headers: `text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight`
     - Card / Subtitles: `text-xl sm:text-2xl font-bold tracking-tight`
     - Category Eyebrows: `font-heading text-[9px] sm:text-[10px] font-semibold tracking-[3px] uppercase`

2. **Body & Interface Font (`--font-body`, `--font-sans`):**
   - **Family:** `"Inter", ui-sans-serif, system-ui, sans-serif`
   - **Weights:** Light (300) for long-form reading, Regular (400) for standard descriptions, Medium (500) and SemiBold (600) for interactive elements and labels.
   - **Characteristics:** Generous line heights (`leading-relaxed`, `leading-loose`), crisp rendering across dark surfaces.

3. **Technical & Metadata Font (`--font-mono`):**
   - **Family:** `"JetBrains Mono", ui-monospace, SFMono-Regular, monospace`
   - **Characteristics:** Precise tabular numerals, code blocks, issue tags (`ISSUE #02`), status badges, and mathematical symbol displays.

---

### C. Visual Textures, Gradients & Surface Effects

- **Fractal Noise Overlay:** Applied globally to `body::before` via an inline SVG data URI with `feTurbulence` (baseFrequency 0.75, opacity 0.018, z-index 9999, pointer-events none). Eliminates harsh digital banding and creates a tactile, print-like paper finish.
- **Celestial Particle Canvas (`AmbientBackground.tsx`):** Dynamic HTML5 canvas running at 60fps rendering 30–100 drifting stars that repel subtly from the cursor (`repulsionRadius: 110px`), with glowing connecting line webs when stars are within 120px. Includes floating rotating math symbols (`∑`, `∫`, `π`, `∞`, `e=mc²`, `Ĥ|Ψ⟩ = E|Ψ⟩`, `∇`).
- **Glassmorphism Panels (`.glass-panel`):**
  - Background: `rgba(12, 15, 29, 0.6)`
  - Backdrop filter: `blur(12px)`
  - Border: `1px solid rgba(33, 213, 237, 0.12)`
- **Glowing Cards (`.glowing-card`):**
  - Base shadow: `0 4px 20px rgba(0, 0, 0, 0.25)`
  - Hover transform: `translateY(-4px) scale(1.005)`
  - Hover shadow: `0 12px 24px rgba(33, 213, 237, 0.09)`
  - Hover border: `rgba(33, 213, 237, 0.35)`
- **Reading Progress Bar:** Fixed 3px horizontal bar pinned to top of screen with gradient `from-bronze via-cyan-500 to-bronze` tracking scroll percentage through long essays.

---

## 3. Layout System

### Page Structure & Composition
The site follows an architectural hierarchy that balances large thematic sections with clear vertical cadence:
1. **Global Fixed Navbar:** Frosted header (`backdrop-blur-md`), centered brand emblem with geometric astronomical linework, navigation links, and theme toggle button.
2. **Hero Stage:** ConstellationHeading with interactive particle disintegration, statistical ledger strip (`StatsStrip`), and primary invitation buttons.
3. **Alternating Thematic Sections:**
   - Vision & Manifesto (`VisionSection`)
   - About & Heritage (`AboutSection`)
   - Interactive Inquiry (`QuestionsSection`)
   - Discourse Forum (`DiscussionsSection`)
   - Library Showcase (`LibrarySection`)
   - Newsletter Enrollment (`NewsletterSection`)
   - Event Schedule (`EventsSection`)
   - Fellowship Application (`JoinSection`)
   - Supporters & Recognitions (`RecognitionSection`)
   - Leadership & Guild Council (`TeamSection`)
4. **Editorial Footer:** Multi-column navigation, institutional copyright, contact links, and motto: *"Think. Explore. Discover."*

### Spacing & Grid Metrics
- **Container Max-Widths:**
  - Hero & Full Widths: `max-w-7xl` (`1280px`)
  - Library & Archive Views: `max-w-6xl` (`1152px`)
  - Long-Form Reading / Articles: `max-w-3xl` (`768px`) for optimal typographical line length (65–85 characters per line).
  - Auth Modals & Forms: `max-w-md` (`448px`)
- **Spacing Units:**
  - Standard section vertical padding: `py-20 sm:py-28 lg:py-32`
  - Gap between section items: `gap-6` to `gap-8`
  - Horizontal page padding: `px-5 sm:px-8`

---

## 4. Components & Interaction

### Buttons
- **Primary Action Button:**
  - Classes: `bg-bronze hover:bg-bronze-light text-obsidian px-6 py-3 rounded-xl font-heading text-xs font-semibold tracking-widest uppercase transition-all shadow-md hover:shadow-lg shadow-bronze/10 hover:-translate-y-0.5`
- **Outline Action Button:**
  - Classes: `border border-bronze text-bronze hover:bg-bronze/10 px-6 py-3 rounded-xl font-heading text-xs font-semibold tracking-widest uppercase transition-all`
- **Ghost Action Button:**
  - Classes: `text-silver hover:bg-bronze-dim/20 px-4 py-2 rounded-xl text-xs font-heading tracking-widest uppercase transition-all`
- **Pill Badges:**
  - Classes: `inline-flex items-center gap-2 border border-bronze-border bg-bronze-dim px-4 py-1.5 rounded-full text-[10px] font-heading font-semibold tracking-[3px] uppercase text-bronze`

### Interactive Cards
1. **Constellation Heading (`ConstellationHeading.tsx`):**
   - Dual-layered text: bottom layer with transparent fill and stroke outline (`WebkitTextStroke: 1.2px`), top layer with solid fill.
   - A radial CSS mask at mouse coordinates conceals the solid top layer inside the cursor radius, revealing the outline layer beneath, while an HTML5 canvas plots drifting star particles connected by delicate constellation web lines.
2. **Typewriter Inquiry Card (`TypewriterQuestionCard.tsx`):**
   - Card intersection observer triggers an automated character-by-character typewriter effect at 24ms intervals with a pulsing cursor indicator.
   - Interactive flip icon (`RefreshCw`) rotates 180° on hover; clicking cycles to another question from the archives.
3. **3D Interactive Book (`FloatingBooksBackground.tsx`):**
   - Uses CSS 3D perspectives (`perspective: 1200px`, `transformStyle: preserve-3d`).
   - Mouse movement over the book dynamically tilts the spine along `rotateX` and `rotateY`.
   - Hover swings the front cover open to `rotateY(-135deg)` using an organic bezier curve (`cubic-bezier(0.2, 0.9, 0.2, 1)`), exposing the book title, author, and paper background inside.
4. **Quote Citation Pop-up Modal (`ArticleDetailPage`):**
   - Generates an academic quote card featuring the article excerpt, author signature, article reference ID, and one-click buttons to copy formatted citation text or shareable URL.

### Form Inputs & OTP Slots (`ui.tsx`)
- High-contrast inputs styled with `bg-obsidian-light/50 border border-bronze-border/20 rounded-xl px-4 py-3 text-silver text-sm placeholder:text-silver-dim/40`.
- Focusing triggers `border-bronze/50 ring-1 ring-bronze/30`.
- Segmented 6-slot OTP component (`InputOTP`, `InputOTPSlot`) with active slot ring animations for membership email verification.

---

## 5. Design Principles for Future Development

When extending or modifying the interface, all developers and AI agents must follow these immutable rules:

1. **Preserve the Celestial-Enlightenment Duality:** Never replace serif headings (`Fraunces`) with generic tech sans-serifs, and never replace the deep twilight canvas (`#070912`) with flat neutral gray (`#121212` or `#1f2937`).
2. **Maintain Color Token Semantics:** Always use CSS variable references (`var(--color-primary)`, `var(--color-background)`, or their Tailwind utility equivalents `bg-obsidian`, `text-silver`, `text-bronze`). Do not hardcode arbitrary hex values into inline styles unless driving dynamic canvas rendering.
3. **Honor Micro-Transitions:** Every interactive element must feature explicit transition curves (`duration-300`, `ease-out`, `hover:-translate-y-0.5`). Abrupt jumps or unstyled hover states violate the polished, ethereal feel of the site.
4. **Restraint Over Clutter:** Visual effects (canvas stars, constellation headings, floating books) must remain ambient and non-obtrusive (`pointer-events-none` on background layers, lightweight canvas calculations, cancellation of animation loops on unmount).
5. **Universal Math & Markdown Fidelity:** In library essays, always preserve KaTeX and Markdown rendering standards. Scientific formulas, proofs, and equations must render seamlessly in both dark and light modes.
