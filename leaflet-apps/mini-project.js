// 1. Initialize Map without zoom controls
const map = L.map('map', {
    center: [40.0007, -83.008],
    zoom: 12
})

// 2. Define Tile Layers
const streets = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri'
}).addTo(map);

const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri'
});

const CyclOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const WaymarkedTrails_hiking = L.tileLayer('https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

const TopPlusOpen_Grey = L.tileLayer('http://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web_grau/default/WEBMERCATOR/{z}/{y}/{x}.png', {
	maxZoom: 18,
	attribution: 'Map data: &copy; <a href="http://www.govdata.de/dl-de/by-2-0">dl-de/by-2-0</a>'
});

const JusticeMap_americanIndian = L.tileLayer('https://maptile3.org/2020/{size}/indian/{z}/{x}/{y}.png', {
	attribution: '<a href="http://www.justicemap.org/terms.php">Justice Map</a>',
	size: 'county',
	bounds: [[14, -180], [72, -56]]
});

const JusticeMap_white = L.tileLayer('https://maptile3.org/2020/{size}/white/{z}/{x}/{y}.png', {
	attribution: '<a href="http://www.justicemap.org/terms.php">Justice Map</a>',
	size: 'county',
	bounds: [[14, -180], [72, -56]]
});

const JusticeMap_hispanic = L.tileLayer('https://maptile3.org/2020/{size}/hispanic/{z}/{x}/{y}.png', {
	attribution: '<a href="http://www.justicemap.org/terms.php">Justice Map</a>',
	size: 'county',
	bounds: [[14, -180], [72, -56]]
});

const OPNVKarte = L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const WaymarkedTrails_cycling = L.tileLayer('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

const USGS_USImageryTopo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 16,
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});

const Esri_OceanBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
	maxZoom: 13
});

const layer_new = L.layerGroup().addTo(map);

// Layer-control options are plain objects—don't call .addTo(map) on them.
const baseLayers = {
  'Streets': streets,
  'Satellite': satellite,
  'Bicycle Trails': CyclOSM,
  'Grey': TopPlusOpen_Grey,
  'Native American Pop': JusticeMap_americanIndian,
  'White Pop': JusticeMap_white,
  'Hispanic Pop': JusticeMap_hispanic,
  'Airport': OPNVKarte,
  'High Definition': USGS_USImageryTopo,
  'Ocean Topo': Esri_OceanBasemap

};

const overlays = {
    'Hiking Trails': WaymarkedTrails_hiking,
};

L.control.layers(baseLayers, overlays, {
  position: 'topleft',
  collapsed: false
}).addTo(map);

// Info panel
const layerInfo = new Map([
  [streets, {
    name: 'Streets (Esri)',
    description: 'Street map with roads, boundaries, and place labels.',
    provider: '<a href="https://www.esri.com/">Esri</a>'
  }],
  [satellite, {
    name: 'Satellite (Esri)',
    description: 'Satellite and aerial imagery.',
    provider: '<a href="https://www.esri.com/">Esri</a>'
  }],
  [CyclOSM, {
    name: 'CyclOSM',
    description: 'Cycling focused map showing bicycle routes and related infrastructure.',
    provider: '<a href="https://www.cyclosm.org/">CyclOSM</a>'
  }],
  [WaymarkedTrails_hiking, {
    name: 'Hiking trails',
    description: 'Highlights hiking routes and trails.',
    provider: '<a href="https://waymarkedtrails.org/">Waymarked Trails</a>'
  }],
  [TopPlusOpen_Grey, {
    name: 'TopPlusOpen Grey',
    description: 'Grey style topographic map layer.',
    provider: '<a href="https://www.bkg.bund.de/">BKG</a>'
  }],
  [JusticeMap_americanIndian, {
    name: 'JusticeMap: American Indian',
    description: 'Map showing the Native American population data layer.',
    provider: '<a href="https://www.justicemap.org/">JusticeMap</a>'
  }],
  [JusticeMap_white, {
    name: 'JusticeMap: White',
    description: 'Map showing the White population data layer.',
    provider: '<a href="https://www.justicemap.org/">JusticeMap</a>'
  }],
  [JusticeMap_hispanic, {
    name: 'JusticeMap: Hispanic',
    description: 'Map showing the Hispanic population data layer.',
    provider: '<a href="https://www.justicemap.org/">JusticeMap</a>'
  }],
  [OPNVKarte, {
    name: 'OPNVKarte',
    description: 'Public transport map based on OpenStreetMap data.',
    provider: '<a href="https://memomaps.de/">memomaps.de</a>'
  }],
  [WaymarkedTrails_cycling, {
    name: 'Cycling trails',
    description: 'Highlights cycling routes and trails.',
    provider: '<a href="https://waymarkedtrails.org/">Waymarked Trails</a>'
  }],
  [USGS_USImageryTopo, {
    name: 'USGS Imagery Topo',
    description: 'USGS imagery and topographic map tiles.',
    provider: '<a href="https://www.usgs.gov/">U.S. Geological Survey</a>'
  }],
  [Esri_OceanBasemap, {
    name: 'Esri Ocean Basemap',
    description: 'Ocean basemap with bathymetric and marine reference information.',
    provider: '<a href="https://www.esri.com/">Esri</a>'
  }]
]);

const info = L.control({ position: 'topright' });

info.onAdd = function () {
  this._div = L.DomUtil.create('div', 'layer-info');
  this.update();
  return this._div;
};

info.update = function () {
  const active = [];

  for (const [layer, details] of layerInfo) {
    if (map.hasLayer(layer)) {
      active.push(`<div class="layer-info-item">
          <strong>${details.name}</strong><br>
          ${details.description}<br>
          Provider: ${details.provider}
        </div>`
      );
    }
  }

  this._div.innerHTML = active.length ? active.join('<hr>') : 'No listed map layers are currently selected.';

  // Allow links in the panel to be clicked without dragging the map.
  L.DomEvent.disableClickPropagation(this._div);
};

info.addTo(map);

function updateLayerInfo() {
  info.update();
}

// Update when the base map or any overlay changes.
map.on('baselayerchange overlayadd overlayremove', updateLayerInfo);
