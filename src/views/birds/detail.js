import React from 'react';

import BirdProfile from '../../components/birds/BirdProfile';
import BirdSightings from '../../components/birds/BirdSightings';

const BirdDetailPage = ({ match }) => {
  const slug = match.params.slug;

  return (
    <div className="BirdDetailPage">
      <BirdProfile slug={slug} />

      <BirdSightings slug={slug} />
    </div>
  );
};

export default BirdDetailPage;
