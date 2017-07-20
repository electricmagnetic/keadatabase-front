import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner/Banner';
import ReportNonSighting from '../../components/report/nonSighting/ReportNonSighting';

class ReportNonSightingPage extends Component {
  render() {
    return (
      <div className="ReportNonSightingPage">
        <Helmet title="Report Non-Sighting" />
        <Banner size="small">
          <h1>Report Non-Sighting</h1>
        </Banner>
        <div className="container">
          <ReportNonSighting />
        </div>
      </div>
    );
  }
}

export default ReportNonSightingPage;
