import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Page from '../components/WordPress/Page';

class ContactPage extends Component {
  render() {
    return (
      <div className="ContactPage">
        <Helmet title="Contact" />
        <div className="container">
          <h1>Contact</h1>
          <Page id={53} hideTitle />
        </div>
      </div>
    );
  }
}

export default ContactPage;
