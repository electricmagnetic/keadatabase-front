import React, { Component } from 'react';
import { connect } from 'react-refetch';
import PropTypes from 'prop-types';

import BirdSighting from './BirdSighting';
import SightingsMap from './Sighting/SightingsMap';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const API_URL = `${process.env.REACT_APP_API_BASE}/sightings/birds/`;

/**
  BirdSightings fetches a series of bird sightings using a given (optional) queryString and renders it using BirdSighting.
  */
class BirdSightings extends Component {
  render() {
    const { birdSightingsFetch, ...others } = this.props;

    if (birdSightingsFetch.pending) {
      return <Loader />;
    } else if (birdSightingsFetch.rejected) {
      return <Error message="Error fetching bird sightings" />;
    } else if (birdSightingsFetch.fulfilled) {
      const birdSightings = birdSightingsFetch.value.results;

      // Catch zero sightings so map doesn't attempt to render
      if (birdSightings.length === 0) return null;

      // Intercept type 'map', as this needs rendering as a group on a single map
      if (this.props.type === 'map')
        return (
          <SightingsMap
            sightings={birdSightings.map(birdSighting => birdSighting.sighting)}
            {...others}
          />
        );
      else
        return birdSightings.map(birdSighting => (
          <BirdSighting birdSighting={birdSighting} key={birdSighting.id} {...others} />
        ));
    } else return null;
  }
}

BirdSightings.propTypes = {
  queryString: PropTypes.string,
};

export default connect(props => ({
  birdSightingsFetch: `${API_URL}${props.queryString ? props.queryString : ''}`,
}))(BirdSightings);
