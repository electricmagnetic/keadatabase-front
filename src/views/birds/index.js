import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/Banner/Banner';
import Birds from '../../components/Birds/Birds';

class BirdsPage extends Component {
  render() {
    return (
      <div className="BirdsPage">
        <Helmet title="Birds" />
        <Banner size="small">
          <h1>Birds</h1>
        </Banner>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p>Filters go here</p>
              <p>Default filters -- sort by featured birds first (then alphbetical), alive</p>
            </div>
            <div className="col-md-9">
              <Birds />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BirdsPage;
