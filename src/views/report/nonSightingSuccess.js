import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import Page from '../../components/presentation/Page';
import Banner from '../../components/presentation/Banner';

class ReportNonSightingSuccessPage extends Component {
  render() {
    return (
      <div className="SuccessPage">
        <Helmet title="Thanks!" />
        <Banner size="small" additionalClasses="mb-3">
          <h1>Thanks!</h1>
        </Banner>
        <div className="container">
          <section className="mb-3">
            <div className="btn-toolbar" role="toolbar">
              <Link to="/report" className="btn btn-primary mr-2" role="button">
                Report Another
              </Link>
            </div>
          </section>
          <section>
            <Page id={205} hideTitle />
          </section>
        </div>
      </div>
    );
  }
}

export default ReportNonSightingSuccessPage;
