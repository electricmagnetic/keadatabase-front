import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Page from '../components/wordpress/Page';

class SponsorPage extends Component {
  render() {
    return (
      <div className="SponsorPage">
        <Helmet title="Sponsor A Kea" />
        <div className="container">
          <h1>Sponsor A Kea</h1>
          <section>
            <Page id={221} hideTitle />
          </section>
        </div>
      </div>
    );
  }
}

export default SponsorPage;
