import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner/Banner';
import SightingDetail from '../../components/sightings/SightingDetail';
import BirdSightingsTable from '../../components/birdSightings/BirdSightingsTable';
import SightingsMap from '../../components/sightings/SightingsMap';

class SightingDetailPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <div className="SightingDetailPage">
        <Helmet title={'#' + id + ' - Sighting'} />
        <Banner size="small">
          <h1>Sighting #{ id }</h1>
        </Banner>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <SightingDetail id={id} />
            </div>
            <div className="col-md-6">
              <SightingsMap id={id} />
            </div>
          </div>
          <BirdSightingsTable sighting={id} />
        </div>
      </div>
    );
  }
}

export default SightingDetailPage;
