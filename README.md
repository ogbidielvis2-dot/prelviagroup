# Prelvia Group website

React + Vite, plain CSS.

```bash
npm install
npm run dev      # local dev
npm run build    # production build in dist/
```

- All content (contact details, social links, divisions, services, copy) lives in `src/config/site.js`.
- Contact details and social URLs there are **placeholders**; replace them. Empty entries are hidden.
- The contact form validates but sends nothing until `formEndpoint` is set in `src/config/site.js` (see `src/services/contact.js`).
- Images in `public/images/` are crops from the design reference and are low resolution. Replace them with real photos using the same filenames.

## Hosting
- **GitHub Pages:** the workflow in `.github/workflows/deploy.yml` builds with `BASE_PATH=/prelviagroup/`.
- **Replit / Netlify / any root-domain host:** just `npm run build` and publish `dist/` (base path defaults to `/`). `.replit` is included.

## Staff portal (`/portal/`)
Login, password reset and a starter dashboard, using Supabase Auth.
1. Create a Supabase project. In Authentication settings, **disable "Allow new users to sign up"**, then add staff under Authentication > Users (Invite user).
2. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (see `.env.example`) in your host's environment and rebuild.
3. In Supabase Authentication > URL Configuration, add your site's `/portal/` URL to the redirect URLs (used by password reset).
