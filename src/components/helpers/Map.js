import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer';

import './Map.css';

class Map extends Component {
  /* Common Google Map setup */

  state = {
    marker: null,
  }

  constructor(props) {
    super(props);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  updateLocation(event) {
    if(this.props.formChange) {
      // Dispatch action (via props function) to update redux-form
      this.props.formChange('point_location.coordinates[0]', event.latLng.lng());
      this.props.formChange('point_location.coordinates[1]', event.latLng.lat());

      // Update local state for marker position change
      this.setState({
        marker: { position: event.latLng, draggable: true }
      });
    }
  }

  handleMapClick(event) {
    // Handles initial setting of marker location
    this.updateLocation(event);
  }

  handleOnDragEnd(event) {
    // Handles marker drag
    this.updateLocation(event);
  }

  render() {
    const { props, state } = this;
    return (
      <GoogleMap
        ref="map"
        defaultZoom={6}
        defaultCenter={{ lat: -43.983333, lng: 170.450000 }}
        mapTypeId="terrain"
        onClick={ this.handleMapClick }
        options={{ streetViewControl: false }}
        >

        { (props.markers && props.cluster) &&
          // Display markers with clusters
          <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={15}
            maxZoom={15}
          >
            { props.markers.map((marker, index) => (
              <Marker
                {...marker}
              />
            )) }
          </MarkerClusterer>
        }

        { (props.markers && !props.cluster) &&
          // Display markers without clustering
          props.markers.map((marker, index) => (
            <Marker
              {...marker}
            />
          ))
        }

        { (props.click && state.marker) &&
          // Display marker if 'click' state set
          <Marker
            {...state.marker}
            onDragEnd={ this.handleOnDragEnd }
          />
        }
      </GoogleMap>
    );
  }
};

Map.propTypes = {
  markers: PropTypes.array,
  cluster: PropTypes.bool,
  click: PropTypes.bool
}

export default withGoogleMap(Map);
