import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchSightingsIfNeeded } from '../../actions/sightings.js';

import Error from '../../components/Helpers/Error';
import Loader from '../../components/Helpers/Loader';
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
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSightingsIfNeeded());
  }

  render() {

    if (this.props.isFetching) {
      return (<div className="container"><Loader /></div>);
    }
    else if (this.props.isError) {
      return (<div className="container"><Error /></div>);
    }
    else {
      const sightings = this.props.items;
      const markers = generateMarkers(sightings);
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
}

SightingsMap.propTypes = {
  items: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  const { sightingsReducer } = state;

  const {
      isFetching,
      items,
      isError
  } = sightingsReducer || {
    isFetching: true,
    items: [],
    isError: false
  }

  return {
    isFetching,
    items,
    isError
  }
}

export default connect(mapStateToProps)(SightingsMap);
