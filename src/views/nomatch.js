import React from 'react';
import Helmet from 'react-helmet';

const NoMatchPage = props => {
  return (
    <div className="NoMatchPage">
      <Helmet title="Page Not Found" />
      <div className="container">
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default NoMatchPage;
