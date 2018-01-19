import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner/Banner';
import SightingsTable from '../../components/sightings/SightingsTable';
import SightingsMap from '../../components/sightings/SightingsMap';

class SightingsPage extends Component {
  render() {
    return (
      <div className="SightingsPage">
        <Helmet title="Sightings" />
        <Banner size="small">
          <h1>Sightings</h1>
        </Banner>
        <div className="container">
          <section>
            <SightingsMap cluster />
          </section>
          <section>
            <h2>Recent Sightings</h2>
            <small>Showing last 250 sightings</small>
            <SightingsTable />
          </section>
          {/* TODO: <h2>Latest Non-Sightings</h2> */}
        </div>
      </div>
    );
  }
}

export default SightingsPage;
