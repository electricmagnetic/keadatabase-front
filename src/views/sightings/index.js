import React, { Component } from 'react';
import Helmet from 'react-helmet';

import LatestSightings from '../../components/Sightings/LatestSightings';

class SightingsPage extends Component {
  render() {
    return (
      <div className="SightingsPage">
        <Helmet title="Sightings" />
        <div className="container">
          <h1>Sightings List Page</h1>
          <LatestSightings />
        </div>
      </div>
    );
  }
}

export default SightingsPage;
