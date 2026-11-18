# Site map: every URL

Every address on nina-moore.com and where each button sends people. Updated 11 Nov 2026.
Keep this file in step with the site: a new page or a changed link updates it in the same commit.
Prices and checkout links live in `offers.json` (see README → Offers), not here.

## Her pages (nina-moore.com) — the rebrand (not live until the merge)
| URL | what it is |
|---|---|
| https://nina-moore.com | home: two doors, Portal Poem and She Who Becomes |
| https://nina-moore.com/portal-poem/ | Portal Poem hub |
| https://nina-moore.com/portal-poem/mentorship/ | 12-week private mentorship (apply) |
| https://nina-moore.com/portal-poem/circles/ | writing circles (join) |
| https://nina-moore.com/she-who-becomes/ | She Who Becomes hub (the Instagram bio link) |
| https://nina-moore.com/she-who-becomes/journey/ | 12-week journey |
| https://nina-moore.com/she-who-becomes/membership/ | €33/month membership |
| https://nina-moore.com/about/ | about |
| https://nina-moore.com/writing/ | writing (Substack posts) |

## Old pages that now redirect (stub pages, set in `redirects.json`)
/preview, /links → home · /sittings, /threshold, /topics/* → She Who Becomes (writing-through-change → Portal Poem).
The site files live in `site/` (sync with `node scripts/sync-site.mjs`); `public/` holds favicon, robots.txt and share cards.

## Short links (built from offers.json — Instagram, Stories, DMs, emails)
| URL | goes to |
|---|---|
| https://nina-moore.com/go/she-who-becomes | Kajabi checkout, She Who Becomes, €33/month |
| https://nina-moore.com/go/free-monday | Kajabi checkout, She Who Becomes with a 7-day free trial (made 12 Nov for the Monday gathering), then €33/month |
| https://nina-moore.com/go/sitting | Kajabi checkout, a sitting, €85 |
| https://nina-moore.com/go/journey | Kajabi checkout, The Journey, €420 |
| https://nina-moore.com/go/call | Calendly, free discovery call |
| https://nina-moore.com/go/portal-poem | Kajabi Portal Poem page (apply by email) |

## Where they land
- https://shewhobecomes.nina-moore.com/offers/JicjMvXT/checkout — She Who Becomes
- https://shewhobecomes.nina-moore.com/offers/BfVJFP2a/checkout — She Who Becomes, 7 days free
- https://shewhobecomes.nina-moore.com/offers/kcUZF3p6/checkout — a sitting
- https://shewhobecomes.nina-moore.com/offers/TX52BXP2/checkout — The Journey
- https://calendly.com/ninamoorerising/free-discovery — free call
- https://shewhobecomes.nina-moore.com/portal-poem — Portal Poem

## Kajabi (shewhobecomes.nina-moore.com)
| URL | state |
|---|---|
| https://shewhobecomes.nina-moore.com/login | members log in here (the bare subdomain shows this too) |
| https://shewhobecomes.nina-moore.com/privacy | privacy policy, linked in footers |
| https://shewhobecomes.nina-moore.com/she-who-becomes | old sales page, no longer linked from the site |
| https://shewhobecomes.nina-moore.com/work-with-me | old sessions page, not mobile-friendly, no longer linked |

## Elsewhere
- https://portalpoem.com, https://portalpoem.com/join — Portal Poem writing circle, its own site
- https://ninamoore.substack.com — Letters from the Threshold
- https://www.instagram.com/byninamoore — her Instagram (the site linked the old @nina__eterna until 11 Nov)

## How the site is wired
- Hosting: GitHub Pages from `inner-ascend/nina-moore`, branch `main` → `gh-pages` by the
  Deploy workflow. DNS at Bluehost (A records → GitHub Pages).
- Every "buy" button links `/go/<id>`; the build swaps in the real URL from `offers.json`.
- Each `/go/<id>` page carries a share card (picture + title for WhatsApp, Instagram DMs), set by `share` in `offers.json`. Cards for short links live in `public/go-cards/`.
- CI fails on a dead link or an unknown offer id.
