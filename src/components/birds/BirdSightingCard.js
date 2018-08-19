import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FormatDate from '../helpers/FormatDate';
import './BirdSightingCard.css';

const BirdSightingCard = ({ sighting, selectFeature }) => {
  const feature = { sighting_id: sighting.sighting, ...sighting };
  return (
    <div className='BirdSightingCard card' onClick={ () => selectFeature(feature) }>
      <div className='card-body'>
        <p className='card-text'>
          <FormatDate>{ sighting.sighting__date_sighted } { sighting.sighting__time_sighted }</FormatDate>
        </p>
        <div className='row justify-content-between'>
          <div className='col'>
            <span className="badge badge-primary">{ sighting.sighting }</span>
          </div>
          <div className='col'>
            <Link to={ '/sightings/' + sighting.sighting }>
              <small>View sighting&nbsp;&raquo;</small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BirdSightingCard.propTypes = {
  sighting: PropTypes.object.isRequired,
  selectFeature: PropTypes.func.isRequired,
};

export default BirdSightingCard;
