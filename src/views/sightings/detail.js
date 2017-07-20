import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/Banner/Banner';
import SightingDetail from '../../components/Sighting/SightingDetail';
import BirdSightingsTable from '../../components/BirdSightings/BirdSightingsTable';
import SightingsMap from '../../components/Sightings/SightingsMap';

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
            <div className="col-md-7">
              <SightingDetail id={id} />
            </div>
            <div className="col-md-5">
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
