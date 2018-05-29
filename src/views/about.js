import React from 'react';
import Helmet from 'react-helmet';

const AboutPage = props => {
  return (
    <div className="AboutPage">
      <Helmet title="About" />
      <div class="container">
        <h1>About</h1>
      </div>
    </div>
  );
};

export default AboutPage;
