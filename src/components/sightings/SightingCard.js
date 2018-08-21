import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FormatDate from '../helpers/FormatDate';
import './SightingCard.css';

const SightingCard = ({ sighting, selectFeature }) => {
  const feature = { sighting_id: sighting.id, ...sighting };
  return (
    <div className="SightingCard card mb-4 card-dull">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <i className="fas fa-fw fa-map-marker-alt"></i> <strong>{ sighting.geocode }</strong>
        </li>
        <li className="list-group-item">
          <i className="far fa-fw fa-clock"></i> <FormatDate calendar>{ sighting.date_sighted } { sighting.time_sighted }</FormatDate>
        </li>
        <li className="list-group-item">
          <i className="fas fa-fw fa-feather-alt"></i> { sighting.get_sighting_type_display }&nbsp;{ sighting.number }&nbsp;{ sighting.number === 1 ? 'bird' : 'birds' }
        </li>
        <li className="list-group-item">
          <i className="fas fa-fw fa-user"></i> { sighting.contributor } (#{ sighting.id })
        </li>
        <li className="list-group-item bg-white">
          <div className="row">
            <div className="col view">
              <Link className="btn btn-link btn-sm p-0" to={ '/sightings/' + sighting.id }>
                <i className="fas fa-fw fa-info-circle"></i> View
              </Link>
            </div>
            <div className="col locate">
              <button className="btn btn-link btn-sm p-0" onClick={ () => selectFeature(feature) }>
                <i className="fas fa-fw fa-search"></i> Locate
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

SightingCard.propTypes = {
  sighting: PropTypes.object.isRequired,
  selectFeature: PropTypes.func.isRequired,
};

export default SightingCard;
