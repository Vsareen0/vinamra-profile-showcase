## Portfolio for Vinamra Sareen

A single-page portfolio with a **persona switcher** (Full-Stack · AI/ML · Backend · Computer Vision) that re-filters the Skills and Projects sections so a visitor can instantly see the relevant slice of your profile. Other sections (hero, experience, certifications, contact) stay constant.

Visual direction: **Midnight Indigo** — deep navy `#0a0a1a` / `#141432` background, electric indigo `#4f46e5` accents, soft glow on primary CTAs, generous whitespace, modern sans typography.

### Pages & routes

Marketing-style content site, separate routes for SEO and shareability:

```
/            Home (hero + persona switcher + featured projects + highlights)
/about       Long-form bio + education
/experience  Full role timeline
/projects    All projects, filterable by persona/tag
/certifications  Cert wall with verify links
/contact     Email, socials, simple form
```

Shared header with nav + persona pill switcher; shared footer.

### Persona system

Single source of truth: each skill/project/role tagged with one or more personas (`fullstack`, `ai`, `backend`, `cv`). The active persona (URL query `?as=ai`, persisted) filters:
- Hero subtitle ("AI Engineer building computer-vision systems…")
- Skills grid (re-orders/highlights relevant chips)
- Featured projects (top 3 most relevant)

When persona = "All", everything shows.

### Sections in detail

1. **Hero** — name, rotating persona-aware headline, location, primary CTA (Contact), secondary (Download resume). Subtle animated indigo gradient backdrop.
2. **Persona tabs** — 4 segmented pills + "All". Sticky on scroll.
3. **Skills** — grouped chips: Languages (Go, TS, JS, Python), Backend (NestJS, Node), AI/CV (PyTorch/TF/OpenCV — to confirm), Cloud (GCP), Foundations (Mathematics). Chips dim when not in active persona.
4. **Featured Projects** — cards with title, 1-line summary, stack badges, persona tag, links (repo/demo).
5. **Experience timeline** — vertical timeline, role/company/dates/highlights.
6. **Certifications wall** — logo + title + issuer + "Verify" external link per cert.
7. **Contact** — email, GitHub, LinkedIn, optional form (mailto for now; can wire to Lovable Cloud later).

### Content I need from you

LinkedIn blocked automated access, so I'll ask for content when building. Either:
- Paste your experience/education/certifications (with credential URLs), OR
- Upload your resume (PDF) and I'll extract it

For now I'll scaffold with clearly-marked placeholders using your stated skills (Go, NestJS, Node, JS/TS, Python, AI, CV, GCP, math) and replace once you provide details.

### Tech notes

- TanStack Start file-based routes per page above.
- Persona state via URL search param + a tiny Zustand-free React context.
- Tailwind v4 tokens added to `src/styles.css` (indigo accent, glow shadow, gradient).
- shadcn primitives: `button`, `card`, `badge`, `tabs`, `separator`.
- SEO `head()` per route with unique title/description/og.
- No backend yet; contact = mailto. Lovable Cloud can be added later if you want a real form.

### Out of scope (for now)

Blog, CMS, analytics, dark/light toggle (dark-only fits Midnight Indigo), i18n.
