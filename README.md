# DexKor — WhatsApp Suite Demo Funnel (React + Vite)

Four-page funnel, one React component per page:

| Route        | Component       | Purpose                                  |
|--------------|-----------------|------------------------------------------|
| `/`          | `OptinPage`     | Lead-capture opt-in gate                 |
| `/landing`   | `LandingPage`   | Long-form landing page                   |
| `/booking`   | `BookingPage`   | Booking page — real Calendly embed       |
| `/thankyou`  | `ThankYouPage`  | Confirmation page                        |

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## How it works
- Each page's markup is rendered via `dangerouslySetInnerHTML`; its original
  vanilla JS (reveals, count-ups, proof ticker, countdown, chat demo, modals,
  popups) runs inside `initPage()` in a `useEffect`, wrapped with teardown-aware
  shims so timers/listeners are cleared on route change.
- Page CSS is scoped under `.dk-optin` / `.dk-landing` / `.dk-booking` /
  `.dk-thankyou` so the shared class names never collide across routes.
- Internal `.html` links and the opt-in's post-submit redirect are routed
  client-side via `src/lib/spaNav.js`, preserving the funnel query string.

## Calendly
`BookingPage` mounts `https://calendly.com/richard-dexkor/dexkor-demo-call-with-founder`
as an inline widget and prefills name/email from the URL (`?name`/`?n`,
`?email`/`?e`) when present.

## Wire-ups before launch
- `OptinPage`: set `LEAD_WEBHOOK_URL` (top of its script) to your lead endpoint.
- Replace the placeholder proof-ticker feed and countdown target date.
