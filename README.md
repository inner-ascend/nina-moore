# Nina Moore

The website at nina-moore.com.

Every URL on the site, and where each button goes: `SITE-MAP.md`.

## Offers — one list, every button

Every offer lives in `offers.json` (name, price, where it goes). Pages never hard-code a
checkout: they link to `/go/<id>`, e.g. `<a href="/go/sitting">`.

- The build swaps each `/go/<id>` for the real URL, so buttons go **straight to the Kajabi
  checkout** — no redirect hop.
- It also publishes `nina-moore.com/go/<id>` as a short link for Instagram, Stories, DMs and
  emails (`/go/she-who-becomes`, `/go/sitting`, `/go/journey`, `/go/call`, `/go/portal-poem`).
- A typo'd id fails the build, and CI's link check fails on a dead checkout.

**New offer or new price in Kajabi?** Change `offers.json`, push. Every button and short link follows.
