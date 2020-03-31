import React from 'react';
import Helmet from 'react-helmet';

import Sightings from '../../components/sightings/Sightings';
import Banner from '../../components/presentation/Banner';

const SightingsPage = props => {
  return (
    <div className="SightingsPage">
      <Helmet title="View Observations" />
      <section>
        <Banner size="small">
          <h1>View Observations</h1>
          <p className="lead">Recent 100 observations</p>
        </Banner>
      </section>
      <section className="mb-5 py-3 px-3 py-lg-0 px-lg-0">
        <Sightings type="map" />
      </section>
      <section className="mb-5">
        <div className="container">
          <div className="row">
            <Sightings type="card" className="col-sm-6 col-md-4 col-lg-3 mb-3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SightingsPage;
