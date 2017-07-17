import React, { Component } from 'react';
import PropTypes from 'prop-types';

import generateMarker from '../Helpers/generateMarker';
import Map from '../Map/Map';

class SightingMap extends Component {
  render() {
    const markers = [generateMarker(this.props.sighting)];

    return(
      <div className="SightingMap">
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

SightingMap.propTypes = {
  sighting: PropTypes.object.isRequired
}

export default SightingMap;
