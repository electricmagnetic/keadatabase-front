import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner/Banner';
import ReportSelector from '../../components/report/ReportSelector';

class ReportPage extends Component {
  render() {
    return (
      <div className="ReportPage">
        <Helmet title="Report" />
        <Banner size="small">
          <h1>Report</h1>
        </Banner>
        <div className="container">
          <ReportSelector />
        </div>
      </div>
    );
  }
}

export default ReportPage;
