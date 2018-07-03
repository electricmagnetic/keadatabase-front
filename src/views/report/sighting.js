import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner';

const ReportSightingPage = props => {
  return (
    <div className="ReportSightingPage">
      <Helmet title="Report Sighting" />
      <section className="mb-4">
        <Banner size="small">
          <h1>Report Sighting</h1>
        </Banner>
      </section>
      <section className="mb-4">
        <div className="container">
          Report Sighting
        </div>
      </section>
    </div>
  );
};

export default ReportSightingPage;
