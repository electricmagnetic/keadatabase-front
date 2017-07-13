import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Banner from '../components/Banner/Banner';

class ReportPage extends Component {
  render() {
    return (
      <div className="ReportPage">
        <Helmet title="Report" />
        <Banner size="small">
          <h1>Report Sighting</h1>
        </Banner>
        <div className="container">
          <p><em>Coming soon...</em></p>
        </div>
      </div>
    );
  }
}

export default ReportPage;
