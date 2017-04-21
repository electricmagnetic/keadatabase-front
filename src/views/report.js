import React, { Component } from 'react';
import Helmet from 'react-helmet';

class ReportPage extends Component {
  render() {
    return (
      <div className="ReportPage">
        <Helmet title="Report" />
        <div className="container">
          <h1>Report Sighting</h1>
        </div>
      </div>
    );
  }
}

export default ReportPage;
