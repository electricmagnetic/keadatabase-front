import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Page from '../components/wordpress/Page';

class TermsPage extends Component {
  render() {
    return (
      <div className="TermsPage">
        <Helmet title="Terms/Privacy" />
        <div className="container">
          <h1>Terms of Use &amp; Privacy Policy</h1>
          <Page id={3} hideTitle />
        </div>
      </div>
    );
  }
}

export default TermsPage;
