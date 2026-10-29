# Panduan Instalasi Qibla Compass — Suunto Race S

## Yang dibutuhkan

- Komputer Windows 10/11 atau macOS
- Visual Studio Code
- Ekstensi resmi **SuuntoPlus Editor**
- Kabel USB jam atau Bluetooth komputer

## Memasang versi pengembangan ke jam

1. Ekstrak paket proyek ini.
2. Buka folder `qibla-compass-suunto` melalui Visual Studio Code.
3. Pasang ekstensi **SuuntoPlus Editor** dari Visual Studio Marketplace.
4. Hubungkan Race S menggunakan USB. Untuk Bluetooth, putuskan dahulu pasangan jam dari aplikasi Suunto di ponsel:
   `Settings → Connectivity → Paired devices → MobileApp → Forget`.
5. Buka panel **SuuntoPlus Apps** di Visual Studio Code.
6. Pilih proyek **Qibla Compass**.
7. Jalankan **Build and Add App to Watch**. Cara ini otomatis memilih paket layar yang sesuai dengan Race S.
8. Gunakan bahasa **English (`en`)** sebagai bahasa utama/default. Pilih **Bahasa Indonesia (`id`)** hanya bila ingin memakai terjemahan Indonesia.
9. Setelah pemasangan selesai, hubungkan kembali jam dengan aplikasi Suunto bila diperlukan.

## Menggunakannya

1. Buat mode olahraga khusus bernama **Kiblat** di aplikasi Suunto.
2. Tambahkan **Qibla Compass** sebagai SuuntoPlus Sports App untuk mode tersebut.
3. Di area terbuka, buka mode **Kiblat**, aktifkan Qibla Compass, lalu mulai aktivitas.
4. Tunggu sampai tulisan `GPS …%` di atas berganti menjadi arah kiblat, misalnya `KIBLAT 295°`.
5. Pegang jam mendatar. Bila muncul `KOMPAS` dan `GERAKKAN ANGKA 8`, gerakkan jam membentuk angka delapan.
6. Ikuti panah dan instruksi di bawah, misalnya `23° PUTAR KE KANAN`. Angkanya adalah sisa sudut yang harus diputar.
7. Panah berwarna merah selama belum pas. Saat arah sudah berada dalam toleransi ±3°, panah berubah hijau, jam bergetar, dan menampilkan `ARAH KIBLAT TEPAT`.
8. Hentikan aktivitas setelah selesai. Aktivitas singkat tersebut dapat dihapus.
9. Tombol bawah berputar: **Opsi 1** (kompas dengan N/E/S/W) → **Opsi 2** (panah saja) → layar **Tentang** → kembali ke Opsi 1. Pilihan tampilan terakhir diingat untuk latihan berikutnya.

## Catatan penting

- Jangan menguji di dekat kendaraan, speaker, magnet, pagar besi, meja logam, atau beton bertulang.
- Bandingkan pengujian pertama dengan referensi kiblat yang tepercaya.
- Saat mengembangkan, tutup SuuntoLink dan jangan melakukan sinkronisasi bersamaan karena aplikasi pengembangan lokal dapat terhapus dari jam.
- Folder `build` memuat paket hasil build untuk seluruh jenis layar. Cara paling aman adalah **Build and Add App to Watch** agar editor memilih file yang tepat secara otomatis.
- Paket berakhiran `-en.fea` adalah versi utama berbahasa Inggris. Paket `-id.fea` adalah opsi Bahasa Indonesia.
