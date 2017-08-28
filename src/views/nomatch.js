import React, { Component } from 'react';
import Helmet from 'react-helmet';

import error from '../assets/img/error.jpg';

class NoMatchPage extends Component {
  render() {
    return (
      <div className="NoMatchPage">
        <Helmet title="Page Not Found" />
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <h1>404: Page Not Found</h1>
              <section>
                <p>
                  <img src={ error } alt="kea on car" className="img-circle" width="128px" />
                </p>
                <p className="lead">
                  Skrark! You seem to have come across a page that doesn't exist.
                </p>
                <p>
                  If you think there's an issue, please let us know.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoMatchPage;
