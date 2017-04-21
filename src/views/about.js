import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Page from '../components/WordPress/Page';

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <Helmet title="About" />
        <div className="container">
          <Page id={2} />
        </div>
      </div>
    );
  }
}

export default AboutPage;
