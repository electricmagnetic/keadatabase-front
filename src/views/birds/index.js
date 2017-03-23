import React, { Component } from 'react';

import Birds from '../../components/Birds/Birds';

class BirdsPage extends Component {
  render() {
    return (
      <div className="BirdsPage">
        <div className="container">
          <h1>Birds List Page</h1>
          <Birds />
        </div>
      </div>
    );
  }
}

export default BirdsPage;
