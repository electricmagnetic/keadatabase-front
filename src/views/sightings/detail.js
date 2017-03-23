import React, { Component } from 'react';

class SightingDetailPage extends Component {
  render() {
    return (
      <div className="SightingDetailPage">
        <div className="container">
          <h1>Sighting Detail Page</h1>
          <p>{this.props.match.params.id}</p>
        </div>
      </div>
    );
  }
}

export default SightingDetailPage;
