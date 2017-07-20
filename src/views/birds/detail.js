import React, { Component } from 'react';

import BirdProfile from '../../components/Bird/BirdProfile';
import BirdSightingsTable from '../../components/BirdSightings/BirdSightingsTable';
import BirdSightingsMap from '../../components/BirdSightings/BirdSightingsMap';

class BirdDetailPage extends Component {
  render() {
    return (
      <div className="BirdDetailPage">
        <BirdProfile slug={this.props.match.params.slug} />
        <div className="container">
          <h2>Latest Sightings</h2>
          <div className="row">
            <div className="col-md-6">
              <BirdSightingsTable bird={this.props.match.params.slug} />
            </div>
            <div className="col-md-6">
              <BirdSightingsMap bird={this.props.match.params.slug} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BirdDetailPage;
