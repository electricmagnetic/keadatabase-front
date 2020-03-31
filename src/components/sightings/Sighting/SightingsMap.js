import React, { Component } from 'react';
import { FeatureGroup, ScaleControl, Circle, CircleMarker, Popup } from 'react-leaflet';
import { GeoJSON as LeafletGeoJSON } from 'leaflet';
import PropTypes from 'prop-types';

import BaseMap from '../../map/BaseMap';
import { DEFAULT_BOUNDS } from '../../map/defaults';
import Sighting from '../Sighting';

import './SightingsMap.scss';

/**
  Presents a nicely formatted map of given sightings:
  - If `single` true, disables interactivity, popups and uses real precision for circle.
  - If `single` false, provides an interactive map with popups and a consistent circle size.
  */
class SightingsMap extends Component {
  /**
    Uses a default set of bounds to initialise map.
    */
  constructor(props) {
    super(props);

    this.state = {
      featureBounds: DEFAULT_BOUNDS,
    };

    this.updateFeatureBounds = this.updateFeatureBounds.bind(this);
  }

  /**
    Updates featureBounds in state on a given event.
    */
  updateFeatureBounds(event) {
    this.setState({ featureBounds: event.target.getBounds() });
  }

  /**
    Generate CircleMarker and associated Tooltip for a given sighting.
    */
  createCircleMarker = sighting => (
    <CircleMarker
      center={LeafletGeoJSON.coordsToLatLng(sighting.point_location.coordinates)}
      color="orange"
      key={sighting.id}
      radius={10}
    >
      <Popup className="SightingPopup" closeButton={false}>
        <Sighting sighting={sighting} type="card" />
      </Popup>
    </CircleMarker>
  );

  /**
    Generate single Circle without Tooltip, better used for single sightings
    */
  createCircle = sighting => (
    <Circle
      center={LeafletGeoJSON.coordsToLatLng(sighting.point_location.coordinates)}
      color="red"
      key={sighting.id}
      radius={sighting.precision}
    />
  );

  render() {
    const { sightings, single } = this.props;

    const disableInteractivityProperties = {
      zoomControl: false,
      dragging: false,
      doubleClickZoom: false,
      touchZoom: false,
      scrollWheelZoom: false,
      boxZoom: false,
      tap: false,
    };
    const boundsOptions = {
      maxZoom: 13,
    };

    return (
      <div className="SightingsMap">
        <BaseMap
          boundsOptions={boundsOptions}
          bounds={this.state.featureBounds}
          {...(single && disableInteractivityProperties)}
        >
          <FeatureGroup onAdd={event => this.updateFeatureBounds(event)}>
            {single
              ? sightings.map(sighting => this.createCircle(sighting))
              : sightings.map(sighting => this.createCircleMarker(sighting))}
          </FeatureGroup>
          <ScaleControl />
        </BaseMap>
      </div>
    );
  }
}

SightingsMap.propTypes = {
  sightings: PropTypes.array.isRequired,
  single: PropTypes.bool.isRequired,
};

SightingsMap.defaultProps = {
  single: false,
};

export default SightingsMap;
