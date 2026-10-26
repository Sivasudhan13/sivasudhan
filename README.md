# Sivasudhan E — Interactive 3D Developer Portfolio

Official production-grade engineering portfolio and technical profile for **Sivasudhan E**, Software Developer & Technology Innovator.

[![Build Status](https://img.shields.io/badge/Build-Passing-emerald?style=flat-square)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square)](#)
[![React](https://img.shields.io/badge/React-19.x-cyan?style=flat-square)](#)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat-square)](#)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4-38bdf8?style=flat-square)](#)

---

## 1. Professional Identity & Profile

- **Full Name**: Sivasudhan E
- **Role**: Software Developer | Technology Innovator
- **Education**: B.Tech in Information Technology, RVS College of Engineering and Technology, Coimbatore (2023 – 2027, CGPA: 7.9 / 10)
- **Internship**: Full Stack MERN Developer Intern — ITBoomi Innovative Technology, Tirupur (3 Months, delivered 3 live/real-world projects)
- **Location**: Coimbatore & Tirupur, Tamil Nadu, India
- **Email**: [sivasudhanoffical@gmail.com](mailto:sivasudhanoffical@gmail.com)
- **LinkedIn**: [linkedin.com/in/sivasudhan-e-4470862a5](https://linkedin.com/in/sivasudhan-e-4470862a5)
- **GitHub**: [github.com/Sivasudhan13](https://github.com/Sivasudhan13)
- **Curriculum Vitae**: Stored in [`frontend/public/resume/Sivasudhan_E_Resume.pdf`](file:///e:/invoices/draft/sivasudhan-seo-port/frontend/public/resume/Sivasudhan_E_Resume.pdf)

---

## 2. Architecture & Tech Stack

This project is constructed with a modern, high-performance creative engineering stack:

| Layer | Technologies |
|---|---|
| **Core Framework** | React 19 + TypeScript + Vite |
| **Styling & Design System** | Tailwind CSS v3.4 + Custom Glassmorphism Tokens |
| **3D Graphics** | Three.js + `@react-three/fiber` + `@react-three/drei` (Digital Core & Drone Telemetry Node) |
| **Motion Choreography** | GSAP 3 + ScrollTrigger (Hero sequence) & Motion for React (`motion/react`) |
| **Routing** | React Router v7 (`/` Home, `/project/:id` Case Studies, `*` 404 handler) |
| **SEO & Schemas** | `react-helmet-async` + Schema.org JSON-LD (Person, WebSite, SoftwareApplication) |
| **Form Management** | React Hook Form + Zod validation + Honeypot spam protection |
| **Backend API** | Node.js + Express (Contact inquiry handling + `/api/health`) |

---

## 3. Project Directory Structure

```
sivasudhan-seo-port/
├── package.json                   # Root orchestrator scripts
├── README.md                      # Comprehensive documentation
├── Sivasudhan_E_Resume-1.pdf      # Original verified CV
│
├── frontend/                      # Client React + Vite Application
│   ├── public/
│   │   ├── resume/
│   │   │   └── Sivasudhan_E_Resume.pdf  # Downloadable & viewable CV
│   │   ├── favicon.svg            # Custom futuristic monogram favicon
│   │   ├── robots.txt             # Search crawler directives
│   │   └── sitemap.xml            # XML Sitemap with route priorities
│   ├── src/
│   │   ├── app/ & App.tsx         # Root routes & layout wrapper
│   │   ├── components/
│   │   │   ├── layout/            # Navbar, MobileMenu, Footer
│   │   │   ├── sections/          # Hero, About, Projects, Achievements, Skills, Journey, Contact
│   │   │   ├── three/             # HeroScene, DigitalCore, ParticleField, SceneFallback
│   │   │   ├── projects/          # ProjectCard, ProjectFilters
│   │   │   ├── achievements/      # AchievementCard, AchievementFilters
│   │   │   └── ui/                # Button, SectionHeading, Badge, Icons
│   │   ├── data/                  # Typed central content (profile, projects, achievements, skills, journey)
│   │   ├── hooks/                 # useActiveSection, useReducedMotion
│   │   ├── lib/                   # seo.ts, validation.ts
│   │   ├── pages/                 # HomePage, ProjectPage, NotFoundPage
│   │   └── types/                 # TypeScript interfaces
│   ├── index.html                 # Google fonts, viewport, meta tags, JSON-LD
│   ├── tailwind.config.js         # Palette, grid patterns, animations
│   └── vite.config.ts             # Dev proxy & Rollup chunk optimization
│
└── backend/                       # Express Contact & Health API Server
    ├── package.json
    └── server.js                  # POST /api/contact, GET /api/health
```

---

## 4. Getting Started Locally

### Prerequisites
- Node.js `v18+` or `v20+` or `v22+`
- npm `v9+` or `v10+` or `v11+`

### Installation & Running

From the root repository directory:

```bash
# Install root dependencies
npm run dev
```

Or run frontend and backend independently:

```bash
# 1. Start the Frontend (Vite dev server on http://localhost:5173)
cd frontend
npm install
npm run dev

# 2. In a separate terminal, start the Backend API (on http://localhost:5000)
cd backend
npm install
npm run dev
```

Open your browser at `http://localhost:5173` to experience the portfolio.

---

## 5. Production Build

To test and build the production bundle:

```bash
# From root
npm run build

# Or directly in frontend:
cd frontend
npm run build
npm run preview
```

The output bundle is generated in `frontend/dist/` with isolated vendor chunks for Three.js, GSAP/Motion, and React to ensure optimal Core Web Vitals.

---

## 6. Search Engine Optimization & Google Search Console Deployment

### Structured Data Verification
- **Person Schema**: Defines name, alumni status at RVS College of Engineering, job headline, and official `sameAs` social links.
- **WebSite Schema**: Declares the primary domain and authority.
- **SoftwareApplication Schema**: Renders rich project schema for each project detail route (`/project/:id`).

### Google Search Console Setup Steps
1. **Domain Verification**: Add your custom domain (e.g., `https://sivasudhan.dev`) to [Google Search Console](https://search.google.com/search-console). Select URL Prefix or DNS TXT verification.
2. **Submit XML Sitemap**: In Search Console, navigate to **Sitemaps** and submit `https://sivasudhan.dev/sitemap.xml`.
3. **Inspect URLs**: Use the **URL Inspection** tool to inspect `https://sivasudhan.dev/` and key project routes like `/project/mern-notes-app` to request initial indexing.
4. **Core Web Vitals Check**: After 7 days, review the **Page Experience** and **Core Web Vitals** tab to ensure LCP, INP, and CLS scores remain in the 'Good' threshold.

---

## 7. Deployment Instructions

### Deploy to Vercel
1. Push this repository to GitHub (`github.com/Sivasudhan13/portfolio`).
2. Import the project in Vercel.
3. Set the **Root Directory** to `frontend`.
4. Framework preset will automatically detect **Vite**.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect repository to Netlify.
2. Base directory: `frontend`.
3. Build command: `npm run build`.
4. Publish directory: `dist`.

---

## 8. License & Evidence Disclaimer

© 2026 Sivasudhan E. All verified projects, academic achievements, and codebases belong to their respective creators. No achievements or credentials have been fabricated.
