import React from 'react';
import ReactMapboxGl, { Layer, Source } from "react-mapbox-gl";

import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxMap = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_API_KEY,
  minZoom: 5.2,
  maxZoom: 15
});

const RASTER_SOURCE_OPTIONS = {
  "type": "raster",
  "tiles": [
    `https://tiles-a.data-cdn.linz.govt.nz/services;key=${process.env.REACT_APP_LINZ_API_KEY}/tiles/v4/layer=50767/EPSG:3857/{z}/{x}/{y}.png`
  ],
  "tileSize": 256
};


const Map = ({ children }) => {
  return (
    <MapboxMap
      style="mapbox://styles/mapbox/outdoors-v9"
      containerStyle={{
        height: "640px",
        width: "100%"
      }}
      center={ [170.45, -43.983333] }
      zoom={ [5.2] }
      >
        <Source
          id="topo50"
          tileJsonSource={RASTER_SOURCE_OPTIONS}
        />
        <Layer
          id="topo50"
          type="raster"
          sourceId="topo50"
        />
        { children }
    </MapboxMap>
  );
};

export default Map;
