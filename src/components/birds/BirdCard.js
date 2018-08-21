import React from 'react';
import { Link } from 'react-router-dom';

import PrettyBandCombo from '../helpers/PrettyBandCombo';
import ProfilePicture from '../helpers/ProfilePicture';

import './BirdCard.css';

const BirdCard = ({ bird }) => {
  var details = [];
  const isDead = bird.status === 'Dead' ? true : false;

  if (isDead) {
    details.push('Deceased');
  }

  details.push(bird.get_life_stage);
  details.push(bird.sex);

  if (bird.primary_band) {
    details.push('·');
    details.push(bird.primary_band);
  }

  return (
    <div className="BirdCard card card-dull mb-4">
      <ProfilePicture bird={ bird } classNames={ ["card-img-top"] } isDead={ isDead } asLink />
      <div className="card-body">
        <h2 className="card-title h5 mb-1"><Link to={ '/birds/' + bird.slug }>{ bird.name }&nbsp;&raquo;</Link></h2>
        <p className="card-text mb-0">
          <strong>{ details.join(' ') }</strong>
        </p>
        <PrettyBandCombo bandCombo={ bird.band_combo } />
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <i className="far fa-fw fa-circle"></i> { bird.band_combo }
        </li>
        <li className="list-group-item">
          <i className="fas fa-fw fa-map-marker-alt"></i> { bird.study_area }
        </li>
      </ul>
    </div>
  );
};

export default BirdCard;
