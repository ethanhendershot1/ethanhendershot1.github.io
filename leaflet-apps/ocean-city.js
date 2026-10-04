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

quick_eats.forEach(f => L.marker(f.coords).addTo(map));
stores.forEach(f => L.marker(f.coords).addTo(map));
landmarks.forEach(f => L.marker(f.coords).addTo(map));

L.control.layers({
    "Streets": streets, 
    "Topographic": topo, 
    "Satellite": satellite,
    "OpenStreetMap": osm
}).addTo(map);

