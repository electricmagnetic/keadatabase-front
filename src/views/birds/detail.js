import React, { Component } from 'react';

class BirdDetailPage extends Component {
  render() {
    return (
      <div className="BirdDetailPage">
        <div className="container">
          <h1>Bird Detail Page</h1>
          <p>{this.props.match.params.id}</p>
        </div>
      </div>
    );
  }
}

export default BirdDetailPage;
