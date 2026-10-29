// Calculates the Qibla bearing for a coordinate with the exact formula used on the watch (main.js).
// Usage: node tools/hitung-kiblat.js <latitude> <longitude>
// Example (Jakarta): node tools/hitung-kiblat.js -6.2088 106.8456

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const context = { Math, isNaN };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'main.js'), 'utf8'), context);

const latitude = Number(process.argv[2]);
const longitude = Number(process.argv[3]);

if (process.argv.length < 4 || isNaN(latitude) || isNaN(longitude) ||
    Math.abs(latitude) > 90 || Math.abs(longitude) > 180) {
  console.log('Pakai: node tools/hitung-kiblat.js <lintang> <bujur>');
  console.log('Contoh Jakarta: node tools/hitung-kiblat.js -6.2088 106.8456');
  console.log('Lintang Selatan (LS) ditulis negatif, Bujur Timur (BT) positif.');
  process.exit(1);
}

const bearing = context.calculateInitialBearing(
  latitude, longitude, context.KAABA_LATITUDE, context.KAABA_LONGITUDE
);

// Great-circle distance, only for information
const R = 6371;
const toRad = value => value * Math.PI / 180;
const dLat = toRad(context.KAABA_LATITUDE - latitude);
const dLon = toRad(context.KAABA_LONGITUDE - longitude);
const a = Math.sin(dLat / 2) ** 2 +
  Math.cos(toRad(latitude)) * Math.cos(toRad(context.KAABA_LATITUDE)) * Math.sin(dLon / 2) ** 2;
const distance = 2 * R * Math.asin(Math.sqrt(a));

console.log(`Lokasi        : ${latitude}, ${longitude}`);
console.log(`Ka'bah        : ${context.KAABA_LATITUDE}, ${context.KAABA_LONGITUDE}`);
console.log(`Arah kiblat   : ${bearing.toFixed(1)}° dari utara sejati (searah jarum jam)`);
console.log(`Dari barat    : ${(bearing - 270).toFixed(1)}° ke arah utara`);
console.log(`Jarak         : ±${Math.round(distance).toLocaleString('id-ID')} km`);
