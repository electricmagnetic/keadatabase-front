import React, { Component } from 'react';

import BirdDetail from '../../components/birds/BirdDetail';
import BirdSightingsTable from '../../components/birdSightings/BirdSightingsTable';
import BirdSightingsMap from '../../components/birdSightings/BirdSightingsMap';

class BirdDetailPage extends Component {
  render() {
    return (
      <div className="BirdDetailPage">
        <BirdDetail slug={this.props.match.params.slug} />
        <div className="container">
          <section>
            <h2>Latest Sightings</h2>
            <div className="row">
              <div className="col-md-6">
                <BirdSightingsTable bird={this.props.match.params.slug} />
              </div>
              <div className="col-md-6">
                <BirdSightingsMap bird={this.props.match.params.slug} />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default BirdDetailPage;
