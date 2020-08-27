import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import BirdSighting from './BirdSighting';
import SightingsMap from './Sighting/SightingsMap';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const API_URL = `${process.env.REACT_APP_API_BASE}/bird_observations/`;

/**
  BirdSightings fetches a series of bird sightings using a given (optional) queryString and renders it using BirdSighting.
  */
const BirdSightings = props => {
  const { queryString, ...others } = props;
  const { data, error, isValidating } = useSWR(`${API_URL}${queryString}`, { dedupingInterval: 0 });

  if (isValidating) {
    return <Loader />;
  } else if (error) {
    return <Error />;
  } else if (data) {
    const birdSightings = data.results;

    // Catch zero sightings so map doesn't attempt to render
    if (birdSightings.length === 0) return null;

    // Intercept type 'map', as this needs rendering as a group on a single map
    if (props.type === 'map')
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
};

BirdSightings.propTypes = {
  queryString: PropTypes.string,
};

BirdSightings.defaultProps = {
  queryString: '',
};

export default BirdSightings;
