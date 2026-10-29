# Contributing to Qibla Compass

Thank you for helping. Issues and pull requests are welcome, in English or Bahasa Indonesia.

🇮🇩 [Bahasa Indonesia di bawah](#berkontribusi-bahasa-indonesia)

## Reporting a problem

Open an [issue](https://github.com/xhtml-id/suunto-qibla-compass/issues/new) and include:

- Watch model and firmware version (only the **Suunto Race S** is tested)
- App language (English or Bahasa Indonesia)
- Your approximate location (city is enough) and the Qibla bearing the watch showed
- What you expected and what happened
- How you checked the direction (mosque Qibla line, *Rashdul Qiblat* shadow, `node tools/hitung-kiblat.js`, …)
- A photo of the watch screen if possible

For a wrong direction, first calibrate the compass (figure-8) away from metal, magnets and electronics. Many reports are sensor interference, not calculation errors.

## Suggesting a feature

Open an issue describing what you need and why. Keep in mind the app must stay small, offline and battery friendly on the watch.

## Pull requests

1. Fork the repository and create a branch from `main`.
2. Keep each pull request focused on one change.
3. Run the tests before you push:

   ```bash
   node tests/test-qibla.js
   ```

4. If you change the Qibla calculation, add or update a test in `tests/test-qibla.js`.
5. If you change any text shown on the watch, update both `en.json` and `id.json`.
6. Test on a real watch when possible and say in the pull request which model you used.
7. Describe what changed and why.

## Code style

- Match the surrounding code: plain JavaScript, 2-space indentation, short comments explaining *why*.
- Avoid extra screen updates on the watch: they cost battery.
- Do not add tracking, network calls or data collection. The app works fully offline and stays that way.

## Licence

By contributing you agree that your contribution is released under the [MIT License](LICENSE).

---

## Berkontribusi (Bahasa Indonesia)

Terima kasih sudah membantu. Issue dan pull request boleh dalam bahasa Indonesia atau Inggris.

### Melaporkan masalah

Buka [issue](https://github.com/xhtml-id/suunto-qibla-compass/issues/new) dan sertakan:

- Model jam dan versi firmware (hanya **Suunto Race S** yang sudah diuji)
- Bahasa aplikasi (Inggris atau Indonesia)
- Lokasi kira-kira (cukup nama kota) dan arah kiblat yang tampil di jam
- Apa yang diharapkan dan apa yang terjadi
- Cara Anda mengecek arah (garis kiblat masjid, bayangan *Rashdul Qiblat*, `node tools/hitung-kiblat.js`, …)
- Foto layar jam jika memungkinkan

Jika arah terasa salah, kalibrasi kompas dulu (gerakan angka 8) jauh dari logam, magnet, dan perangkat elektronik. Banyak laporan ternyata gangguan sensor, bukan kesalahan perhitungan.

### Usulan fitur

Buka issue berisi kebutuhan dan alasannya. Aplikasi harus tetap ringan, offline, dan hemat baterai.

### Pull request

1. Fork repo dan buat branch dari `main`.
2. Satu pull request untuk satu perubahan.
3. Jalankan tes sebelum push: `node tests/test-qibla.js`
4. Jika mengubah perhitungan kiblat, tambahkan atau perbarui tes di `tests/test-qibla.js`.
5. Jika mengubah teks di layar jam, perbarui `en.json` dan `id.json`.
6. Uji di jam asli bila memungkinkan, dan sebutkan modelnya di pull request.
7. Jelaskan apa yang diubah dan alasannya.

### Gaya kode

- Ikuti gaya kode yang ada: JavaScript biasa, indentasi 2 spasi, komentar singkat yang menjelaskan *alasan*.
- Hindari pembaruan layar yang tidak perlu: boros baterai.
- Jangan menambahkan pelacakan, koneksi jaringan, atau pengumpulan data. Aplikasi tetap sepenuhnya offline.

### Lisensi

Dengan berkontribusi, Anda setuju kontribusi Anda dirilis di bawah [MIT License](LICENSE).
