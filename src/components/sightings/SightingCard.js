import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FormatDate from '../helpers/FormatDate';
import './SightingCard.css';

const SightingCard = ({ sighting, selectFeature }) => {
  const feature = { sighting_id: sighting.id, ...sighting };
  return (
    <div className="SightingCard card mb-3" onClick={ () => selectFeature(feature) }>
      <div className="card-body">
        <Link to={ '/sightings/' + sighting.id }>
          <span className="badge badge-primary">{ sighting.id }</span>
        </Link>
        <p>
          <FormatDate>{ sighting.date_sighted } { sighting.time_sighted }</FormatDate>,<br />
          Around { sighting.geocode }<br />
          <strong>{ sighting.contributor }</strong><br />
          { sighting.get_sighting_type_display }&nbsp;{ sighting.number }&nbsp;{ sighting.number === 1 ? 'bird' : 'birds' }
        </p>
      </div>
    </div>
  );
};

SightingCard.propTypes = {
  sighting: PropTypes.object.isRequired,
  selectFeature: PropTypes.func.isRequired,
};

export default SightingCard;
