# Zorwia – Next.js landing page

Converted from the single-file HTML landing page (Next.js App Router + TypeScript).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

- Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `QUOTE_NOTIFICATION_EMAIL` in `.env.local` to receive quote enquiries by email. Use a newly generated API key and a sender address verified in Resend for production.
- `app/page.tsx` – assembles the page from section components
- `components/` – Header, Hero, StackBand, Services, Process, Work, Pricing, PortfolioPricing, About, Contact
- `app/globals.css` – hover/focus/grid/responsive rules from the original
- Fonts (Bricolage Grotesque, Instrument Sans) are self-hosted in `app/fonts` via `next/font/local`
- The enquiry form in `components/Contact.tsx` sends submissions to `app/api/quote/route.ts`, which delivers them through Resend.
