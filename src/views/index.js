import React from 'react';
import Helmet from 'react-helmet';

const HomePage = props => {
  return (
    <div className="HomePage">
      <Helmet title="Kea Database" />
      <div class="container">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default HomePage;
