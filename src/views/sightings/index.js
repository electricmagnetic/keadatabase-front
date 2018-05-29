import React from 'react';
import Helmet from 'react-helmet';

const SightingsPage = props => {
  return (
    <div className="SightingsPage">
      <Helmet title="Sightings" />
      <div className="container">
        <h1>Sightings</h1>
      </div>
    </div>
  );
};

export default SightingsPage;
