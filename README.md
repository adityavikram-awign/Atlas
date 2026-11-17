# Atlas Project — India onboarding site

Onboarding page for the Atlas Project: people in India record first-person videos of everyday household tasks on an iPhone with a head-mount, and are paid ₹250 per QC-approved production hour.

Static HTML/CSS/JS. No build step, no framework, no backend. English by default, with Hindi, Kannada and Marathi.

## What's on the page

1. Hero — what the work is, "At a glance" (₹250/hour, 1–5 hours a day, iPhone 12+, head-mount), and the WhatsApp group button.
2. About the project.
3. Who can join — the seven eligibility rules.
4. Do's and don'ts.
5. Rejection reasons (not paid, 13) and flagging reasons (still paid, 11), grouped into task content and camera/setup.
6. QC and payment.
7. Atlas Capture app — steps, plus the Hindi login video in a phone frame.
8. Five-question self-check, FAQ, and a final join button.

## Files

```
index.html                    the page
styles.css                    design system (shared with the Awign LatAm site) + Atlas additions at the end
i18n.js                       every string (EN / HI / KN / MR) and the CONFIG block
script.js                     rendering, language, quiz, funnel events
assets/video/atlas-login.mp4  Atlas Capture login video (Hindi)
```

## Config — `i18n.js`, `CONFIG` block

| Key | Value |
|---|---|
| `GROUP_URL` | WhatsApp group invite link. **Blank = the join buttons say "Group link coming soon".** |
| `VIDEO_LOGIN` | Path of the login video |
| `ANALYTICS_ENDPOINT` | Blank = events log to console |

## Languages

English opens first on every visit. A language picked with the toggle lasts for that tab. Hindi and Marathi use Noto Sans Devanagari, Kannada uses Noto Sans Kannada (both from Google Fonts). The translations should get a read by a native speaker before wide sharing.

## Funnel tracking

`track(name, props)` fires on `page_view`, `lang_switch`, `theme_switch`, `quiz_answer`, `quiz_complete`, `join_group`, `login_video_play`.

## Local

```bash
python3 -m http.server 5190
```

## Deploy

Import `vikramaditya26/Atlas` at [vercel.com/new](https://vercel.com/new) and accept the defaults. Later pushes redeploy automatically.
