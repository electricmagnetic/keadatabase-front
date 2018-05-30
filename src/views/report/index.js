import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner';

const ReportPage = props => {
  return (
    <div className="ReportPage">
      <Helmet title="Report" />
      <Banner size="small">
        <h1>Report</h1>
      </Banner>
      <div className="container">
        <h2>Report</h2>
      </div>
    </div>
  );
};

export default ReportPage;
