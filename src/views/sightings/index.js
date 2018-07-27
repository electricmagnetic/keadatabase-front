import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner';
import SightingsCards from '../../components/sightings/SightingsCards';
import SightingsMap from '../../components/sightings/SightingsMap';
import SightingsSearchForm from '../../components/sightings/SightingsSearchForm';

const SightingsPage = props => {
  return (
    <div className="SightingsPage">
      <Helmet title="Sightings" />
      <SightingsMap />

      <Banner size="small" additionalClasses="mb-3">
        <SightingsSearchForm />
      </Banner>

      <div className="container">
        <SightingsCards />
      </div>
    </div>
  );
};

export default SightingsPage;
