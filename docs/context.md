# Project Context: Pankaj Shrivastava's Portfolio

## 1. Executive Summary & Purpose
This repository houses the personal portfolio and digital notebook for **Pankaj Shrivastava**—a Full-Stack Developer, AI Engineering Analyst, and Product Management Fellow. The website serves as a high-impact interactive resume, showcase of featured projects, case studies, career timeline, and an editorial **PM Notebook** driven by a headless CMS (Contentful).

The portfolio is evolving from a conventional minimalist corporate layout into a **warm, neo-groovy, hand-drawn "doodle" sketchbook aesthetic** while rigorously maintaining all existing functionality, accessibility, and navigation structures.

---

## 2. Technology Stack & Dependencies

| Layer | Technology | Details / Version |
| :--- | :--- | :--- |
| **Runtime & Core** | React 18 & ReactDOM | `18.2.0` |
| **Build & Tooling** | Vite | `^5.0.0` with `@vitejs/plugin-react` |
| **Routing** | React Router DOM | `^7.16.0` (`BrowserRouter` with `BASE_URL` support) |
| **Styling** | Tailwind CSS & PostCSS | Tailwind `^3.4.8`, PostCSS `^8.4.0`, Autoprefixer `^10.4.0` |
| **Typography** | `@tailwindcss/typography` | `^0.5.19` (prose customization for rich text articles) |
| **CMS Integration** | Contentful Delivery API | `@contentful/rich-text-react-renderer` (`^16.2.1`), `@contentful/rich-text-types` (`^17.2.7`) |
| **Deployment** | GitHub Pages & Actions | Deploy target: `gh-pages` branch via Vite base-aware builds |

---

## 3. Architecture & Directory Tree

```
my-portfolio-project/
├── .env                       # Contentful Space ID & Delivery Access Token
├── .github/workflows/         # CI/CD deployment workflow to GitHub Pages
├── index.html                 # Vite HTML entry point (title, viewport, favicon)
├── package.json               # Project manifest, scripts, and dependencies
├── postcss.config.cjs         # PostCSS plugins configuration (Tailwind, Autoprefixer)
├── tailwind.config.cjs        # Tailwind theme extensions & typography prose rules
├── vite.config.js             # Vite configuration with React plugin
├── public/
│   ├── favicon.svg            # Site favicon
│   ├── fonts/                 # Locally hosted WOFF2 fonts (Epilogue, Mulish)
│   └── images/                # Asset storage (profile photos, logos, project thumbnails)
│       ├── linkedin.svg
│       ├── profile.jpg
│       └── smartdine.png
├── scripts/
│   └── download-fonts.js      # Utility script downloading Google WebFonts locally
└── src/
    ├── App.jsx                # Main application wrapper, router, and home page view
    ├── main.jsx               # React 18 DOM mount point
    ├── index.css              # Global styles, font-face rules, Tailwind directives
    ├── utils/
    │   └── loadOptionalCss.js # Dynamic CSS loader fallback
    └── components/
        ├── Header.jsx         # Sticky header with branding, desktop nav, and mobile drawer
        ├── Hero.jsx           # Hero introduction, avatar, bio paragraphs, and LinkedIn link
        ├── Timeline.jsx       # Interactive career and education milestone ladder with tooltips
        ├── Footer.jsx         # Simple footer copyright bar
        ├── LinkedInIcon.jsx   # LinkedIn vector icon
        ├── caseStudies/
        │   └── CaseStudies.jsx# Case study summaries with action buttons
        ├── data/
        │   ├── aboutData.js   # Personal biography and core professional value propositions
        │   └── timelineData.js# Structured timeline milestones (IBM, Accenture, Nextleap, etc.)
        ├── experience/
        │   └── WorkExperience.jsx # Work history cards with role descriptions and badges
        ├── pmNotebook/
        │   ├── PMNotebook.jsx # Sidebar TOC and dynamic Contentful article loader
        │   └── NotebookEntryPage.jsx # Rich-text renderer for PM articles, tables, and images
        └── projects/
            └── ProjectPage.jsx# Contentful-backed single project detailed showcase page
```

---

## 4. Key Components & Responsibilities

### 4.1 Navigation & Layout
- **`Header.jsx`**:
  - Sticky glassmorphic navbar (`top-0 z-50`).
  - Supports smooth in-page hash scrolling (`#case-studies`, `#work-experience`, `#projects`) even when navigating across routes (e.g. from `/pm-notebook` back to `/`).
  - Mobile responsive hamburger menu with flyout drawer.
- **`Footer.jsx`**:
  - Site footer with copyright notice and subtle branding.

### 4.2 Home Page Core Sections (`App.jsx`)
- **`Hero.jsx`**:
  - Dual-column responsive layout: left column displays personal avatar image + `Timeline.jsx`; right column displays the "About" section and bio paragraphs from `aboutData.js` + LinkedIn button.
- **`Timeline.jsx`**:
  - Chronological vertical timeline connecting milestones with dots and SVG-style stems.
  - Interactive tooltip revealing start/end dates on hover or tap (touch-device aware).
  - Categorizes items into `work` and `education` with distinct styling.
- **`CaseStudies.jsx` (Teardowns / Under the Hood)**:
  - 2-column grid of strategic product teardowns with "under the hood 🔍" doodle annotation, deconstructing UX friction, funnels, and enterprise system scale with "Inspect Teardown →" action buttons.
- **`WorkExperience.jsx`**:
  - Vertical stack of role entries featuring accent vertical badges, time period pills, company titles, and responsibilities.
- **Featured Projects Section (`App.jsx`)**:
  - 6-card grid with project preview thumbnails, titles, descriptions, and technology pills (React, Tailwind, etc.).

### 4.3 Digital Notebook (`pmNotebook/`)
- **`PMNotebook.jsx`**:
  - Fetches articles with `content_type=pmNotebookEntry` from Contentful via the Delivery API.
  - Sorts entries by date and highlights the active chapter.
  - Desktop: Sticky table-of-contents sidebar with content pane. Mobile: Auto-scrolls down to content on chapter selection.
- **`NotebookEntryPage.jsx`**:
  - Rich text rendering engine supporting embedded CMS assets, structured tables, and hyperlinks.

### 4.4 Dynamic Project Pages (`projects/ProjectPage.jsx`)
- Fetches detailed case study/project content from Contentful by slug (`fields.slug`).
- Renders custom rich text, figures, headers, and media blocks with fallbacks.

---

## 5. Data Flow & Content Management

1. **Static Local Data**:
   - `aboutData.js`: High-level bio copy focusing on product thinking and technical depth.
   - `timelineData.js`: Chronological career history including Nextleap, IBM, Accenture, Manipal Global, CGI, and RGPV Bhopal.
2. **Dynamic Headless CMS (Contentful)**:
   - Configured via `.env` with `VITE_CONTENTFUL_SPACE_ID` and `VITE_CONTENTFUL_ACCESS_TOKEN`.
   - Content Types:
     - `pmNotebookEntry`: PM essay entries with titles, slugs, timestamps, and rich text.
     - `project`: Detailed project documentation with rich text, tables, and asset links.

---

## 6. The Doodle Improvisation Objectives

The project is undergoing a visual and experiential redesign to match a hand-drawn sketchbook aesthetic inspired by user-provided mockups:

1. **Warm Sketchbook Aesthetic**:
   - Paper Canvas: Natural warm cream background (`#FAF7F0` / `#FDFBF7`) replacing sterile white/slate.
   - Ink Linework: Organic, hand-drawn wobbly borders, irregular radii, and double sketchy ink outlines (`#231F20` / `#1E293B`).
   - Earthy Neo-Groovy Palette:
     - Terracotta / Coral (`#E06D53` / `#E57368`) for primary CTAs and warm highlights.
     - Sage / Forest Green (`#6C8B74` / `#5E8268`) for coding elements and botanical doodles.
     - Mustard / Marigold (`#E9B84C`) for highlighter annotations and stars.
     - Sky Blue (`#6B9AC4`) for tags and accents.
2. **Handcrafted Typography**:
   - Playful doodle display font (e.g. Gaegu, Patrick Hand, or Caveat) for greetings, section titles, badges, and micro-copy.
   - Friendly, modern sans-serif (e.g. Epilogue, Quicksand, or Plus Jakarta Sans) for high body legibility.
3. **Noticeable Clickability & Physical 3D Interactivity**:
   - **Pressable 3D Buttons**: Solid offset box-shadows that depress on click (`active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`).
   - **Doodle Micro-Copy & Arrows**: Hand-drawn SVG arrows and playful cues ("Click to open!", "Hover for magic!", "Try it!").
   - **Interactive Hover Feedback**: Slight card wiggles (`keyframes doodle-wiggle`), thumbnail +5% zoom, and glowing accents.
   - **Cursor Charm**: Playful pointer cues and sparkle bursts.
4. **Custom Visual Assets**:
   - Illustrated hero avatars (Pankaj at desk with laptop & vintage motorcycle illustration in nature).
   - Hand-drawn decorative doodles: stars, leaf vines, sparkles, and zig-zag ink scribbles.
