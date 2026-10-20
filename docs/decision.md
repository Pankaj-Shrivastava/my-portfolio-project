# Architecture & Design Decision Records (ADR)

## Project: Pankaj Shrivastava Portfolio

---

### Record Summary

| ID | Decision Title | Status | Date |
| :--- | :--- | :--- | :--- |
| **ADR-01** | Navigation Restructuring & PM Notebook Delinking | **Accepted** | Oct 2026 |
| **ADR-02** | Rebranding Case Studies to "Teardowns" with "Under the Hood" Doodle | **Accepted** | Oct 2026 |
| **ADR-03** | Dedicated Education Section & Synchronized Page Flow | **Accepted** | Oct 2026 |
| **ADR-04** | Sticky Header Scroll Margins (`scroll-mt-*`) Standard | **Accepted** | Oct 2026 |
| **ADR-05** | Tactile 3D Clickability & Doodle Micro-Interactions | **Accepted** | Oct 2026 |
| **ADR-06** | Dual Avatar Mode (Trailblazer vs Catalyst Persona) | **Accepted** | Oct 2026 |
| **ADR-07** | Hero Positioning as Product Builder, Natural Leader & Collaborative Catalyst | **Accepted** | Oct 2026 |
| **ADR-08** | Contact Postcard Modal with Copy Email & LinkedIn Redirection | **Accepted** | Oct 2026 |

---

### ADR-01: Navigation Restructuring & PM Notebook Delinking

#### Context
The original sticky header included links to About, Case Studies, Work Experience, Projects, and PM Notebook. The link density and terminology felt cluttered, and recruiters scanning the site needed an immediate, logical story progression.

#### Decision
1. Re-ordered the top-level navigation topics to:
   **`About` → `Projects` → `Teardowns` → `Education` → `Experience`**
2. Removed the **PM Notebook** link from the primary sticky header (both desktop and mobile flyout). The notebook remains fully functional and accessible directly via its route (`/pm-notebook`) or through article deep-dives.

#### Consequences
- The header presents a clean, 5-topic narrative optimized for engineering and product hiring managers.
- Eliminates navigation cognitive overload while preserving all CMS data flows.

---

### ADR-02: Rebranding Case Studies to "Teardowns" with "Under the Hood" Feature

#### Context
"Case Studies" felt conventional and did not convey Pankaj's unique edge: decomposing systems down to first principles, finding friction points, and reverse-engineering scalable architectures.

#### Decision
1. Renamed the section to **"Teardowns"** (Header label: `TEARDOWNS`, section anchor: `#teardowns`).
2. Added a creative **"under the hood 🔍"** doodle annotation above the title:
   - A hand-drawn inspection badge with wrench and magnifying glass.
   - An organic curved arrow (`DoodleArrow`) swooping down into the title with the caption *"how the gears turn & products tick"*.
3. Retained `<span id="case-studies" />` as a hidden alias to guarantee 100% backwards compatibility for any existing inbound links.

#### Consequences
- Directly highlights product management analytical rigor and full-stack technical depth.
- Adds an authentic, playful mechanical sketch touch that matches the motorcycle doodle persona.

---

### ADR-03: Dedicated Education Section & Synchronized Page Flow

#### Context
Previously, education was nested inside a dual-purpose timeline card next to the bio. Having "Education" as a top-level navigation topic required a dedicated target that reflects formal degrees and professional fellowships.

#### Decision
1. Created `src/components/education/Education.jsx` featuring:
   - **Nextleap PM Fellowship** (Product Discovery, User Problem Framing, GTM Strategy).
   - **RGPV Bhopal** (B.E. in Information Technology, CS fundamentals, algorithms).
2. Positioned `<Education />` in `App.jsx` immediately after `<CaseStudies />` (Teardowns) and before `<WorkExperience />`.
3. Renamed WorkExperience's target to `id="experience"` with `#work-experience` backwards-compatible alias.

#### Consequences
- The linear vertical order of the homepage strictly mirrors the navigation bar:
  1. `#about`
  2. `#projects`
  3. `#teardowns`
  4. `#education`
  5. `#experience`

---

### ADR-04: Sticky Header Scroll Margins (`scroll-mt-*`) Standard

#### Context
Clicking navigation links scrolled target sections to `y = 0`, causing the 75px opaque sticky navbar to overlap and obscure section headings (e.g., hiding *"Strategic Case Studies"* or *"Recent Projects"*).

#### Decision
Standardized Tailwind `scroll-mt-*` (`scroll-margin-top`) across all sections:
- `#about`: `scroll-mt-24` (96px clearance)
- `#projects`: `scroll-mt-32` (128px clearance to account for top floating doodle cues)
- `#teardowns`: `scroll-mt-28` (112px clearance for the "under the hood" badge)
- `#education`: `scroll-mt-28` (112px clearance)
- `#experience`: `scroll-mt-28` (112px clearance)
- Configured `element.scrollIntoView({ behavior: 'smooth', block: 'start' })` in `Header.jsx`.

#### Consequences
- Every section heading lands with ~30-40px of comfortable whitespace below the sticky navbar.

---

### ADR-05: Tactile 3D Clickability & Doodle Micro-Interactions

#### Context
Visitors on doodle-themed websites can sometimes mistake interactive elements for static illustrations. Clear, tactile clickability clues were needed.

#### Decision
Implemented a unified affordance layer:
1. **3D Pressable Physics (`.pressable-btn`, `.doodle-card`)**: Solid ink offset shadows (`3px/4px #231F20`) that raise on hover and compress down (`translate(2px, 2px)`) on click/tap.
2. **Punchy CTA Buttons**: High-contrast coral (`#E57368`) and marigold (`#E9B84C`) action targets.
3. **Micro-copy Prompts & Arrows**: Informal handwritten margin notes (*"Click to open!"*, *"Hover for magic!"*, *"Try it!"*).
4. **Micro-animations**: Subtle card border wiggles (`@keyframes doodleWiggle`) and +5% thumbnail zooms on hover.

---

### ADR-06: Dual Avatar Mode (Trailblazer vs Catalyst Persona)

#### Context
Pankaj embodies two complementary energies: a free-spirited adventurer who navigates open roads and uncharted territory, and an empathetic product leader/catalyst who sparks clarity, alignment, and team execution.

#### Decision
Integrated an interactive mode switcher in `Hero.jsx`:
- **Trailblazer Mode (`🏍️ Trailblazer`)**: Displays the vintage motorcycle doodle illustration in nature with the *"Trailblazing 🌟"* tag.
- **Catalyst Mode (`💡 Catalyst`)**: Displays the portrait card highlighting *"Product Builder & Catalyst"*.
- Accessible via interactive pill toggles styled with doodle borders and active 3D pressable state.

---

### ADR-07: Hero Positioning as Product Builder, Natural Leader & Collaborative Catalyst

#### Context
The original role badge read *"Full-Stack Developer & Tech Explorer"*. Pankaj's career vision and core differentiation center on product leadership, first-principles problem solving, user discovery, and rallying cross-functional teams toward impact.

#### Decision
1. Updated role subtitle badge to:
   **`Product Builder & Natural Leader · Driven by Values`**
2. Crafted the hook paragraph to weave together thinking, research, craftsmanship, and humble collaborative leadership:
   > *"Great products happen where customer empathy meets engineering rigor. By asking the foundational 'why' and diving deep into user behavior, we uncover unarticulated friction before drafting a single requirement. Bringing an engineer's technical depth, a designer's eye for craftsmanship, and a leader's drive for alignment, I help unite teams around a shared vision—because when we build together, we create systems that scale and experiences people genuinely love."*

#### Consequences
- Directly addresses hiring managers and recruiters looking for high-ownership Product Managers and technical leaders.
- Communicates genuine servant leadership and team-first collaboration over solo heroics.

---

### ADR-08: Contact Postcard Modal with Copy Email & LinkedIn Redirection

#### Context
Visitors clicking "Get in touch" previously triggered a generic `mailto:` link. Visitors need frictionless access to Pankaj's verified communication channels (LinkedIn & primary email) with an intuitive copy action and delightful sketchbook branding.

#### Decision
1. Implemented `ContactModal.jsx` featuring:
   - Postcard stamp badge: **`🗺️ Wanderer’s Curiosity · Builder’s Focus 💡`**
   - Handcrafted headline: *"The best journeys start with a simple 'hello'."*
   - Subtitle: *"From zero-to-one problem discovery to rallying teams around a shared vision, let’s explore how we can create real impact together."*
   - Micro doodle note: *"✨ No formalities needed; just honest problem solving!"*
2. Interactive Channel Blocks:
   - **Email Block**: Displays `pankajvijayshrivastava@gmail.com` with a pressable **`📋 Copy Email`** button (switches to **`✅ Copied!`** with sparkles) plus a direct mail app button (`↗`).
   - **LinkedIn Block**: Displays profile path and a pressable **`Connect on LinkedIn ↗`** CTA opening `https://www.linkedin.com/in/pankaj-vijay-shrivastava/` in a new tab (`target="_blank" rel="noopener noreferrer"`).
3. Accessibility & UX:
   - ESC key and backdrop click close triggers.
   - Body scroll locking while active.

#### Consequences
- Eliminates mail client launch friction for webmail users.
- Increases connection rate for recruiters, referrals, and collaborators.


