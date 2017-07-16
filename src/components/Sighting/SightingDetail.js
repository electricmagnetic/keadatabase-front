import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Banner from '../Banner/Banner';

import './SightingDetail.css';

class SightingDetail extends Component {
  render() {
    return(
      <div className="SightingDetail">
        <Helmet title="Sighting #num" />
        <Banner size="small">
          <h1>Sighting #num</h1>
        </Banner>
        <div className="container">
          <p>foo: { this.props.id }</p>
        </div>
      </div>
    );
  }
}

SightingDetail.propTypes = {
  id: PropTypes.string.isRequired
}

export default SightingDetail;
