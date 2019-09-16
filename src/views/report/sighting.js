import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner';
import ReportSighting from '../../components/report/ReportSighting';

const ReportSightingPage = props => {
  return (
    <div className="ReportSightingPage">
      <Helmet title="Report Observation" />
      <section className="mb-4">
        <Banner size="small">
          <h1>Report Observation</h1>
        </Banner>
      </section>
      <section className="mb-4">
        <div className="container">
          <ReportSighting />
        </div>
      </section>
    </div>
  );
};

export default ReportSightingPage;
