import React from 'react';
import Helmet from 'react-helmet';

import Page from '../components/presentation/Page';
import Posts from '../components/presentation/Posts';

const HomePage = props => {
  return (
    <div className="HomePage">
      <Helmet title="Kea Database" />
      <div className="container">
        <h1>Home</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Page id={24} />
          </div>
          <div className="col-md-6">
            <Page id={27} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Posts />
          </div>
          <div className="col-md-6">
            <p>Recent Sightings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
