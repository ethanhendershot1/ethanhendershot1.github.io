const status = document.getElementById("status");
const log = document.getElementById("log");

const map = L.map("map").setView([0, 0], 2);

const streets = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19, 
    attribution: 'Tiles &copy; Esri'
}).addTo(map);   // on by default

let marker;
let accuracyCircle;

let options = {
    enableHighAccuracy: true,
    timeout: 45000
};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
} else {
    alert('Your browser does not natively support geolocation.');
}

function successCallback(position) {
  const { latitude, longitude, accuracy, altitude, altitudeAccuracy, heading, speed } =
    position.coords;
  const point = [latitude, longitude];

  let msg = `<strong>My location</strong><br/>
    Longitude: ${longitude.toFixed(7)}&deg;<br/>
    Latitude: ${latitude.toFixed(7)}&deg;<br/>
    Accuracy: ${accuracy.toFixed(2)} meters<br/>
    Time: ${new Date(position.timestamp).toLocaleString()}<br/>`;

  if (altitude !== null) {
    msg += `Altitude: ${altitude.toFixed(2)} meters<br/>`;
  }
  if (altitudeAccuracy !== null) {
    msg += `Altitude accuracy: ${altitudeAccuracy.toFixed(2)} meters<br/>`;
  }
  if (heading !== null) {
    msg += `Heading: ${heading}&deg;<br/>`;
  }
  if (speed !== null) {
    msg += `Speed: ${speed.toFixed(2)} m/s<br/>`;
  }

textContent = "Location found.";
  map.setView(point, 16);

  if (marker) {
    marker.setLatLng(point);
  } else {
    marker = L.marker(point).addTo(map);
  }

marker.bindPopup(
    `Latitude: ${latitude.toFixed(7)}<br>` +
    `Longitude: ${longitude.toFixed(7)}<br>` +
    `Accuracy: ${accuracy.toFixed(2)} m<br>` +
    `Time: ${new Date(position.timestamp).toLocaleString()}<br>`
  ).openPopup();

 if (accuracyCircle) {
    accuracyCircle.setLatLng(point);
    accuracyCircle.setRadius(accuracy);
  } else {
    accuracyCircle = L.circle(point, { radius: accuracy }).addTo(map);
  }

  log.textContent =
    `Longitude: ${longitude.toFixed(7)}\n` +
    `Latitude: ${latitude.toFixed(7)}\n` +
    `Accuracy: ${accuracy.toFixed(2)} m`;
}

function errorCallback(error) {
  const msgs = {
    1: "Permission denied",
    2: "Position unavailable",
    3: "Request timed out"
  };
}
