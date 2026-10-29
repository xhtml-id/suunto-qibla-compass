# Koordinat Ka'bah dan Cara Mengecek Arah Kiblat

Panduan ini menjelaskan angka `21.422487, 39.826206` di Qibla Compass, cara aplikasi menghitung arah kiblat, dan cara Anda mengecek sendiri arah kiblat untuk lokasi mana pun di Indonesia.

## 1. Apa arti `21.422487, 39.826206`?

Itu adalah **koordinat titik tengah Ka'bah** di Masjidil Haram, Makkah:

| | Nilai | Artinya |
|---|---|---|
| Lintang (latitude) | `21.422487` | 21,42° **Lintang Utara** (positif = utara khatulistiwa) |
| Bujur (longitude) | `39.826206` | 39,83° **Bujur Timur** (positif = timur Greenwich) |

Angka ini **tetap** dan ditulis di `main.js`:

```js
var KAABA_LATITUDE = 21.422487;
var KAABA_LONGITUDE = 39.826206;
```

Pengguna **tidak perlu mengetik koordinat apa pun**. Koordinat lokasi Anda diambil otomatis dari GPS jam. Dari dua titik itu (Anda dan Ka'bah), jam menghitung arah kiblat.

## 2. Bagaimana jam menghitung arah kiblat?

Bumi itu bulat, jadi arah terpendek ke Ka'bah mengikuti **lingkaran besar** (*great circle*), bukan garis lurus di peta datar. Jam menghitung **sudut awal lingkaran besar** dari lokasi Anda ke Ka'bah, diukur **searah jarum jam dari utara sejati**:

- 0° = utara, 90° = timur, 180° = selatan, 270° = barat.
- Dari Indonesia hasilnya sekitar **291°–296°**, artinya **barat agak ke utara (barat laut)**, bukan tepat ke barat.

![Arah kiblat dari Indonesia](images/9-qibla-direction-indonesia.svg)

Ini metode trigonometri bola yang sama dengan yang dipakai dalam ilmu falak untuk menentukan arah kiblat.

> **Kenapa tidak cukup "menghadap barat"?** Dari Jakarta, menghadap tepat ke barat (270°) meleset sekitar 25°. Dengan jarak ±7.900 km ke Makkah, setiap 1° meleset ≈ ±138 km di sana. Itu sebabnya jam memakai GPS untuk lokasi Anda yang sebenarnya.

## 3. Arah kiblat kota-kota di Indonesia

Dihitung dengan rumus yang sama persis dengan jam (`tools/hitung-kiblat.js`). Koordinat kota adalah perkiraan pusat kota, jadi lokasi Anda bisa berbeda beberapa persepuluh derajat.

| Kota | Koordinat | Arah kiblat dari utara | Dari barat ke utara |
|---|---|---|---|
| Banda Aceh | 5.5483, 95.3238 | 292,2° | 22,2° |
| Medan | 3.5952, 98.6722 | 292,8° | 22,8° |
| Padang | -0.9471, 100.4172 | 294,7° | 24,7° |
| Pekanbaru | 0.5071, 101.4478 | 293,8° | 23,8° |
| Palembang | -2.9761, 104.7754 | 294,5° | 24,5° |
| Jakarta | -6.2088, 106.8456 | 295,2° | 25,2° |
| Serang | -6.1201, 106.1503 | 295,3° | 25,3° |
| Bandung | -6.9175, 107.6191 | 295,2° | 25,2° |
| Semarang | -6.9667, 110.4167 | 294,5° | 24,5° |
| Yogyakarta | -7.7956, 110.3695 | 294,7° | 24,7° |
| Surabaya | -7.2575, 112.7521 | 294,0° | 24,0° |
| Denpasar | -8.6705, 115.2126 | 293,8° | 23,8° |
| Mataram | -8.5833, 116.1167 | 293,5° | 23,5° |
| Pontianak | -0.0263, 109.3425 | 292,7° | 22,7° |
| Banjarmasin | -3.3194, 114.5908 | 292,9° | 22,9° |
| Balikpapan | -1.2379, 116.8529 | 292,2° | 22,2° |
| Makassar | -5.1477, 119.4327 | 292,5° | 22,5° |
| Manado | 1.4748, 124.8421 | 291,4° | 21,4° |
| Kupang | -10.1772, 123.6070 | 292,2° | 22,2° |
| Ambon | -3.6954, 128.1814 | 291,5° | 21,5° |
| Jayapura | -2.5337, 140.7181 | 291,3° | 21,3° |

## 4. Tutorial: mendapatkan koordinat lokasi Anda

Berguna untuk mengecek angka di jam, atau menghitung arah kiblat rumah, masjid, atau kantor tertentu.

![Mencari koordinat di Google Maps](images/8-coordinates-google-maps.svg)

### Dari Google Maps di HP (Android / iPhone)

1. Buka Google Maps.
2. **Tekan lama** titik lokasi yang diinginkan (misalnya atap rumah atau masjid) sampai muncul pin merah.
3. Koordinat muncul di kotak pencarian, misalnya `-6.120100, 106.150300`.
4. Ketuk koordinat itu untuk menyalinnya.

### Dari Google Maps di komputer

1. Buka https://maps.google.com.
2. **Klik kanan** titik lokasi.
3. Baris pertama menu adalah koordinatnya, misalnya `-6.12010, 106.15030`. Klik untuk menyalin.

### Dari GPS jam Suunto

Saat latihan berjalan, layar navigasi atau peta di jam dapat menampilkan posisi Anda. Format tampilannya tergantung pengaturan format posisi di jam.

### Cara membaca angkanya

```
-6.120100, 106.150300
   │            └── bujur  (positif = Bujur Timur / BT)
   └── lintang  (minus = Lintang Selatan / LS, plus = Lintang Utara / LU)
```

Hampir seluruh Pulau Jawa, Bali, Nusa Tenggara, dan sebagian besar Sulawesi serta Papua berada di **Lintang Selatan**, jadi angka lintangnya **minus**. Aceh, Medan, sebagian Kalimantan Barat, dan Manado berada di **Lintang Utara** (plus). Seluruh Indonesia berada di **Bujur Timur** (plus).

### Mengubah format derajat-menit-detik (DMS) ke desimal

Kadang koordinat ditulis seperti `6°07'12.4" LS 106°09'01.1" BT`. Ubah ke desimal:

```
desimal = derajat + (menit ÷ 60) + (detik ÷ 3600)
```

Contoh:

- Lintang: 6 + 7/60 + 12,4/3600 = 6,12011 → karena **LS**, ditulis **-6.12011**
- Bujur: 106 + 9/60 + 1,1/3600 = 106,15031 → karena **BT**, ditulis **106.15031**

## 5. Menghitung arah kiblat dari koordinat

Dengan Node.js terpasang, jalankan dari folder proyek:

```bash
node tools/hitung-kiblat.js -6.1201 106.1503
```

Hasil:

```
Lokasi        : -6.1201, 106.1503
Ka'bah        : 21.422487, 39.826206
Arah kiblat   : 295.3° dari utara sejati (searah jarum jam)
Dari barat    : 25.3° ke arah utara
Jarak         : ±7.846 km
```

Angka **Arah kiblat** harus sama (selisih beberapa persepuluh derajat) dengan baris atas di jam, misalnya `KIBLAT 295°`.

## 6. Mengecek dengan bayangan matahari (Rashdul Qiblat)

Dua kali setahun matahari berada tepat di atas Ka'bah. Pada saat itu, **bayangan benda tegak di mana pun di Indonesia menunjuk lurus ke arah berlawanan dengan kiblat**, jadi arah kiblat = arah dari ujung bayangan ke benda (menghadap matahari). Ini cara cek tanpa kompas yang sangat akurat.

Waktunya biasanya sekitar:

- **27 atau 28 Mei, ±16.18 WIB** (17.18 WITA, 18.18 WIT)
- **15 atau 16 Juli, ±16.27 WIB** (17.27 WITA, 18.27 WIT)

Tanggal dan jam pastinya diumumkan Kementerian Agama setiap tahun. Cek pengumuman tahun berjalan.

Cara:

1. Tancapkan tongkat lurus (atau gantung benang berpemberat) di permukaan datar yang terkena matahari.
2. Tepat pada jamnya, tandai garis bayangannya.
3. Arah dari ujung bayangan menuju tongkat adalah arah kiblat.
4. Bandingkan dengan panah hijau di jam. Wilayah Indonesia timur yang matahari sudah rendah atau terbenam pada jam tersebut tidak bisa memakai cara ini.

## 7. Untuk pengembang: mengganti titik referensi

Bila ingin memakai titik referensi lain (misalnya koordinat Ka'bah dari sumber yang berbeda), ubah dua baris di `main.js`:

```js
var KAABA_LATITUDE = 21.422487;
var KAABA_LONGITUDE = 39.826206;
```

Lalu jalankan tes dan pasang ulang ke jam:

```bash
node tests/test-qibla.js
```

Perubahan pada digit ke-4 atau ke-5 di belakang koma (puluhan meter di Makkah) praktis tidak mengubah arah dari Indonesia, karena efeknya jauh di bawah 0,01°.

## 8. Faktor yang bisa membuat arah di jam meleset

- **Logam dan magnet** di dekat jam: mobil, pagar besi, meja logam, speaker, beton bertulang.
- **Kompas belum dikalibrasi**: gerakkan jam membentuk angka 8 bila diminta.
- **Jam tidak mendatar**.
- **Utara magnetis vs utara sejati**: deklinasi magnetis di Indonesia kecil tetapi tidak nol. Apakah heading di jam sudah dikoreksi ke utara sejati masih dikonfirmasi ke Suunto.
- **GPS belum 100%**: tunggu sampai baris atas menampilkan `KIBLAT …°`.
