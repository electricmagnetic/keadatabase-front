import React, { Component } from 'react';

import Page from '../components/WordPress/Page';

class ContactPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <div className="container">
          <Page id={3} />
        </div>
      </div>
    );
  }
}

export default ContactPage;
