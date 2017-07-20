import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer';

import './Map.css';

const Map = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={6}
    defaultCenter={{ lat: -43.983333, lng: 170.450000 }}
    mapTypeId="terrain"
    >
    { props.markers &&
      <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={20}
        maxZoom={15}
      >
        { props.markers.map((marker, index) => (
          <Marker
            {...marker}
          />
        )) }
      </MarkerClusterer>
    }
  </GoogleMap>
));

Map.propTypes = {
  markers: PropTypes.array
}

export default Map;
