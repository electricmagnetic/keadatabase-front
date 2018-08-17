import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner';
import SightingDetail from '../../components/sightings/SightingDetail';
import SightedBirds from '../../components/sightings/SightedBirds';

const SightingDetailPage = ({ match }) => {
  const id = match.params.id;

  return (
    <div className="SightingDetailPage">
      <Helmet title={`#${id} - Sighting`} />

      <section className="mb-4">
        <Banner size="small">
          <h1>Sighting #{id}</h1>
        </Banner>
      </section>

      <SightingDetail id={id}/>

      <SightedBirds id={id}/>
    </div>
  );
};

export default SightingDetailPage;
