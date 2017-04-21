import React, { Component } from 'react';
import Helmet from 'react-helmet';

class SightingDetailPage extends Component {
  render() {
    return (
      <div className="SightingDetailPage">
        <Helmet title="Sighting" />
        <div className="container">
          <h1>Sighting Detail Page</h1>
          <p>{this.props.match.params.id}</p>
        </div>
      </div>
    );
  }
}

export default SightingDetailPage;
