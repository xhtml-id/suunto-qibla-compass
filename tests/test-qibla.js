const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

const indications = [];
const context = {
  Math,
  isNaN,
  playIndication: value => indications.push(value),
  unload: () => {},
  localStorage: {
    items: {},
    getItem(key) { return key in this.items ? this.items[key] : null; },
    setItem(key, value) { this.items[key] = String(value); }
  }
};
vm.createContext(context);
vm.runInContext(fs.readFileSync(require('path').join(__dirname, '..', 'main.js'), 'utf8'), context);

const encodeCoordinate = value => Math.trunc(value * 10000000);
const toRadians = value => value * Math.PI / 180;
const inputFor = (latitude, longitude, headingDegrees, readiness = 100) => ({
  gpsReadiness: readiness,
  latitude: encodeCoordinate(latitude),
  longitude: encodeCoordinate(longitude),
  heading: toRadians(headingDegrees)
});

const output = {};
context.onLoad({}, output);

context.evaluate(inputFor(-6.2088, 106.8456, 0), output);
assert(Math.abs(output.qiblaBearing - 295) <= 1, `Jakarta bearing: ${output.qiblaBearing}`);
assert.strictEqual(output.turnCode, 1);

context.evaluate(inputFor(-6.2088, 106.8456, output.qiblaBearing), output);
assert.strictEqual(output.aligned, 1);
assert.strictEqual(output.turnCode, 0);
assert.strictEqual(indications.length, 1);

context.evaluate(inputFor(-6.2088, 106.8456, output.qiblaBearing), output);
assert.strictEqual(indications.length, 1, 'Alignment vibration must not repeat continuously');

context.evaluate(inputFor(-6.2088, 106.8456, output.qiblaBearing - 45), output);
assert.strictEqual(output.turnCode, 2);

context.evaluate(inputFor(-6.2088, 106.8456, output.qiblaBearing + 45), output);
assert.strictEqual(output.turnCode, 1);

context.evaluate(inputFor(-6.2088, 106.8456, 0, 50), output);
assert.strictEqual(output.statusCode, 0);
assert.strictEqual(output.qiblaBearing, null);

// Lower button cycles compass -> arrow only -> about -> compass
assert.strictEqual(context.getUserInterface().template, 'qibla');
context.onEvent({}, output, 2);
assert.strictEqual(context.getUserInterface().template, 'pointer');
context.onEvent({}, output, 3);
assert.strictEqual(context.getUserInterface().template, 'about');
context.onEvent({}, output, 1);
assert.strictEqual(context.getUserInterface().template, 'qibla');

// The chosen display style is remembered for the next workout; about is never remembered
context.onEvent({}, output, 2);
context.onEvent({}, output, 3);
context.onLoad({}, output);
assert.strictEqual(context.getUserInterface().template, 'pointer');
context.onEvent({}, output, 1);
context.onLoad({}, output);
assert.strictEqual(context.getUserInterface().template, 'qibla');

console.log('All Qibla Compass calculation tests passed.');
