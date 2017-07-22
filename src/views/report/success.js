import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import Page from '../../components/wordpress/Page';
import Banner from '../../components/presentation/Banner/Banner';

class ReportSuccessPage extends Component {
  render() {
    return (
      <div className="SuccessPage">
        <Helmet title="Thanks!" />
        <Banner size="small">
          <h1>Thanks!</h1>
        </Banner>
        <div className="container">
          <section>
            <Link to="/report" className="btn btn-success" role="button">
              <span className="glyphicon glyphicon-repeat" aria-hidden="true"></span> Report Another
            </Link>
          </section>
          <section>
            <Page id={191} hideTitle />
          </section>
          {/* TODO: Most *recent* logged sightings */}
        </div>
      </div>
    );
  }
}

export default ReportSuccessPage;
