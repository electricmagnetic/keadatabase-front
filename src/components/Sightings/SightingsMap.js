import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from '../Map/Map';

function generateMarkers(sightings) {
  return sightings.map(sighting => ({
    position: {
      lng: sighting.point_location.coordinates[0],
      lat: sighting.point_location.coordinates[1]
    },
    key: sighting.id,
    showInfo: false,
    infoContent: (
      sighting.date + sighting.time
    )
  }));
}

class SightingsMap extends Component {
  render() {
    const markers = generateMarkers(this.props.sightings);

    return(
      <div className="SightingsMap">
        <section>
          <Map
             containerElement={ <div className="map-container" /> }
             mapElement={ <div className="map-element" /> }
             markers={ markers }
           />
        </section>
      </div>
    );
  }
}

SightingsMap.propTypes = {
  sightings: PropTypes.array.isRequired
}

export default SightingsMap;
