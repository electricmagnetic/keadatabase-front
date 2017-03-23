import React, { Component } from 'react';

import Page from '../components/WordPress/Page';

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <div className="container">
          <Page id={2} />
        </div>
      </div>
    );
  }
}

export default AboutPage;
