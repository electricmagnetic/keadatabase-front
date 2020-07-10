import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import Sighting from './Sighting';
import SightingsMap from './Sighting/SightingsMap';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const API_URL = `${process.env.REACT_APP_API_BASE}/sightings/sightings/`;

/**
  Sightings fetches a series of sightings using a given (optional) queryString and renders it using Sighting.
  */
const Sightings = props => {
  const { queryString, ...others } = props;
  const { data, error, isValidating } = useSWR(`${API_URL}${queryString}`, { dedupingInterval: 0 });

  if (isValidating) {
    return <Loader />;
  } else if (error) {
    return <Error />;
  } else if (data) {
    const sightings = data.results;

    // Intercept type 'map', as this needs rendering as a group on a single map
    if (props.type === 'map') return <SightingsMap sightings={sightings} {...others} />;
    else
      return sightings.map(sighting => (
        <Sighting sighting={sighting} key={sighting.id} {...others} />
      ));
  } else return null;
};

Sightings.propTypes = {
  queryString: PropTypes.string,
};

Sightings.defaultProps = {
  queryString: '',
};

export default Sightings;
