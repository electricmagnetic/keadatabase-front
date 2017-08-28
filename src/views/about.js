import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Page from '../components/wordpress/Page';

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <Helmet title="About" />
        <div className="container">
          <h1>About</h1>
          <section>
            <Page id={2} hideTitle />
          </section>
        </div>
      </div>
    );
  }
}

export default AboutPage;
