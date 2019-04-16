import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FormatDate from '../helpers/FormatDate';
import './BirdSightingCard.css';

const BirdSightingCard = ({ sighting, selectFeature }) => {
  const feature = { sighting_id: sighting.sighting, ...sighting };
  return (
    <div className="BirdSightingCard card mb-4 card-dull">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <i className="far fa-fw fa-clock" />{' '}
          <FormatDate calendar>
            {sighting.sighting__date_sighted} {sighting.sighting__time_sighted}
          </FormatDate>
        </li>
        <li className="list-group-item bg-white">
          <div className="row">
            <div className="col view">
              <Link className="btn btn-link btn-sm p-0" to={'/sightings/' + sighting.sighting}>
                <i className="fas fa-fw fa-info-circle" /> View
              </Link>
            </div>
            <div className="col locate">
              <button className="btn btn-link btn-sm p-0" onClick={() => selectFeature(feature)}>
                <i className="fas fa-fw fa-search" /> Locate
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

BirdSightingCard.propTypes = {
  sighting: PropTypes.object.isRequired,
  selectFeature: PropTypes.func.isRequired,
};

export default BirdSightingCard;
