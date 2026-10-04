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

const beach_path_1 = [
    [38.330078, -75085490],
    [38.329675, -75.084208]
];

const beach_path_2 = [
    [38.328915, -75.086055],
    [38.328468, -75.084594]
];

const boardwalk = [
    [38.332401, -75.084426],
    [38.328001, -75.086744]
];

L.polyline(beach_path_1, { color: '#a6531c', weight: 4 }).addTo(map);
L.polyline(beach_path_2, { color: '#a6531c', weight: 4 }).addTo(map);
L.polyline(boardwalk, { color: '#a6531c', weight: 4 }).addTo(map);

function svgIcon(color) {
    return L.divIcon({
        className: 'poi-icon',
        html: `
            <svg width="25" height="32" viewBox="0 0 25 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0C5.6 0 0 5.6 0 12.5 0 21.5 12.5 32 12.5 32S25 21.5 25 12.5C25 5.6 19.4 0 12.5 0z"
                    fill="${color}" stroke="#1c2b24" stroke-width="1"/>
                <circle cx="12.5" cy="12.5" r="5" fill="#fff"/>
            </svg>`,
        iconSize:    [25, 32],  // match SVG's width/height
        iconAnchor:  [12, 32],  // the pinpoint — where the actual coordinate is at
        popupAnchor: [0, -28]   // where a popup opens relative to iconAnchor
    });
}

const QEATS_COLOR    = '#a6531c';
const LANDMARK_COLOR = '#1fbf78';
const STORE_COLOR    = '#1f78bf'

quick_eats.forEach(f => L.marker(f.coords, { icon: svgIcon(QEATS_COLOR) }).addTo(map));
stores.forEach(f => L.marker(f.coords, { icon: svgIcon(STORE_COLOR) }).addTo(map));
landmarks.forEach(f => L.marker(f.coords, { icon: svgIcon(LANDMARK_COLOR) }).addTo(map)

L.polyline(beach_path_1, { color: '#a6531c', weight: 4 }).addTo(map);
L.polyline(beach_path_2, { color: '#a6531c', weight: 4 }).addTo(map);
L.polyline(boardwalk, { color: '#a6531c', weight: 4 }).addTo(map);

L.control.layers({
    "Streets": streets, 
    "Topographic": topo, 
    "Satellite": satellite,
    "OpenStreetMap": osm
}).addTo(map);

