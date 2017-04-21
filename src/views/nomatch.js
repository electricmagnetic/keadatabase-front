import React, { Component } from 'react';
import Helmet from 'react-helmet';

class NoMatchPage extends Component {
  render() {
    return (
      <div className="NoMatchPage">
        <Helmet title="Page Not Found" />
        <div className="container">
          <h1>Page Not Found</h1>
        </div>
      </div>
    );
  }
}

export default NoMatchPage;
