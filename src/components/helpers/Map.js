import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer';

import './Map.css';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marker: this.props.marker || null,
      markers: this.props.markers || null
    }

    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
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

  handleMarkerClick(targetMarker) {
   this.setState({
     markers: this.state.markers.map(marker => {
       if (marker === targetMarker) {
         return {
           ...marker,
           showInfo: true
         };
       }
       else {
         // Close other markers when opening new one
         return {
           ...marker,
           showInfo: false
         };
       }
     }),
   });
 }

 handleMarkerClose(targetMarker) {
   this.setState({
     markers: this.state.markers.map(marker => {
       if (marker === targetMarker) {
         return {
           ...marker,
           showInfo: false,
         };
       }
       return marker;
     }),
   });
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
        options={{ streetViewControl: false, fullscreenControl: true }}
        >

        { (state.markers && props.cluster) &&
          <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={15}
            maxZoom={15}
            onMarkerClick={ props.onMarkerClick }
            onMarkerClose={ props.onMarkerClose }
          >
            { state.markers.map((marker, index) => (
              <Marker
                {...marker}
                onClick={ () => this.handleMarkerClick(marker) }
              >
                { marker.showInfo &&
                  <InfoWindow onCloseClick={ () => this.handleMarkerClose(marker) }>
                    <div>{ marker.infoContent }</div>
                  </InfoWindow>
                }
              </Marker>
            )) }
          </MarkerClusterer>
        }

        { (state.markers && !props.cluster) &&
          // Display markers without clustering
          state.markers.map((marker, index) => (
            <Marker
              {...marker}
            />
          ))
        }

        { (state.marker && props.click) &&
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
