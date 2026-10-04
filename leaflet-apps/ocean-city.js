// New
const map = L.map('map', { 
    center: [38.3297, -75.0856], 
    zoom: 17              
});
//
// KEEP all the base map layers
//
const streets = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19, 
    attribution: 'Tiles &copy; Esri'
}).addTo(map);   // on by default

const topo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19, 
    attribution: 'Tiles &copy; Esri'
});

const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19, 
    attribution: 'Tiles &copy; Esri'
});

const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const quick_eats = [
    { name: "Thrasher Fries",  coords: [38.328023, -75.086611] },
    { name: "TLC Polish Water Ice",           coords: [38.332652, -75.084465] },
    { name: "Candy Kitchen",         coords: [38.328948, -75.086417] }
]

const stores = [
    {name: "Atlantic Airbrush",               coords: [38.329267, -75.086147] },
    {name: "T-shirt Factory",                 coords: [38.328617, -75.086549] }
]

// These may or may not be "landmarks", but a square and a garage are hard to miss 
const landmarks = [
    { name: "Ripley's Believe It or Not!",   coords: [38.328435, -75.086468] },
    { name: "Jolly Roger at the Pier",  coords: [38.327888, -75.085751] }
];

// 1. Make 3 layer groups for the points

const qeatsLayer = L.layerGroup(
  quick_eats.map(f => L.marker(f.coords, { icon: svgIcon(QEATS_COLOR) })) // construct a new array
).addTo(map);

const storesLayer = L.layerGroup(
  convenience_stores.map(f => L.marker(f.coords, { icon: svgIcon(STORE_COLOR) })) // construct a new array
).addTo(map);

const landmarksLayer = L.layerGroup(
  landmarks.map(f => L.marker(f.coords, { icon: svgIcon(LANDMARK_COLOR) })) // construct a new array
).addTo(map);

quick_eats.forEach(f => L.marker(f.coords).addTo(map));
convenience_stores.forEach(f => L.marker(f.coords).addTo(map));
landmarks.forEach(f => L.marker(f.coords).addTo(map));

const QEATS_COLOR    = '#a6531c';
const LANDMARK_COLOR = '#1fbf78';
const STORE_COLOR    = '#1f78bf';

L.control.layers(
    { "Streets": streets, "Topographic": topo, "Satellite": satellite, "OpenStreetMap": osm },
    { "Quick eats": qeatsLayer, "Stores": storesLayer, "Landmarks": landmarksLayer}
).addTo(map);
