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
          <h2>Latest Sightings</h2>
          <div className="row">
            <div className="col-md-6">
              <SightingsTable />
            </div>
            <div className="col-md-6">
              <SightingsMap />
            </div>
          </div>
          {/* TODO: <h2>Latest Non-Sightings</h2> */}
        </div>
      </div>
    );
  }
}

export default SightingsPage;
