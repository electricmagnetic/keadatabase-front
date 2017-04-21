import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Birds from '../../components/Birds/Birds';

class BirdsPage extends Component {
  render() {
    return (
      <div className="BirdsPage">
        <Helmet title="Birds" />
        <div className="container">
          <h1>Birds List Page</h1>
          <Birds />
        </div>
      </div>
    );
  }
}

export default BirdsPage;
