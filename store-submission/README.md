# SuuntoPlus Store submission — Qibla Compass

Everything needed to apply to the Suunto Partner Program and submit Qibla Compass to the SuuntoPlus Store.
Nothing here has been sent to Suunto. Registration, agreements and submission are done by the developer.

## Contents

| File | Purpose |
|---|---|
| `description-en.md` | Store listing text, English |
| `description-id.md` | Store listing text, Bahasa Indonesia |
| `privacy-policy.md` | Privacy policy, English + Indonesian |
| `terms-of-use.md` | Terms of use, English + Indonesian |
| `email-to-suunto.md` | Questions for partners@suunto.com before applying (costs, review time, requirements) |
| `screenshots/framed/` | Screens inside the Race S frame from the SuuntoPlus Editor simulator, `-en` and `-id` |
| `screenshots/screen-only/` | Round 466×466 screens with transparent corners |
| `store-listing-preview.png` | Preview of how the listing could look |

Screenshots are rendered in Chrome (Playwright) with Suunto's own Race S CSS and fonts from the SuuntoPlus Editor, and the app's own arrow drawing code from `qibla.html` and `pointer.html`.

## Before submitting (must be done)

- [ ] Declination check finished, and the temporary `H … D …` diagnostic line removed from `qibla.html`
- [ ] Outdoor accuracy test against a trusted Qibla reference, differences written down
- [ ] Version raised in `manifest.json` for the release (maximum 4 characters, e.g. `1.0`), and the version on the About screen updated to match
- [ ] Tests pass: `node tests/test-qibla.js`
- [ ] SuuntoPlus Editor validation passes (`Build` in the SUUNTOPLUS APPS panel)
- [ ] Answers received from Suunto for the questions in `email-to-suunto.md`

## Steps

1. Send the questions in `email-to-suunto.md` to partners@suunto.com.
2. Apply to the Suunto Partner Program: https://www.suunto.com/partners/welcome-partners/
   - The form asks for information about you and the developers who need access to Suunto API Zone.
   - Suunto says to expect a reply within two weeks.
3. Log in to https://apizone.suunto.com and submit the app with:
   - the final app package from SuuntoPlus Editor,
   - the description (`description-en.md`, `description-id.md`),
   - the screenshots,
   - privacy policy and terms if requested.
4. Wait for Suunto's review. After approval the app appears in the SuuntoPlus Store under "Made by Suunto Community".

## Known facts and open questions

- Fees: no source mentions any fee. Not confirmed by Suunto.
- Individuals: Suunto's partner team said on the official forum that the application link works for everyone.
- Review time: not published.
- Image and icon specifications: not published.
- Submitting grants Suunto the right to distribute the app to other users through the store.
