# Cosmic Fire Solution — Project Context & Architectural Documentation

## 1. Project Overview

**Cosmic Fire Solution** is an enterprise-grade commercial fire protection engineering web platform serving London, Kent, and nationwide UK developments.

The platform follows a grounded, high-trust British commercial contractor aesthetic (inspired by leading UK industry benchmarks: Artius Fire, Fire Doors Kent, T7 Fire, London Fire Doors, and Jackson Fire & Security). It provides unified architectural navigation with an interactive Hero consultation quote form, dynamic slug-based service showcase pages, regulatory statutory pillars, an interactive FAQ accordion, comprehensive SEO & social sharing metadata, automated XML sitemaps, and Zod-validated engineering consultation workflows.

### Key Highlights:

- **Hero Quote Form Integration**: The primary engineering consultation form is embedded directly into the Hero section with live ambient lighting animations, clean form fields (no asterisks), and a prominent `"GET A FREE QUOTE"` call-to-action bar with phone contact (`+44 7432 576606`).
- **Services Hierarchy & Navigation**:
  1. **Fire Door Inspections** (`/services/fire-door-inspections`) — Fully certified multi-point assessments, surveys, and annual compliance certification.
  2. **Fire Door Installation** (`/services/fire-door-installation`) — Certified installations by qualified carpenters with tested third-party hardware.
  3. **Fire Door Maintenance** (`/services/fire-door-maintenance`) — Planned statutory servicing under the Regulatory Reform (Fire Safety) Order to preserve certification cost-effectively.
  4. **Fire Stopping** (`/services/fire-stopping`) — Sealing service breaches and penetration openings around pipes, cables, and ducts to maintain compartmentation.
  5. **Fire Door Manufacturing** (`/services/fire-door-manufacturing`) — Bespoke FD30–FD240 timber and up to 54dB acoustic fire doors and glazed screens.
  6. **Steel Doors** (`/services/steel-doors`) — Heavy-duty 4-hour rated industrial and commercial steel fire exit doors with certified ironmongery.
  7. **Fire Curtains** (`/services/fire-curtains`) — Automatic gravity fail-safe deployable curtains containing fire and smoke across open-plan atriums.
  8. **Intumescent Coatings** (`/services/intumescent-coatings`) — Fire-retardant structural steel paint systems providing up to 120 minutes fire resistance.
  9. **Fire Barriers** (`/services/fire-barriers`) — Ventilated and solid fire barriers preventing hidden fire spread in ceiling and wall voids.
  10. **Air Sealing** (`/services/air-sealing`) — Airtightness and acoustic sealing preventing draft-driven fire spread while meeting UK Building Regulations Part L2.
- **Dynamic Service Detail Pages (`/services/:id`)**: Mobile-responsive showcase featuring custom badges, taglines, concise descriptions, direct "Get an Estimate" & "Call Us" CTAs, verified compliance checklists, and an "Other Certified Services" discovery carousel.
- **Full Social Sharing & SEO Infrastructure**:
  - Dynamically updates `<title>`, `<meta name="description">`, `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:image">`, and `<meta name="twitter:image">` per page via the `useSEO` hook.
  - Automatically resolves full canonical URLs (`https://www.cosmicfiresolutions.co.uk/...`) so sharing previews render social cards on Twitter/X, LinkedIn, WhatsApp, and Facebook.
  - Automated XML sitemap generation (`scripts/generate-sitemap.ts`) including static pages and all 6 dynamic service routes.
  - Crawler configuration via `public/robots.txt`.
- **Why Choose Us Section**: Clean 2-column header with inspection video preview, with 6 full-bleed photographic WebP cards at the bottom featuring two-tone logo gradient icons (`#FC7A21` to `#044FB7`) and direct "Explore Service" navigation.
- **Dark Theme Footer**: Full-width obsidian navy footer (`#080D1A`) with dot-matrix overlay, complete responsive grid, direct phone/email touchpoints, 24/7 monitoring center indicator, and smooth scroll-to-top button.
- **Lead Capture & Engineering Dispatch**: Zod-validated consultation form (`fullName`, `company`, `businessEmail`, `ukPhone`, `facilityLocation`, `serviceRequired`, `projectScope`) with real-time validation and animated submission feedback.

---

## 2. Technology Stack

- **Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript 5+ (`tsc`)
- **Bundler & Build Tool**: Vite 8 with `@vitejs/plugin-react` and file-based routing (`@generouted/react-router`)
- **Routing**: React Router DOM v7 (`react-router-dom`)
- **Styling**: Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`) with custom design tokens
- **Forms & Validation**: React Hook Form (`react-hook-form`) with Zod v4 resolver (`zod`, `@hookform/resolvers`)
- **Animation & Motion**: Motion / Framer Motion (`motion`)
- **Icons**: Lucide React (`lucide-react`)
- **Package Manager**: PNPM
- **Automation Scripts**: Node.js automated sitemap generation script (`scripts/generate-sitemap.ts`)

---

## 3. Directory & File Structure

```text
cosmic-fire/
├── context.md                   # Complete architectural and project documentation
├── content.md                   # London Fire Doors reference copy and benchmark content
├── index.html                   # HTML entry point (canonical tags, SEO meta, font links)
├── package.json                 # Scripts (dev, build with sitemap, preview, lint)
├── pnpm-lock.yaml               # Deterministic dependency lockfile
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite configuration (plugins, aliases, bundle code-splitting)
├── scripts/
│   └── generate-sitemap.ts      # Automated sitemap.xml generator scanning data routes
├── public/                      # Static web assets
│   ├── logo.png                 # Brand logo
│   ├── robots.txt               # Crawler directives and sitemap URL
│   ├── sitemap.xml              # Auto-generated XML sitemap
│   ├── videos/                  # Optimized web videos & posters
│   │   ├── hero-firefighters.mp4         # Compressed H.264 hero background loop
│   │   ├── hero-firefighters-poster.jpg  # Hero video poster fallback frame
│   │   ├── why-choose-us.mp4             # Compressed H.264 engineering inspection loop
│   │   └── why-choose-us-poster.jpg      # Why Choose Us poster fallback frame
│   └── images/                  # Converted & optimized WebP assets
│       ├── about/               # WebP images for sector applications (NHS, Corporate, Towers, Schools)
│       └── services/            # Custom photorealistic WebP images for the 6 core services:
│           ├── fire-door-inspections.webp
│           ├── fire-door-installation.webp
│           ├── fire-door-maintenance.webp
│           ├── fire-stopping.webp
│           ├── fire-door-manufacturing.webp
│           └── steel-doors.webp
└── src/
    ├── main.tsx                 # Application entry point & React DOM root mount
    ├── App.tsx                  # Master layout controller (Navbar, Page router, Footer)
    ├── index.css                # Global CSS rules, custom keyframes, halo animations
    │
    ├── types/                   # Domain-driven TypeScript type definitions
    │   ├── index.ts             # Central type export hub
    │   ├── about.ts             # Pillars, credentials, statistics types
    │   ├── company.ts           # Company contact & office info types
    │   ├── contact.ts           # Consultation form and quote types
    │   ├── faq.ts               # FAQ items and category types
    │   ├── footer.ts            # Footer links, compliance badges, columns
    │   ├── navigation.ts        # Page IDs and route types
    │   ├── service.ts           # Service items, SEO titles/descriptions, and image types
    │   └── testimonial.ts       # Client review and testimonial types
    │
    ├── data/                    # Domain-driven central data repositories
    │   ├── about.ts             # About section pillars and Engineering Consultation Office data
    │   ├── company.ts           # Shared office addresses, phone numbers, and emails
    │   ├── constants.ts         # Global navigation items & CONSULTATION_SERVICES dropdown options
    │   ├── faq.ts               # Frequently asked questions list
    │   ├── footer.ts            # Site links, legal notices, and compliance credentials
    │   ├── hero.ts              # Hero banner copy and highlights
    │   ├── services.ts          # 6 Core fire protection services with SEO metadata & WebP assets
    │   ├── testimonials.ts      # Verbatim client reviews and ratings
    │   └── whyUs.ts             # Why Choose Cosmic Fire pillars mapped to the 6 core services
    │
    ├── hooks/
    │   ├── usePageNavigation.ts # Centralized page navigation, path support, and smooth scrolling
    │   └── useSEO.ts            # Dynamic document.title, OpenGraph, and Twitter image meta updater
    │
    ├── pages/                   # File-based route views
    │   ├── index.tsx            # Homepage with Hero Query Form, Why Us, Testimonials
    │   ├── about.tsx            # Dedicated About page with sector case cards
    │   ├── faq.tsx              # Interactive FAQ page
    │   ├── services/
    │   │   └── [id].tsx         # Dynamic mobile-responsive service detail page
    │   └── [...all].tsx         # 404 / Catch-all fallback route
    │
    ├── validations/
    │   └── consultationSchema.ts# Zod validation schema for engineering consultations
    │
    └── components/              # Modular UI and interactive components
        ├── Navbar.tsx           # Dual-tier commercial navigation with services dropdown & mobile drawer
        ├── HeroSection.tsx      # Video hero with integrated ConsultationForm & Call Us CTAs
        ├── ConsultationForm.tsx # Lead capture form with animated glowing borders & real-time Zod validation
        ├── WhyCosmicFire.tsx    # Responsive header + 6 full-bleed service cards with direct links
        ├── CinematicBanner.tsx  # Architectural safety infrastructure banner
        ├── AboutSection.tsx     # Engineering Consultation Office details & core company pillars
        ├── TestimonialsSection.tsx # Verified commercial client review cards
        ├── FaqSection.tsx       # Interactive UK compliance accordion
        ├── ServiceCard.tsx      # Reusable service card component with WebP images and tags
        ├── Footer.tsx           # Obsidian dark footer with 24/7 monitoring status and TOP button
        └── common/              # Reusable UI atoms (ConsultationCtaBanner, FormInput, etc.)
```

---

## 4. Key Page Sections & Component Mapping

| Section / Component | File Location | Key Capabilities & Verbatim Content |
| :--- | :--- | :--- |
| **Dual-Tier Navbar** | [`src/components/Navbar.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/Navbar.tsx) | Top utility bar (`Call Us`, `info@cosmicfire.co.uk`, London & Kent coverage), logo, desktop pill navigation (`Home`, `Services` dropdown with all 6 categories, `About`), mobile slide-out drawer, and `GET A FREE QUOTE` button. |
| **Hero Section** | [`src/components/HeroSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/HeroSection.tsx) | Streaming video background (`hero-firefighters.mp4`), dual action CTA pill (`Get a Free Quote` anchor + `Call Us` callout), and embedded `ConsultationForm`. |
| **Consultation Form** | [`src/components/ConsultationForm.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/ConsultationForm.tsx) | Interactive quote request form with rotating conic halo animation, breathing glow, clean input styling without asterisks, and real-time Zod validation. |
| **Why Cosmic Fire** | [`src/components/WhyCosmicFire.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/WhyCosmicFire.tsx) | Video preview (`why-choose-us.mp4`) in header paired with 6 full-bleed photographic service cards at the bottom, featuring two-tone logo gradient icons (`#FC7A21` to `#044FB7`) and direct `Explore Service` link buttons. |
| **Dynamic Service Detail** | [`src/pages/services/[id].tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/pages/services/[id].tsx) | Mobile-responsive service showcase with photographic header, full metadata integration via `useSEO`, social share image tags, 4-point compliance checklist, and related services discovery carousel. |
| **About Us Section** | [`src/components/AboutSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/AboutSection.tsx) | Engineering Consultation Office info with sector case cards (NHS & Healthcare, Corporate Offices, Commercial Towers, Education Campuses). |
| **Cinematic Banner** | [`src/components/CinematicBanner.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/CinematicBanner.tsx) | Architectural safety cutaway banner highlighting bespoke system design and evacuation matrices. |
| **Testimonials Section** | [`src/components/TestimonialsSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/TestimonialsSection.tsx) | High-trust quote cards with 5-star badges and client sector identifications. |
| **FAQ Section** | [`src/components/FaqSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/FaqSection.tsx) | Expandable UK compliance accordion with zero layout shift. |
| **Footer** | [`src/components/Footer.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/Footer.tsx) | Obsidian dark footer (`#080D1A`) with dot-matrix overlay, responsive 12-col grid, index links targeting `#why-cosmic-fire`, 24/7 monitoring center status, scroll-to-top button, and Words4Web credit. |

---

## 5. SEO & Social Sharing Architecture

1. **Canonical Host**: `https://www.cosmicfiresolutions.co.uk`
2. **Robots Directives (`public/robots.txt`)**:
   ```txt
   User-agent: *
   Allow: /
   Disallow: /api/

   Sitemap: https://www.cosmicfiresolutions.co.uk/sitemap.xml
   ```
3. **Automated XML Sitemap**: Generated via `scripts/generate-sitemap.ts` as a pre-build step (`pnpm sitemap`), pulling all static routes and dynamic service routes.
4. **Per-Route Metadata & Social Sharing**: Managed dynamically by `useSEO` hook:
   - **Home (`/`)**: Title, description, and `og:image` pointing to brand logo.
   - **About (`/about`)**: Title, description, and `og:image`.
   - **FAQ (`/faq`)**: Title, description, and `og:image`.
   - **Services (`/services/:id`)**: Custom meta title, description, and the dedicated full-resolution WebP service image for each of the 6 disciplines.
5. **OpenGraph & Twitter Card Tags**:
   - `og:title`, `og:description`, `og:image`, `og:url`, `og:type` (`website`), `og:site_name`
   - `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`
6. **Accessibility**: All `<img>` tags have descriptive, contextual `alt` tags.

---

## 6. Build & Quality Verification

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts local Vite development server on `http://localhost:3000` |
| `pnpm sitemap` | Regenerates `public/sitemap.xml` with current routes and dates |
| `pnpm build` | Executes `pnpm sitemap` followed by `vite build` into `dist/` |
| `pnpm preview` | Previews the local production build |
| `pnpm lint` | Validates strict TypeScript compilation (`tsc --noEmit`) |
