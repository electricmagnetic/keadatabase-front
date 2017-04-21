import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/Banner/Banner';
import Sightings from '../../components/Sightings/Sightings';

class SightingsPage extends Component {
  render() {
    return (
      <div className="SightingsPage">
        <Helmet title="Sightings" />
        <Banner size="small">
          <h1>Sightings</h1>
        </Banner>
        <div className="container">
          <Sightings />
        </div>
      </div>
    );
  }
}

export default SightingsPage;
