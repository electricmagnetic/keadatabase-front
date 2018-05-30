import React from 'react';
import Helmet from 'react-helmet';

import Page from '../components/presentation/Page';

const AboutPage = props => {
  return (
    <div className="AboutPage">
      <Helmet title="About" />
      <div className="container">
        <h1>About</h1>
        <Page id={2} />
      </div>
    </div>
  );
};

export default AboutPage;
