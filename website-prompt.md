# Website generation prompt — Seyqon Tech Solutions

Build a complete, polished, responsive website for **SEYQON TECH SOLUTIONS**, using the existing project in this folder as the source of truth. Read the supplied company overview before writing copy. Inspect the repository and preserve its working stack and conventions; if it is only an asset folder, create a sensible, maintainable implementation suitable for the available environment.

## Design read

Reading this as a trust-building technology studio website for students, individuals, and small businesses, with a precise, modern, confident visual language. Use **restrained azure-and-navy glassmorphism**, structured by an intentional **bento grid**. Glass is an explicit design request: use it selectively for navigation, one or two featured panels, and layered surfaces. Keep most content on clear, solid backgrounds so the website remains readable and does not feel like a generic glass-card template.

## Brand and visual direction

- Brand name: **SEYQON TECH SOLUTIONS**
- Main tagline: **Your Ideas. Working Solutions.**
- Positioning: turn ideas into practical, reliable, accessible digital solutions through software development and thoughtful design.
- Use the provided palette as the starting point: deep navy `#071A33`, azure `#168BFF`, cyan `#42C8FF`, white `#FFFFFF`, light neutral `#F4F7FB`, dark text `#172033`. These are working colors; keep the palette coherent and use cyan sparingly.
- Use the supplied logo assets rather than inventing a new logo: prefer `logo horizontal.png` in the desktop header/footer; use `logo.png` where a compact/stacked mark fits. Inspect transparency and contrast against the chosen background; if either asset is unsuitable for a placement, use a text wordmark or the other supplied variant, and explain any new/replaced asset. Do not silently redraw or distort the logo.
- Existing favicon assets are in `favicon_io (4)/`. Reuse the appropriate favicon and manifest assets if the app supports them.
- Build a considered type scale with strong sans-serif headlines, readable body text, generous line-height, and clear hierarchy. Avoid default-looking template typography, oversized gradients, glowing outlines, decorative blobs, and unnecessary motion.
- Bento means deliberate CSS Grid composition with varied tile sizes, aligned edges, consistent spacing, and a clear reading order—not a uniform set of repeated cards. Use rounded corners consistently. Keep shadows subtle and tinted to the navy/blue environment.
- Glass treatment should have a legible translucent fill, fine edge highlight, restrained blur, and a solid-color fallback for reduced transparency. Maintain WCAG AA contrast, visible keyboard focus, semantic HTML, reduced-motion support, and touch-friendly controls.
- Motion should be subtle and purposeful: short entrance/reveal or hover feedback only where it clarifies interaction. Respect `prefers-reduced-motion`; avoid continuous animation and scroll hijacking.

## Content and accuracy rules

Use the overview as the factual source. Write concise, human-sounding copy in a professional, friendly, technically credible, transparent tone. Preserve the emphasis on practical solutions, affordability, customization, clear scope, and reliable delivery.

- Do not invent customers, testimonials, reviews, registrations, certifications, office details, staff, revenue, years in business, guarantees, completed projects, or case studies.
- Treat service categories as capabilities/potential offerings, not proof that every specialist service is production-ready. Describe AI/ML and image processing as prototype or specialist work where appropriate.
- College projects are an initial market, not the whole company identity. Frame academic work as legitimate development assistance that helps students understand and explain the solution; do not promise grades or encourage misrepresentation.
- The only established promotional starting price is **college projects from ₹1,000**. Make clear final pricing depends on scope, complexity, functionality, and deliverables. Do not invent prices for other services.
- Never present the founder’s personal or academic projects as Seyqon company work. If no verified company work is available, omit a fabricated portfolio and use a service-focused “How we work” or “What we can build” section instead. Label any illustrative demo clearly as a sample, not a client project.
- Do not make up contact details. If actual contact information is absent, use clearly marked editable placeholders in one central configuration/content file and avoid rendering fake phone numbers, email addresses, addresses, or social links.

## Pages and information architecture

Create a cohesive marketing site with these routes/sections, matching the existing app architecture:

1. **Home** — navigation; a distinctive left-aligned or split hero; the headline “Your Ideas. Working Solutions.”; short introduction; primary CTA “Discuss your project” and secondary CTA “Explore services”; a purposeful bento overview of the core service areas; a compact, truthful process preview; and a closing enquiry CTA.
2. **Services** — clearly scoped sections for college project development, websites, web applications, mobile apps, custom software, backend/database work, technical support/documentation, and AI/ML prototypes. Explain who each is for and what kind of problem it can solve. Avoid implying all potential offerings are equally mature.
3. **About** — mission, vision, practical values, and the company’s direction from accessible project work toward broader software and digital solutions. Do not imply a company size or history not in the overview.
4. **Process** — requirement gathering, feasibility, scope and quotation, design/architecture, development, testing, demonstration, handover, and agreed support. Explain transparency around scope, timelines, revisions, hosting, and paid API costs.
5. **Work / Projects** — show verified company work only when it exists in the repository or supplied overview. Otherwise present a useful service-led section or clearly labelled sample demonstrations, without fake client narratives or metrics.
6. **Contact / Get a quote** — an accessible enquiry form with name, contact details, project category, description, budget range, expected timeline, and optional reference links. Validate fields and show clear success/error feedback. If no backend or delivery endpoint exists, implement a clear front-end state and mark the integration point; never claim an enquiry was sent when it was not.

Make navigation and CTAs work across desktop and mobile. Use real routes or robust in-page anchors consistent with the project. Add sensible metadata, page titles, descriptive alt text, and a useful not-found state if routing supports one.

## Homepage composition suggestion

Use an asymmetrical, left-aligned hero with the headline and concise copy on one side, and a custom-built product/interface composition on the other (for example, a restrained abstract system diagram or overlapping service modules). Build this composition from HTML/CSS and brand geometry; do not use a generic AI illustration or stock-photo collage. Under the hero, use a bento grid with one larger featured tile and smaller related tiles, then a simple numbered process strip and a service CTA. Ensure the composition collapses cleanly on mobile and does not hide essential information behind hover.

## Implementation expectations

- Reuse the existing stack, dependencies, and design conventions. Do not add dependencies without checking the package manifest and confirming they are needed.
- Keep components reusable and content easy to edit. Put missing contact values and any editable service details in one obvious content/config file.
- Ensure all links, buttons, mobile navigation, form states, and focus states work. Do not leave dead controls or placeholder `href="#"` links.
- Optimize supplied images for their actual use without degrading originals. Do not replace brand assets unless an asset is genuinely unusable; if replacement is needed, preserve the existing source and state exactly what was changed.
- Make the site responsive at mobile, tablet, and desktop widths, with no horizontal overflow. Use a reduced-transparency fallback and maintain legibility over every glass surface.
- Before finishing, inspect the completed implementation for factual accuracy, alignment, contrast, responsive behavior, and consistency with the brand. Summarize the pages, key design choices, assets reused/replaced, and any missing contact/backend values that require configuration.

Now build the website in this project. Start by inspecting the available files and overview, then implement the complete experience rather than returning only a mockup or plan.
