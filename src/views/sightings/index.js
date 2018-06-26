import React from 'react';
import Helmet from 'react-helmet';

import SightingsCards from '../../components/sightings/SightingsCards';
import SightingsMap from '../../components/sightings/SightingsMap';

const SightingsPage = props => {
  return (
    <div className="SightingsPage">
      <Helmet title="Sightings" />
      <SightingsMap />
      <div className="container">
        <SightingsCards />
      </div>
    </div>
  );
};

export default SightingsPage;
