import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet';

import { DEFAULT_ZOOM, DEFAULT_BOUNDS } from './defaults';

import './BaseMap.scss';

/**
  Creates a Leaflet map using Mapbox (lowest zoom levels), and the LINZ Data Service (Topo250, Topo50).
  Layers have some overlap to allow for the new layers to load.
  */
class BaseMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        center: DEFAULT_BOUNDS.getCenter(),
        zoom: DEFAULT_ZOOM,
      },
    };
  }

  render() {
    const { children } = this.props;
    return (
      <LeafletMap
        className="map"
        viewport={this.state.viewport}
        minZoom={6}
        maxZoom={14}
        maxBounds={DEFAULT_BOUNDS}
        {...this.props}
      >
        <TileLayer
          attribution="Mapbox"
          url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`}
          maxZoom={10}
        />
        <TileLayer
          url={`https://tiles-{s}.data-cdn.linz.govt.nz/services;key=${process.env.REACT_APP_LINZ_API_KEY}/tiles/v4/layer=50798/EPSG:3857/{z}/{x}/{y}.png`}
          minZoom={10}
          maxZoom={12}
          subdomains={'abcd'}
        />
        <TileLayer
          url={`https://tiles-{s}.data-cdn.linz.govt.nz/services;key=${process.env.REACT_APP_LINZ_API_KEY}/tiles/v4/layer=50767/EPSG:3857/{z}/{x}/{y}.png`}
          attribution="LINZ, licensed for reuse (CC BY 4.0)."
          minZoom={12}
          subdomains={'abcd'}
        />
        {children}
      </LeafletMap>
    );
  }
}

export default BaseMap;
