import React, { Component } from 'react';
import { connect } from 'react-refetch';
import PropTypes from 'prop-types';

import Sighting from './Sighting';
import SightingsMap from './Sighting/SightingsMap';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const API_URL = `${process.env.REACT_APP_API_BASE}/sightings/sightings/`;

/**
  Sightings fetches a series of sightings using a given (optional) queryString and renders it using Sighting.
  */
class Sightings extends Component {
  render() {
    const { sightingsFetch, ...others } = this.props;

    if (sightingsFetch.pending) {
      return <Loader />;
    } else if (sightingsFetch.rejected) {
      return <Error message="Error fetching sightings" />;
    } else if (sightingsFetch.fulfilled) {
      const sightings = sightingsFetch.value.results;

      // Intercept type 'map', as this needs rendering as a group on a single map
      if (this.props.type === 'map') return <SightingsMap sightings={sightings} {...others} />;
      else
        return sightings.map(sighting => (
          <Sighting sighting={sighting} key={sighting.id} {...others} />
        ));
    } else return null;
  }
}

Sightings.propTypes = {
  queryString: PropTypes.string,
};

export default connect(props => ({
  sightingsFetch: `${API_URL}${props.queryString ? props.queryString : ''}`,
}))(Sightings);
