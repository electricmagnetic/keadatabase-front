import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner';

const ReportNonSightingPage = props => {
  return (
    <div className="ReportNonSightingPage">
      <Helmet title="Report Non-Sighting" />
      <section className="mb-4">
        <Banner size="small">
          <h1>Report Non-Sighting</h1>
        </Banner>
      </section>
      <section className="mb-4">
        <div className="container">
          Report Non-Sighting
        </div>
      </section>
    </div>
  );
};

export default ReportNonSightingPage;
