import React from 'react';

const SightingDetailPage = ({ match }) => {
  const id = match.params.id;

  return (
    <div className="SightingDetailPage">
      <span>Sighting profile { id }</span>
    </div>
  );
}

export default SightingDetailPage;
