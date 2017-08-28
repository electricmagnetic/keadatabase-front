import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Page from '../components/wordpress/Page';

class HelpPage extends Component {
  render() {
    return (
      <div className="HelpPage">
        <Helmet title="Help" />
        <div className="container">
          <h1>Help</h1>
          <section>
            <Page id={286} hideTitle />
          </section>
        </div>
      </div>
    );
  }
}

export default HelpPage;
