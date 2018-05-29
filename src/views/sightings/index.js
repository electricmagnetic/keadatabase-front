import React from 'react';
import Helmet from 'react-helmet';

const SightingsPage = props => {
  return (
    <div className="SightingsPage">
      <Helmet title="Sightings" />
      <div class="container">
        <h1>Sightings</h1>
      </div>
    </div>
  );
};

export default SightingsPage;
