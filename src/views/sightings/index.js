import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner';
import SightingsCards from '../../components/sightings/SightingsCards';
import SightingsMap from '../../components/sightings/SightingsMap';

const SightingsPage = props => {
  return (
    <div className="SightingsPage">
      <Helmet title="Sightings" />
      <SightingsMap />

      <Banner size="small" additionalClasses="mb-3">
        <p>Sightings Search Form</p>
      </Banner>

      <div className="container">
        <SightingsCards />
      </div>
    </div>
  );
};

export default SightingsPage;
