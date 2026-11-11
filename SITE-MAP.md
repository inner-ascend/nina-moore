# Site map: every URL

Every address on nina-moore.com and where each button sends people. Updated 11 Nov 2026.
Keep this file in step with the site: a new page or a changed link updates it in the same commit.
Prices and checkout links live in `offers.json` (see README → Offers), not here.

## Her pages (nina-moore.com)
| URL | what it is |
|---|---|
| https://nina-moore.com | home: who she is, the three ways to meet |
| https://nina-moore.com/she-who-becomes | She Who Becomes sales page (the Instagram bio link) |
| https://nina-moore.com/sittings | one-to-one: a sitting and the 4-session Journey/Cycle, both checkouts + free call |
| https://nina-moore.com/threshold | The Threshold, 8-week circle, by application (call) |
| https://nina-moore.com/links | link-in-bio page, with her latest posts |
| https://nina-moore.com/topics/threshold-work | topic page (search) |
| https://nina-moore.com/topics/women-in-transition | topic page |
| https://nina-moore.com/topics/grief-and-loss | topic page |
| https://nina-moore.com/topics/leaving-a-marriage | topic page |
| https://nina-moore.com/topics/shadow-work-for-women | topic page |
| https://nina-moore.com/topics/embodied-work-for-women | topic page |
| https://nina-moore.com/topics/spiritual-emergence | topic page |
| https://nina-moore.com/topics/writing-through-change | topic page |

Hidden from search on purpose (robots.txt): https://nina-moore.com/preview (copy of home), https://nina-moore.com/go/…

## Short links (built from offers.json — Instagram, Stories, DMs, emails)
| URL | goes to |
|---|---|
| https://nina-moore.com/go/she-who-becomes | Kajabi checkout, She Who Becomes, €33/month |
| https://nina-moore.com/go/sitting | Kajabi checkout, a sitting, €85 |
| https://nina-moore.com/go/journey | Kajabi checkout, The Journey, €420 |
| https://nina-moore.com/go/call | Calendly, free discovery call |
| https://nina-moore.com/go/portal-poem | Kajabi Portal Poem page (apply by email) |

## Where they land
- https://shewhobecomes.nina-moore.com/offers/JicjMvXT/checkout — She Who Becomes
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
- CI fails on a dead link or an unknown offer id.
