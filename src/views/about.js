import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Page from '../components/WordPress/Page';

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <Helmet title="About" />
        <div className="container">
          <h1>About</h1>
          <Page id={2} hideTitle />
        </div>
      </div>
    );
  }
}

export default AboutPage;
