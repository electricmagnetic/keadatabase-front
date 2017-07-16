import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/Banner/Banner';
import SightingsTable from '../../components/Sightings/SightingsTable';
import SightingsMap from '../../components/Sightings/SightingsMap';

class SightingsPage extends Component {
  render() {
    return (
      <div className="SightingsPage">
        <Helmet title="Sightings" />
        <Banner size="small">
          <h1>Sightings</h1>
        </Banner>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7">
              <SightingsTable />
            </div>
            <div className="col-md-6 col-lg-5">
              <SightingsMap />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SightingsPage;
