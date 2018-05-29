import React from 'react';
import Helmet from 'react-helmet';

const HomePage = props => {
  return (
    <div className="HomePage">
      <Helmet title="Kea Database" />
      <p>HomePage</p>
    </div>
  );
};

export default HomePage;
