// Qibla Compass for SuuntoPlus
// Kaaba centre reference: 21.422487 N, 39.826206 E

var KAABA_LATITUDE = 21.422487;
var KAABA_LONGITUDE = 39.826206;
var COORDINATE_DIVIDER = 10000000;
var ALIGN_TOLERANCE_DEGREES = 3;
var ALIGN_REARM_DEGREES = 8;
var alignedLatch = false;
var currentTemplate = 'qibla';
var DISPLAY_STORAGE_KEY = 'display';

var normalizeDegrees = function(value) {
  var normalized = value % 360;
  return normalized < 0 ? normalized + 360 : normalized;
};

var toRadians = function(value) {
  return value * Math.PI / 180;
};

var toDegrees = function(value) {
  return value * 180 / Math.PI;
};

var calculateInitialBearing = function(latitude, longitude, targetLatitude, targetLongitude) {
  var latitudeRad = toRadians(latitude);
  var targetLatitudeRad = toRadians(targetLatitude);
  var longitudeDeltaRad = toRadians(targetLongitude - longitude);
  var x = Math.sin(longitudeDeltaRad) * Math.cos(targetLatitudeRad);
  var y = Math.cos(latitudeRad) * Math.sin(targetLatitudeRad) -
          Math.sin(latitudeRad) * Math.cos(targetLatitudeRad) * Math.cos(longitudeDeltaRad);
  return normalizeDegrees(toDegrees(Math.atan2(x, y)));
};

var calculateAngularError = function(relativeBearing) {
  return relativeBearing <= 180 ? relativeBearing : 360 - relativeBearing;
};

function onLoad(_input, output) {
  output.statusCode = 0;
  output.qiblaBearing = null;
  output.relativeBearing = null;
  output.headingDegrees = null;
  output.turnCode = 0;
  output.aligned = 0;
  output.gpsReadiness = 0;
  alignedLatch = false;
  currentTemplate = localStorage.getItem(DISPLAY_STORAGE_KEY) === 'pointer' ? 'pointer' : 'qibla';
}

function evaluate(input, output) {
  var readiness = typeof input.gpsReadiness === 'number' ? input.gpsReadiness : 0;
  output.gpsReadiness = Math.round(readiness);

  if (readiness < 100 || typeof input.latitude !== 'number' || typeof input.longitude !== 'number') {
    output.statusCode = 0;
    output.qiblaBearing = null;
    output.relativeBearing = null;
    output.headingDegrees = null;
    output.turnCode = 0;
    output.aligned = 0;
    alignedLatch = false;
    return;
  }

  if (typeof input.heading !== 'number' || isNaN(input.heading)) {
    output.statusCode = 1;
    output.qiblaBearing = null;
    output.relativeBearing = null;
    output.headingDegrees = null;
    output.turnCode = 0;
    output.aligned = 0;
    alignedLatch = false;
    return;
  }

  var latitude = input.latitude / COORDINATE_DIVIDER;
  var longitude = input.longitude / COORDINATE_DIVIDER;
  var headingDegrees = normalizeDegrees(toDegrees(input.heading));
  var qiblaBearing = calculateInitialBearing(
    latitude,
    longitude,
    KAABA_LATITUDE,
    KAABA_LONGITUDE
  );
  var relativeBearing = normalizeDegrees(qiblaBearing - headingDegrees);
  var angularError = calculateAngularError(relativeBearing);
  var isAligned = angularError <= ALIGN_TOLERANCE_DEGREES;

  output.statusCode = 2;
  output.qiblaBearing = Math.round(qiblaBearing * 10) / 10; // One decimal: the screen needs more than whole degrees
  output.relativeBearing = Math.round(relativeBearing);
  output.headingDegrees = Math.round(headingDegrees);
  output.aligned = isAligned ? 1 : 0;

  if (isAligned) {
    output.turnCode = 0;
    if (!alignedLatch) {
      playIndication('Confirm');
      alignedLatch = true;
    }
  } else {
    output.turnCode = relativeBearing <= 180 ? 2 : 1;
    if (angularError >= ALIGN_REARM_DEGREES) {
      alignedLatch = false;
    }
  }
}

var changeView = function(template) {
  currentTemplate = template;
  if (template !== 'about') {
    localStorage.setItem(DISPLAY_STORAGE_KEY, template); // Remember the chosen display style
  }
  unload('_cm'); // Reload the screen so getUserInterface returns the new template
};

// Lower button cycles: 1 = compass (option 1), 2 = arrow only (option 2), 3 = about
function onEvent(_input, _output, eventId) {
  switch (eventId) {
    case 1:
      changeView('qibla');
      break;
    case 2:
      changeView('pointer');
      break;
    case 3:
      changeView('about');
      break;
  }
}

function getUserInterface() {
  return { template: currentTemplate };
}
