import React, { Component } from 'react';

import LatestSightings from '../../components/Sightings/LatestSightings';

class SightingsPage extends Component {
  render() {
    return (
      <div className="SightingsPage">
        <div className="container">
          <h1>Sightings List Page</h1>
          <LatestSightings />
        </div>
      </div>
    );
  }
}

export default SightingsPage;
