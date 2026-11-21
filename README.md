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
