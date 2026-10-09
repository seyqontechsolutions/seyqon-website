# Seyqon Tech Solutions website

This is a lightweight, responsive single-page company website built with React, Vite, and Tailwind CSS 4. It uses the supplied Seyqon logos and favicon files from `public/assets/`.

The visual theme follows the operating system’s light or dark preference through `prefers-color-scheme`. The header toggle can override the theme and remembers the choice; “Use device” returns to the system setting. Small-screen layouts stack the bento service grid and enquiry fields for easier reading and touch use. Scroll-in reveals are disabled when reduced motion is requested.

## Preview

Install dependencies with `npm install`, then start the development server with `npm run dev`. Create a production build with `npm run build`; preview it locally with `npm run preview`.

## Before launch

- The enquiry form is local demo mode by default. It validates the brief but does not send or store submissions. To connect it, set `ENQUIRY_ENDPOINT` near the top of `src/App.jsx` to a POST endpoint that accepts the form fields as JSON and allows requests from the deployed site.
- Confirm the final service scope and pricing before publishing. The only price currently shown is the documented college-project starting price of ₹1,000, with final pricing based on scope.
- The project overview did not include a public email address, phone number, social profile, or verified company portfolio, so none are fabricated here.
- The web font stack uses local system fonts so the site works without a third-party font request.

## Main files

- `src/App.jsx` — React components and page content
- `src/index.css` — Tailwind import and custom stylesheet entry
- `styles.css` — branded visual details, responsive layout, and reduced-motion/transparency support
- `vite.config.js` — React and Tailwind Vite plugins
- `index.html` — Vite HTML entry point and metadata
- `website-prompt.md` — the original website-generation brief
