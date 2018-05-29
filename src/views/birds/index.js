import React from 'react';
import Helmet from 'react-helmet';

import BandCombosList from '../../components/bandCombos/BandCombosList';
import BandComboSearchForm from '../../components/bandCombos/BandComboSearchForm';

const BirdsPage = props => {
  return (
    <div className="BirdsPage">
      <Helmet title="Birds" />
      <div className="container">
        <h1>Birds</h1>
        <BandComboSearchForm />
        <BandCombosList />
      </div>
    </div>
  );
};

export default BirdsPage;
