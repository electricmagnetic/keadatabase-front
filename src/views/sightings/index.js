import React from 'react';
import Helmet from 'react-helmet';

import SightingsList from '../../components/sightings/SightingsList';

const SightingsPage = props => {
  return (
    <div className="SightingsPage">
      <Helmet title="Sightings" />
      <div className="container">
        <h1>Sightings</h1>
        <SightingsList />
      </div>
    </div>
  );
};

export default SightingsPage;
