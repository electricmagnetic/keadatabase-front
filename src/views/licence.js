import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Page from '../components/wordpress/Page';

class LicencePage extends Component {
  render() {
    return (
      <div className="LicencePage">
        <Helmet title="Licence/Copyright" />
        <div className="container">
          <h1>Licence &amp; Copyright</h1>
          <Page id={53} hideTitle />
        </div>
      </div>
    );
  }
}

export default LicencePage;
