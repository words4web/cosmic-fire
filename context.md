# Cosmic Fire Solution — Project Context & Architectural Documentation

## 1. Project Overview

**Cosmic Fire Solution** is an enterprise-grade commercial fire protection engineering web platform serving London, Kent, and nationwide UK developments.

The platform follows a grounded, high-trust British commercial contractor aesthetic (inspired by leading UK industry benchmarks: Artius Fire, Fire Doors Kent, T7 Fire, London Fire Doors, and Jackson Fire & Security). It provides unified architectural navigation with an interactive Hero consultation quote form, dynamic slug-based service showcase pages, regulatory statutory pillars, an interactive FAQ accordion, comprehensive SEO metadata, automated XML sitemaps, and Zod-validated engineering consultation workflows.

### Key Highlights:

- **Hero Quote Form Integration**: The primary engineering consultation form is embedded directly into the Hero section with live ambient lighting animations, clean form fields (no asterisks), and a prominent `"GET A FREE QUOTE"` call-to-action bar with phone contact (`+44 (0) 20 7946 0991`).
- **London Fire Doors Service Hierarchy**: Adopts a streamlined services hierarchy (Fire Safety Inspection, Fire Protection Installation, Fire Maintenance & Servicing, Fire Doors & Screens, Fire Curtains, Cavity Fire Barriers, Penetration Sealing, Intumescent Coatings, and Extinguisher Servicing).
- **Dynamic Service Detail Pages (`/services/:id`)**: Dedicated dynamic detail pages featuring photographic headers, statutory checklists, compliance badges, direct consultation dispatch triggers, and full SEO metadata.
- **Strict Content Verbatim Integrity**: 100% of customer copy, technical descriptions, headlines, addresses, phone numbers, and regulatory bullet points are strictly verified and preserved verbatim from structured data repositories.
- **Dual-Tier Commercial Navigation**: Top utility micro-strip featuring direct click-to-call phone callouts (`+44 (0) 20 7946 0991`), engineering dispatch emails, London & Kent operational coverage badges, and 24/7 support status, alongside a sticky primary navigation tier with dropdown services menu and mobile slide-out drawer.
- **Comprehensive SEO Infrastructure**:
  - Exact meta titles and meta descriptions provided for Home (`/`), About (`/about`), and all individual `/services/:id` routes.
  - Dynamic `useSEO` React hook updating `document.title`, `<meta name="description">`, and OpenGraph tags per page.
  - Automated XML sitemap generation (`scripts/generate-sitemap.ts`) targeting `https://www.cosmicfiresolutions.co.uk`.
  - Crawler configuration via `public/robots.txt`.
  - Accessible, keyword-rich `alt` attributes on all image elements.
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
│       ├── why-us/              # WebP images for Why Cosmic Fire statutory pillars
│       └── services/            # WebP images for Core Services
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
    │   ├── constants.ts         # Global fallback constants & NAV_ITEMS
    │   ├── faq.ts               # Frequently asked questions list
    │   ├── footer.ts            # Site links, legal notices, and compliance credentials
    │   ├── hero.ts              # Hero banner copy and highlights
    │   ├── services.ts          # Core fire protection services with SEO metadata & WebP assets
    │   ├── testimonials.ts      # Verbatim client reviews and ratings
    │   └── whyUs.ts             # Why Choose Cosmic Fire & 6 premises protection pillars
    │
    ├── hooks/
    │   ├── usePageNavigation.ts # Centralized page navigation and smooth scrolling
    │   └── useSEO.ts            # Dynamic document.title and OpenGraph meta updater
    │
    ├── pages/                   # File-based route views
    │   ├── index.tsx            # Homepage with Hero Query Form, Why Us, Testimonials
    │   ├── about.tsx            # Dedicated About page with Engineering Consultation Office
    │   ├── faq.tsx              # Interactive FAQ page
    │   ├── services/
    │   │   └── [id].tsx         # Dynamic service detail page with SEO and photo header
    │   └── [...all].tsx         # 404 / Catch-all fallback route
    │
    ├── validations/
    │   └── consultationSchema.ts# Zod validation schema for engineering consultations
    │
    └── components/              # Modular UI and interactive components
        ├── Navbar.tsx           # Dual-tier commercial navigation with services dropdown & mobile drawer
        ├── HeroSection.tsx      # Video hero with integrated ConsultationForm & call CTAs
        ├── ConsultationForm.tsx # Lead capture form with animated glowing borders & real-time Zod validation
        ├── WhyCosmicFire.tsx    # Editorial 2-column split with 6 3D flip cards & inspection video
        ├── CinematicBanner.tsx  # Architectural safety infrastructure banner
        ├── AboutSection.tsx     # Engineering Consultation Office details & core company pillars
        ├── TestimonialsSection.tsx # Verified commercial client review cards
        ├── FaqSection.tsx       # Interactive UK compliance accordion
        ├── ServiceCard.tsx      # Service card component with WebP images and tags
        ├── Footer.tsx           # 4-Column commercial footer with 24/7 monitoring status
        └── common/              # Reusable UI atoms (FormInput, SectionBadge, etc.)
```

---

## 4. Key Page Sections & Component Mapping

| Section / Component | File Location | Key Capabilities & Verbatim Content |
| :--- | :--- | :--- |
| **Dual-Tier Navbar** | [`src/components/Navbar.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/Navbar.tsx) | Utility micro-bar (`+44 (0) 20 7946 0991`, `engineering@cosmicfire.co.uk`, London & Kent coverage), logo, desktop pill navigation (`Home`, `Services` dropdown, `About`), mobile slide-out drawer, and `GET A FREE QUOTE` button. |
| **Hero Section** | [`src/components/HeroSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/HeroSection.tsx) | Streaming video background (`hero-firefighters.mp4`), shiny white typography, dual action CTA pill (`Get a Free Quote` anchor + phone callout), and embedded `ConsultationForm`. |
| **Consultation Form** | [`src/components/ConsultationForm.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/ConsultationForm.tsx) | Interactive quote request form with rotating conic halo animation, breathing glow, clean input styling without asterisks, and real-time Zod validation. |
| **Why Cosmic Fire** | [`src/components/WhyCosmicFire.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/WhyCosmicFire.tsx) | Certified engineer inspection video (`why-choose-us.mp4`) paired with 6 3D-flipping statutory pillar cards backed by local WebP imagery and keyword-rich alt text. |
| **Dynamic Service Detail** | [`src/pages/services/[id].tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/pages/services/[id].tsx) | Slug-based service showcase with photographic header, full metadata integration via `useSEO`, highlights, and direct enquiry dispatch. |
| **About Us Section** | [`src/components/AboutSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/AboutSection.tsx) | Relocated Engineering Consultation Office info (direct phone, address, 24/7 response status) with verbatim copy and core company pillars. |
| **Cinematic Banner** | [`src/components/CinematicBanner.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/CinematicBanner.tsx) | Architectural safety cutaway banner highlighting bespoke system design and evacuation matrices. |
| **Testimonials Section** | [`src/components/TestimonialsSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/TestimonialsSection.tsx) | High-trust quote cards with 5-star badges and client sector identifications. |
| **FAQ Section** | [`src/components/FaqSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/FaqSection.tsx) | Expandable UK compliance accordion with zero layout shift. |
| **Footer** | [`src/components/Footer.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/Footer.tsx) | 4-Column commercial footer with index links, 24/7 monitoring center status, scroll-to-top button, and Words4Web credit. |

---

## 5. SEO & Metadata Architecture

1. **Canonical Host**: `https://www.cosmicfiresolutions.co.uk`
2. **Robots Directives (`public/robots.txt`)**:
   ```txt
   User-agent: *
   Allow: /
   Disallow: /api/

   Sitemap: https://www.cosmicfiresolutions.co.uk/sitemap.xml
   ```
3. **Automated XML Sitemap**: Generated via `scripts/generate-sitemap.ts` as a pre-build step (`pnpm sitemap`), pulling all static and dynamic service routes.
4. **Per-Route Metadata**: Managed by `useSEO` hook:
   - **Home (`/`)**: *"Fire Prevention & Protection | Cosmic Fire Solutions"*
   - **About (`/about`)**: *"About Cosmic Fire | Commercial Fire Protection Engineers UK"*
   - **Services (`/services/:id`)**: Custom titles and descriptions per service discipline.
5. **Accessibility**: All `<img>` tags have descriptive, contextual `alt` tags.

---

## 6. Build & Quality Verification

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts local Vite development server on `http://localhost:3000` |
| `pnpm sitemap` | Regenerates `public/sitemap.xml` with current routes and dates |
| `pnpm build` | Executes `pnpm sitemap` followed by `vite build` into `dist/` |
| `pnpm preview` | Previews the local production build |
| `pnpm lint` | Validates strict TypeScript compilation (`tsc --noEmit`) |
