import React from 'react';
import Helmet from 'react-helmet';

import Sightings from '../../components/sightings/Sightings';

const SightingsPage = props => {
  return (
    <div className="SightingsPage">
      <Helmet title="Sightings" />

      <Sightings />
    </div>
  );
};

export default SightingsPage;
