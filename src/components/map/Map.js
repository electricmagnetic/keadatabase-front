import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Source, ZoomControl } from "react-mapbox-gl";

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


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: props.center || [170.45, -43.983333],
      zoom: props.zoom || [5.2],
    };
  }

  componentDidUpdate(prevProps) {
    // Update center of the map but not when center is unset
    if (this.props.center && this.props.center !== prevProps.center) {
      this.setState({
        center: this.props.center
      });
    }
  }

  render() {
    const { onClick, children, height } = this.props;
    return (
      <MapboxMap
        style="mapbox://styles/mapbox/outdoors-v9"
        containerStyle={{
          height: height || "640px",
          width: "100%",
        }}
        center={ this.state.center }
        zoom={ this.state.zoom }
        onClick={onClick}
      >
        <ZoomControl
          zoomDiff={1}
        />
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
  }
}

export default Map;
