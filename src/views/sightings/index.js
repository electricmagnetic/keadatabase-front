import React from 'react';
import Helmet from 'react-helmet';

import SightingsList from '../../components/sightings/SightingsList';
import SightingsMap from '../../components/sightings/SightingsMap';

const SightingsPage = props => {
  return (
    <div className="SightingsPage">
      <Helmet title="Sightings" />
      <SightingsMap />
      <div className="container">
        <SightingsList />
      </div>
    </div>
  );
};

export default SightingsPage;
