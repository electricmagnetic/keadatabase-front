import React from 'react';
import Helmet from 'react-helmet';

const BirdsPage = props => {
  return (
    <div className="BirdsPage">
      <Helmet title="Birds" />
      <div class="container">
        <h1>Birds</h1>
      </div>
    </div>
  );
};

export default BirdsPage;
