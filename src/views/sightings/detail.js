import React from 'react';

import Observation from '../../components/sightings/Sighting';

const SightingDetailPage = ({ match }) => {
  const id = match.params.id;

  return (
    <div className="SightingDetailPage">
      <Observation id={id} type="page" />
    </div>
  );
};

export default SightingDetailPage;
