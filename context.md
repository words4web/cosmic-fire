# Cosmic Fire Solution — Project Context & Architectural Documentation

## 1. Project Overview

**Cosmic Fire Solution** is an enterprise-grade commercial fire protection engineering web platform serving London, Kent, and nationwide UK developments.

The platform follows a grounded, high-trust British commercial contractor aesthetic (inspired by leading UK industry benchmarks: Artius Fire, Fire Doors Kent, T7 Fire, London Fire Doors, and Jackson Fire & Security). It provides seamless, unified single-page architectural navigation with scannable photographic service cards, regulatory statutory pillars, active vs. passive protection breakdowns, real commercial sector portfolios, interactive FAQ accordions, and Zod-validated engineering consultation workflows.

### Key Highlights:

- **Single-Page Commercial Flow**: All core capabilities—Services Showcase, Why Cosmic Fire, Protection Layers, Blueprint Simulation, Industry Sectors, Engineering Technology Lifecycle, About Us, Client Reviews, FAQ, and Consultation Booking—are presented in a cohesive, smooth-scrolling homepage layout.
- **Strict Content Verbatim Integrity**: 100% of all customer copy, technical descriptions, headlines, addresses, phone numbers, and regulatory bullet points are strictly verified and preserved verbatim from structured data repositories.
- **Dual-Tier Commercial Navigation**: Top utility micro-strip featuring direct click-to-call phone callouts (`+44 (0) 20 7946 0991`), engineering dispatch emails, London & Kent operational coverage badges, and emergency response status, alongside a sticky primary navigation tier with instant quote trigger.
- **14 Core Services Showcase**: Filterable 3-column scannable grid with high-resolution equipment photography, category tabs (`All`, `Detection & Alarms`, `Active Suppression`, `Passive Protection`), live search filtering, and feature checklists.
- **Why Cosmic Fire & Layered Protection**: Editorial split-column layout with 6 numbered statutory pillars (`01`–`06`) and side-by-side comparison of 5 active systems vs. 9 passive protection systems.
- **6 Commercial Sectors**: Grounded commercial photography covering Office Buildings, Retail Premises, Hospitality Venues, Industrial Logistics Facilities, Healthcare & Care Homes, and Educational Campuses with key risk badges.
- **Interactive UK Compliance FAQ Accordion**: Clean expandable questions addressing compliance, survey bookings, maintenance intervals, and British Standards.
- **Lead Capture & Engineering Dispatch**: Zod-validated consultation form (`fullName`, `company`, `email`, `phone`, `location`, `serviceRequired`, `message`) paired with direct headquarters info, phone, email, and operating hours.
- **Unified Navigation Hook (`usePageNavigation`)**: Central routing and smooth-scrolling coordinator eliminating 404s and redundant subpage loads.

---

## 2. Technology Stack

- **Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript 5+ (`tsc`)
- **Bundler & Build Tool**: Vite 8 with `@vitejs/plugin-react` and `@generouted/react-router`
- **Styling**: Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`) with custom design tokens
- **Forms & Validation**: React Hook Form (`react-hook-form`) with Zod v4 resolver (`zod`, `@hookform/resolvers`)
- **Animation & Motion**: Motion / Framer Motion (`motion`)
- **3D & Vector Graphics**: Three.js (`three`, `@types/three`) and modular SVG canvases
- **Icons**: Lucide React (`lucide-react`)
- **Package Manager**: PNPM

---

## 3. Directory & File Structure

```text
cosmic-fire/
├── context.md                   # Complete architectural and project documentation
├── RESTRUCTURING_PLAN.md        # 6-phase UK visual elevation and restructuring roadmap
├── index.html                   # HTML entry point (loads Sora, Manrope, JetBrains Mono fonts)
├── package.json                 # Scripts and dependency declarations
├── pnpm-lock.yaml               # Deterministic dependency lockfile
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite configuration (plugins, aliases, bundle code-splitting)
├── public/                      # Static assets (logo.png, favicons)
└── src/
    ├── main.tsx                 # Application entry point & React DOM root mount
    ├── App.tsx                  # Master layout controller & global overlay provider
    ├── index.css                # Global CSS rules, custom keyframes, technical background grids
    │
    ├── types/                   # Domain-driven TypeScript type definitions
    │   ├── index.ts             # Central type export hub
    │   ├── about.ts             # Pillars, credentials, statistics types
    │   ├── blueprint.ts         # Zone & blueprint simulation types
    │   ├── company.ts           # Company contact & office info types
    │   ├── contact.ts           # Consultation form and quote types
    │   ├── faq.ts               # FAQ items and category types
    │   ├── footer.ts            # Footer links, compliance badges, columns
    │   ├── hotspot.ts           # 3D sensor hotspot & telemetry types
    │   ├── industry.ts          # Sector profiles & network coverage types
    │   ├── navigation.ts        # Page IDs and route types
    │   ├── service.ts           # Service items, disciplines, and feature types
    │   ├── technology.ts        # Lifecycle steps and pipeline types
    │   └── testimonial.ts       # Client review and testimonial types
    │
    ├── data/                    # Domain-driven central data repositories
    │   ├── about.ts             # About section pillars, milestones, and credentials
    │   ├── blueprint.ts         # Schematic zones, sensors, and telemetry scenarios
    │   ├── company.ts           # Shared office addresses, phone numbers, and emails
    │   ├── constants.ts         # Global fallback constants & NAV_ITEMS
    │   ├── faq.ts               # Frequently asked questions list
    │   ├── footer.ts            # Site links, legal notices, and compliance credentials
    │   ├── hero.ts              # Hero banner copy, highlights, and solution ticker
    │   ├── industries.ts        # Multi-site coverage copy, 6 sector cards, and photo assets
    │   ├── layers.ts            # Active (5 items) and Passive (9 items) fire engineering systems
    │   ├── services.ts          # 14 core fire protection services with photographic assets
    │   ├── technology.ts        # Detect. Alert. Respond. 4-stage engineering lifecycle data
    │   ├── testimonials.ts      # Verbatim client reviews and ratings
    │   └── whyUs.ts             # Why Choose Cosmic Fire & 6 premises protection pillars
    │
    ├── hooks/
    │   └── usePageNavigation.ts # Centralized page navigation, URL hash sync, and smooth scrolling
    │
    ├── pages/                   # File-based route views (generouted)
    │   ├── index.tsx            # Complete Single-Page Commercial Portal
    │   └── [...all].tsx         # 404 / Catch-all fallback route
    │
    ├── validations/
    │   └── consultationSchema.ts# Zod validation schema for engineering consultations
    │
    └── components/              # Modular UI and interactive components
        ├── Navbar.tsx           # Dual-tier commercial navigation with phone callouts and mobile drawer
        ├── HeroSection.tsx      # Clean architectural hero with verified highlights and action pills
        ├── WhyCosmicFire.tsx    # Editorial 2-column split with 6 numbered statutory pillars
        ├── ProtectionLayers.tsx # Active (5 items) vs Passive (9 items) comparative system cards
        ├── ServicesShowcase.tsx # 14 scannable service cards with photos, filters, and search
        ├── CinematicBanner.tsx  # Architectural safety infrastructure banner
        ├── InteractiveBlueprint.tsx # Interactive 2D schematic floorplan with alarm simulator
        ├── IndustriesSection.tsx# 6 commercial sector photographic cards with risk badges
        ├── TechnologyFlow.tsx   # 4-Stage engineering pipeline: Understand, Detect, Alert, Respond
        ├── AboutSection.tsx     # 4 Core engineering pillars (Vision, Mission, Approach, Support)
        ├── TestimonialsSection.tsx # Verified commercial client review cards with 5-star ratings
        ├── FaqSection.tsx       # Interactive 4-question UK compliance accordion
        ├── ContactSection.tsx   # 2-Column engineering consultation office and quote form
        ├── ContactOfficeInfo.tsx# Reusable office location, dispatch phone, email, and hours
        ├── ConsultationForm.tsx # Lead capture form with real-time Zod validation
        ├── Footer.tsx           # 4-Column commercial footer with monitoring status and credits
        ├── HeroBuilding3D.tsx   # Three.js 3D isometric tower with interactive sensor nodes
        ├── HotspotModal.tsx     # Sensor inspection modal with real-time specs & telemetry
        ├── common/              # Reusable UI atoms (FormInput, InfoItem, SectionBadge, etc.)
        └── graphics/            # SVG graphic canvases (e.g. BlueprintSvgCanvas)
```

---

## 4. Key Page Sections & Component Mapping

| Section / Component      | File Location                                                                                                                     | Key Capabilities & Verbatim Content                                                                                                                                                                                                                                   |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dual-Tier Navbar**     | [`src/components/Navbar.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/Navbar.tsx)                           | Utility micro-bar (`+44 (0) 20 7946 0991`, `engineering@cosmicfire.co.uk`, London & Kent coverage), logo, desktop pill navigation (`Protection`, `Solutions`, `Industries`, `Technology`, `About`, `Contact`), mobile slide-out drawer, and `REQUEST A QUOTE` button. |
| **Hero Section**         | [`src/components/HeroSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/HeroSection.tsx)                 | Architectural photo backdrop, verified highlights ticker, emergency response badge, dual action pills (`Explore Our Solutions`, `Talk to an Expert`), and 3D simulation toggle.                                                                                       |
| **Why Cosmic Fire**      | [`src/components/WhyCosmicFire.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/WhyCosmicFire.tsx)             | Editorial split layout: certified installation showcase paired with 6 numbered statutory pillars (`01`–`06`) detailing British Standards compliance.                                                                                                                  |
| **Protection Layers**    | [`src/components/ProtectionLayers.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/ProtectionLayers.tsx)       | Comparative cards distinguishing 5 Active Systems (Sprinklers, Alarms, Extinguishers) from 9 Passive Systems (Fire Doors, Cavity Barriers, Intumescent Coatings).                                                                                                     |
| **Services Showcase**    | [`src/components/ServicesShowcase.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/ServicesShowcase.tsx)       | 14 core fire protection service cards with high-res photography, category filter tabs, keyword search bar, and benefit checkmarks.                                                                                                                                    |
| **Cinematic Banner**     | [`src/components/CinematicBanner.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/CinematicBanner.tsx)         | Architectural cutaway banner highlighting bespoke system design, evacuation matrices, and key technical response metrics.                                                                                                                                             |
| **Industries Section**   | [`src/components/IndustriesSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/IndustriesSection.tsx)     | 6 photographic commercial sector cards (Offices, Retail, Hospitality, Logistics, Healthcare, Education) with risk tags.                                                                                                                                               |
| **Technology Flow**      | [`src/components/TechnologyFlow.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/TechnologyFlow.tsx)           | 4-Stage engineering pipeline: Understand Risk, Detect Early, Alert Clearly, and Respond Safely with detailed stage checklists.                                                                                                                                        |
| **About Section**        | [`src/components/AboutSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/AboutSection.tsx)               | 4 Core pillars (Vision, Mission, Approach, Support) and company history overview.                                                                                                                                                                                     |
| **Testimonials Section** | [`src/components/TestimonialsSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/TestimonialsSection.tsx) | High-trust quote cards with 5-star badges and client sector identifications.                                                                                                                                                                                          |
| **FAQ Section**          | [`src/components/FaqSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/FaqSection.tsx)                   | Expandable 4-question UK compliance accordion with zero layout shift.                                                                                                                                                                                                 |
| **Contact Section**      | [`src/components/ContactSection.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/ContactSection.tsx)           | 2-Column split: left column houses direct dispatch office details, phone, email, and operating hours; right column hosts the consultation form.                                                                                                                       |
| **Consultation Form**    | [`src/components/ConsultationForm.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/ConsultationForm.tsx)       | Interactive quote request form with real-time Zod validation and immediate feedback states.                                                                                                                                                                           |
| **Footer**               | [`src/components/Footer.tsx`](file:///home/mazahir/projects/work/cosmic-fire/src/components/Footer.tsx)                           | 4-Column commercial footer with index links, core systems list, 24/7 monitoring center status, scroll-to-top button, and Words4Web design credit.                                                                                                                     |

---

## 5. Navigation & Routing Architecture

All navigational items (in the Navbar, sub-hero buttons, hero ticker, and Footer) route through [`usePageNavigation`](file:///home/mazahir/projects/work/cosmic-fire/src/hooks/usePageNavigation.ts).

Because all sections are integrated directly onto the homepage, requests for specific sections smoothly scroll directly to the corresponding DOM element without triggering route reloads or 404s:

- `protection` ➔ `#protection-layers`
- `solutions` ➔ `#services-section`
- `industries` ➔ `#industries-section`
- `technology` ➔ `#technology-section`
- `about` ➔ `#about-section`
- `faq` ➔ `#faq-section`
- `contact` ➔ `#contact-section`
- `home` ➔ window scrolls to top (`0, 0`)

---

## 6. Build & Quality Verification

| Command        | Action                                                                |
| :------------- | :-------------------------------------------------------------------- |
| `pnpm dev`     | Starts the local Vite development server on `http://localhost:3000`   |
| `pnpm build`   | Compiles TypeScript and builds optimized production bundle in `dist/` |
| `pnpm preview` | Previews the local production build                                   |
| `tsc --noEmit` | Validates strict TypeScript compilation with zero type errors         |
