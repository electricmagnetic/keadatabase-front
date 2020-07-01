import React from 'react';
import Helmet from 'react-helmet';

import BirdSearch from '../../components/search/BirdSearch';

const BirdsPage = props => {
  return (
    <div className="BirdsPage">
      <Helmet title="Birds" />
      <BirdSearch />
    </div>
  );
};

export default BirdsPage;
