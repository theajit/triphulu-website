# TripHulu marketing site

## Positioning

TripHulu is a sales, booking, payment and operations platform for tour operators. The core promise is a connected lifecycle from first enquiry to final trip handover.

## Target user

Tour operators, destination management companies, local travel agencies, adventure operators and multi-destination travel businesses. Primary decision makers are founders, agency owners, Sales managers and Operations managers.

## Site map

- `/` home
- `/features` feature catalog
- `/features/{sales,quotations,bookings,payments,operations,travel-intelligence,communications,analytics,quality}`
- `/pricing`, `/about`, `/contact`, `/security`, `/privacy`, `/terms`

## Feature claim matrix

The marketing-site workspace contains no authenticated product source or prior product decisions. The supplied brief is the only product source. Before launch, product owners must approve these statuses:

| Area | Provisional status | Public wording rule |
|---|---|---|
| Leads and sales pipeline | LIVE — approval required | May describe the workflow after confirmation |
| Quotations and approvals | LIVE — approval required | Do not imply a specific document or e-signature provider |
| Booking pipeline | LIVE — approval required | Describe status and handover visibility |
| Payment ledger | LIVE — approval required | Provider setup varies by tenant; no guarantee language |
| Operations handover | LIVE — approval required | Describe assignments and readiness workflow |
| Travel intelligence | BETA — approval required | Structured planning only; no generative-AI claim |
| WhatsApp-ready communication | BETA — approval required | Never claim universal direct API delivery |
| Analytics | LIVE — approval required | Keep claims to named dashboard views |
| Tenant QA Console | BETA — approval required | Automated regression plus manual QA |
| Multi-tenant configuration | LIVE — approval required | Do not disclose technical tenant internals |

PLANNED capabilities must use a “Coming Soon” label and are not included as current product claims.

## SEO

Static HTML, route-specific titles and descriptions, canonical base, Open Graph/Twitter metadata, semantic headings, sitemap and robots metadata. Target concepts are used naturally and without repetition.

## Brand tone and content rules

Practical, operational and confident. Avoid generic AI language, guarantees, invented integrations, customer PII, private QA evidence and internal product routes. Illustrative product data must remain fictional.

## Deployment

Run `npm run build` and deploy the generated `out/` directory to any static host. Confirm the production domain, then update the canonical base in the layout, sitemap and robots files if it differs from `https://www.triphulu.com`.
