# Zorvia – Next.js landing page

Converted from the single-file HTML landing page (Next.js App Router + TypeScript).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

- `app/page.tsx` – assembles the page from section components
- `components/` – Header, Hero, StackBand, Services, Process, Work, Pricing, PortfolioPricing, About, Contact
- `app/globals.css` – hover/focus/grid/responsive rules from the original
- Fonts (Bricolage Grotesque, Instrument Sans) are self-hosted in `app/fonts` via `next/font/local`
- The enquiry form in `components/Contact.tsx` only shows the thank-you state (as in the original HTML) – add your API route/email service in `submit()`.
