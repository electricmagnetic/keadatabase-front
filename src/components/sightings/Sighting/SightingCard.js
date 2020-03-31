import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FormatDateTime from '../../helpers/FormatDateTime';
import generateSummary from './helpers/generateSummary';

import './SightingCard.scss';

const ListItem = ({ icon, children, className }) => (
  <li className={`list-group-item ${className}`}>
    <div className="row">
      <div className="col-1">
        <i className={`fas fa-fw ${icon} mr-2`} />
      </div>
      <div className="col">{children}</div>
    </div>
  </li>
);

/**
  Presents a nicely formatted card for a given sighting.
 */
const SightingCard = ({ sighting, ...others }) => {
  const { className } = others;
  const classNames = ['SightingCard'];
  if (className) classNames.push(className);

  return (
    <div className={classNames.join(' ')}>
      <div className="card card-dull">
        <h2 className="sr-only">Sighting {sighting.id}</h2>
        <ul className="list-group list-group-flush">
          <ListItem icon="fa-map-marker-alt">
            {sighting.geocode}
            <br />
            <small>{sighting.region}</small>
          </ListItem>
          <ListItem icon="fa-calendar">
            <FormatDateTime calendar>
              {sighting.date_sighted} {sighting.time_sighted}
            </FormatDateTime>
          </ListItem>
          <ListItem icon="fa-feather-alt">{generateSummary(sighting)}</ListItem>
          <ListItem icon="fa-user">{sighting.contributor}</ListItem>
          <ListItem icon="fa-info-circle" className="bg-white">
            <Link to={`/sightings/${sighting.id}`}>
              View Observation <small>({`#${sighting.id}`})</small>
            </Link>
          </ListItem>
        </ul>
      </div>
    </div>
  );
};

SightingCard.propTypes = {
  sighting: PropTypes.object.isRequired,
};

export default SightingCard;
