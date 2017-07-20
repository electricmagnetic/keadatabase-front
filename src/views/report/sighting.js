import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner/Banner';
import ReportSighting from '../../components/report/sighting/ReportSighting';

class ReportSightingPage extends Component {
  render() {
    return (
      <div className="ReportSightingPage">
        <Helmet title="Report Sighting" />
        <Banner size="small">
          <h1>Report Sighting</h1>
        </Banner>
        <div className="container">
          <ReportSighting />
        </div>
      </div>
    );
  }
}

export default ReportSightingPage;
