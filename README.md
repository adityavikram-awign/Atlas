# Atlas Project — India onboarding site

Onboarding page for the Atlas Project: people in India record first-person videos of everyday household tasks on an iPhone with a head-mount, and are paid ₹250 per QC-approved production hour.

Static HTML/CSS/JS. No build step, no framework, no backend. English by default, with Hindi, Kannada and Marathi.

## What's on the page

1. Hero: what the work is, quick facts, and an earnings card (₹250 per approved hour, with a 1–5 hours/day calculator).
2. How to start: seven numbered steps. Join the WhatsApp group, install the Awign app, log in with OTP, sign the offer letter, add bank details (Earnings → Beneficiary, PAN, bank account), confirm in the group, then log in to Atlas Capture (the login video sits in this step).
3. Before you record: what the project is, the seven eligibility rules, and do's and don'ts.
4. Rejection reasons (13, not paid) and flagging reasons (11, still paid) as two tabs with tap-to-open items.
5. Quality check and payment.
6. FAQ, final call to action, and the footer (Programme / Company / Support links, social icons, © line).

`privacy.html` and `terms.html` carry all four languages and follow the language picked on the main page.

## Files

```
index.html                    the page
privacy.html, terms.html      legal pages (EN / HI / KN / MR)
styles.css                    mobile-first styles, light by default with a dark toggle
i18n.js                       every string (EN / HI / KN / MR) and the CONFIG block
script.js                     rendering, language menu, earnings calculator, tabs
assets/logo.png               Awign logo
assets/video/atlas-login.mp4  Atlas Capture login video (Hindi)
```

## Config — `i18n.js`, `CONFIG` block

| Key | Value |
|---|---|
| `GROUP_URL` | WhatsApp group invite link. **Blank = the join buttons say "Group link coming soon".** |
| `AWIGN_APP_URL` | Awign app download link (step 2, footer) |
| `OFFER_LETTER_URL` | Offer letter link (step 4) |
| `AWIGN_URL` | awign.com (footer) |
| `RATE` | ₹ per approved hour, used by the earnings calculator |
| `VIDEO_LOGIN` | Path of the login video |
| `SOCIAL` | Instagram / Facebook / X links in the footer |
| `ANALYTICS_ENDPOINT` | Blank = no events sent |

## Languages

English opens first on every visit. A language picked from the menu lasts for that tab. Hindi and Marathi use Noto Sans Devanagari, Kannada uses Noto Sans Kannada (both from Google Fonts). The translations should get a read by a native speaker before wide sharing.

## Funnel tracking

`track(name, props)` fires on `page_view`, `lang_switch`, `theme_switch`, `join_group`, `awign_app`, `offer_letter`, `login_video_play`.

## Local

```bash
python3 -m http.server 5190
```

## Deploy

Import `vikramaditya26/Atlas` at [vercel.com/new](https://vercel.com/new) and accept the defaults. Later pushes redeploy automatically.
