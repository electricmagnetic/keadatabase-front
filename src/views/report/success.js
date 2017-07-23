import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import Page from '../../components/wordpress/Page';
import Banner from '../../components/presentation/Banner/Banner';

class ReportSuccessPage extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div className="SuccessPage">
        <Helmet title="Thanks!" />
        <Banner size="small">
          <h1>Thanks!</h1>
        </Banner>
        <div className="container">
          <section>
            <div className="btn-toolbar" role="toolbar">
              <Link to="/report" className="btn btn-success" role="button">
                <span className="glyphicon glyphicon-repeat" aria-hidden="true"></span> Report Another
              </Link>
              { id &&
                <Link to={'/sightings/' + this.props.match.params.id } className="btn btn-default" role="button">
                  <span className="glyphicon glyphicon-share-alt" aria-hidden="true"></span> View Sighting
                </Link>
              }
            </div>
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
