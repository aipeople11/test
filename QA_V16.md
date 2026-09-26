# Humanity AI Circle V16 — QA / Certification Status

## Release intent

V16 is a UX, research-editorial, flow, accessibility and mobile-responsiveness pass. It does not change the V15 community thesis.

## Static / structural QA

- HTML files: **28**
- Substantive pages: **20**
- Homepage top-level sections: **28**
- Missing local `href/src` references: **0**
- Broken local fragment targets: **0**
- Duplicate HTML IDs: **0**
- Substantive pages with exactly one H1: **PASS**
- Image alt attributes: **PASS**
- `main#main` landmarks: **PASS**
- Mobile menu `aria-controls`: **PASS**
- JS syntax: **PASS** (`site.js`, `trace.js`, `server.js`)
- V16 stylesheet migration: **PASS**

## Functional smoke test

Local Node server tested on port 8124:

- `/` → **HTTP 200**
- `/research.html` → **HTTP 200**
- `/connections.html` → **HTTP 200**
- `/v16.css` → **HTTP 200**
- `/robots.txt` → **HTTP 200**

## Mobile-first source gates

Responsive rules are present for desktop/tablet/phone with explicit gates at 1100px, 800px, 520px and 380px.

V16 explicitly converts the major horizontal storytelling components to vertical phone layouts, including:

- outcome flows
- benchmark/evidence flows
- signal-to-action flow
- dot maps
- research-method cards
- journey navigation
- mobile CTA stacks
- stage, role, research, trust, connection and activity card grids

Phone-specific rules also enforce:

- one-column primary cards
- 44px+ tap targets
- readable H1/H2 scaling
- full-width CTA buttons
- no intentionally required horizontal discovery for the main explanatory flows
- reduced-motion support
- visible keyboard focus states
- QR removed as a primary mobile interaction

## Research editorial QA

Research cards now expose visible context instead of presenting numbers alone:

- population / scope
- period or horizon
- publisher
- human question
- original-source link

Primary-source figures used in the build were rechecked during V16 preparation against Stanford HAI, World Economic Forum, ILO and Thomson Reuters pages.

## Important environment limitation

Chromium is installed, but headless screenshot generation hangs in this runtime because of the browser/container environment. Two bounded attempts were made and stopped. Therefore **full visual cross-browser certification is not claimed** here.

Before public launch, complete real-device/browser visual QA on at least:

- 1440 desktop
- 1280 laptop
- 1024 tablet landscape
- 768 tablet
- 430 phone
- 390 phone
- 360 phone
- iOS Safari
- Android Chrome

## Repository mapping limitation

The Ripwire CLI is not installed in this runtime, so V16 was reviewed and modified through direct targeted source inspection rather than Ripwire repository mapping.

## Deployment-only gate

The public domain has not been supplied. V16 intentionally does not invent canonical URLs. Complete `DEPLOYMENT_CHECKLIST_V16.md` once the production domain is known.
