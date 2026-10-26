# Delhi Puppy Point – React frontend

React + Vite single-page site (React Router) for Delhi Puppy Point, Delhi NCR. Frontend only: no backend or database. Enquiry forms open WhatsApp with a pre-filled message; nothing is stored.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview
```

## Deploy on Vercel
1. Push this folder to GitHub.
2. In Vercel: Add New → Project → import the repo.
3. Framework preset: Vite (build `npm run build`, output `dist`). No environment variables needed.
`vercel.json` rewrites all routes to `index.html` so `/breeds/pug` works on refresh.

## Edit
- Phone/WhatsApp number and areas: `src/config/business.js`
- Breeds: `src/data/breeds.js` (photo at `public/images/breeds/<slug>.jpg`)
- Hero photos: `src/data/hero.js` and `public/images/hero/`
- FAQs: `src/data/faqs.js`

## Notes
- Breed photos are illustrative, not actual puppies for sale. Replace them with your own real photographs when available.
- Hero photos show customers; make sure you have their consent.
- No secrets or `.env` files are used or needed.
