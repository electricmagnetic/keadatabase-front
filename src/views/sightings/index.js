import React from 'react';
import Helmet from 'react-helmet';

import SightingsList from '../../components/sightings/SightingsList';
import Banner from '../../components/presentation/Banner';

const SightingsPage = props => {
  return (
    <div className="SightingsPage">
      <Helmet title="Sightings" />
      <Banner size="small">
        <h1>Sightings</h1>
      </Banner>
      <div className="container">
        <SightingsList />
      </div>
    </div>
  );
};

export default SightingsPage;
