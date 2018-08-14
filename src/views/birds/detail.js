import React from 'react';

import BirdProfile from '../../components/birds/BirdProfile';

const BirdDetailPage = ({ match }) => {
  const slug = match.params.slug;

  return (
    <div className="BirdDetailPage">
      <BirdProfile slug={ slug } />
    </div>
  );
};

export default BirdDetailPage;
