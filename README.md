# Qibla Compass for Suunto Race S

Qibla Compass is a SuuntoPlus Sports App that calculates the Qibla bearing from the watch GPS position and rotates an on-screen arrow using the Race S compass heading. It works offline after GPS lock.

## Current behavior

- Kaaba reference: `21.422487, 39.826206`
- GPS must reach 100% readiness.
- Keep the watch horizontal for a reliable compass reading.
- The arrow rotates toward Qibla. It is red until aligned, then turns green.
- The top line shows the absolute Qibla bearing (e.g. `QIBLA 295°`); the bottom line shows the live angle to turn (e.g. `23° TURN RIGHT`).
- English is the primary/default UI language.
- Indonesian is included as an optional localization.
- If no matching localization is selected, use the English (`en`) build.
- The watch confirms once when alignment is within ±3°.
- The confirmation rearms after moving at least 8° away.
- The lower button cycles: option 1 (compass with N/E/S/W) → option 2 (arrow only) → About → option 1. The last display option used is remembered for the next workout.

## Important platform limitation

SuuntoPlus apps run only while a sport mode is active. Create a custom sport mode named `Kiblat`, add this app to it, and start that mode when finding Qibla. The resulting short activity can be deleted afterward.

## Install and test on Race S

1. Install Visual Studio Code on Windows or macOS.
2. Install the official `SuuntoPlus Editor` extension.
3. Open this project folder in VS Code.
4. Temporarily unpair Race S from the Suunto mobile app before Bluetooth development, or connect by USB.
5. In the SuuntoPlus Apps panel, choose **Build and Add App to Watch**.
6. Select **English (`en`)** as the primary language. Choose **Indonesian (`id`)** only when desired.
7. On the watch, create/start a suitable sport mode and enable **Qibla Compass** under SuuntoPlus.
8. Test outdoors, keep the watch level, and calibrate the compass with a figure-eight motion if prompted.

During development, keep SuuntoLink closed and avoid syncing with the Suunto mobile app because syncing may remove a locally installed development app.

## Files

- `manifest.json` — app metadata and watch resources
- `main.js` — Qibla bearing and alignment logic
- `qibla.html` — Race S watch interface
- `pointer.html` — option 2, arrow-only screen
- `about.html` — About screen
- `id.json`, `en.json` — localization
- `arrow.png` — arrow artwork reference (on the watch the arrow is drawn on canvas in `qibla.html`)
- `qr.png` — QR code for https://about.xhtml.id on the About screen
- `tests/test-qibla.js` — calculation and vibration-latch tests
- `preview/` — visual previews
- `build/` — local output for `.fea` binaries (not committed; prebuilt files are published under GitHub Releases)

## Accuracy note

This is an initial build and is not yet field-validated on the owner's physical Race S. Compare the first outdoor result with a trusted Qibla reference. Nearby metal, magnets, electronics, reinforced concrete, and an uncalibrated compass can affect direction.

## Running the tests

```bash
node tests/test-qibla.js
```

## License

[MIT](LICENSE) © xhtml.id
