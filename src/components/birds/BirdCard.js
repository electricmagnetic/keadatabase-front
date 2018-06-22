import React from 'react';
import { Link } from 'react-router-dom';

import PrettyBandCombo from '../helpers/PrettyBandCombo';
import ProfilePicture from '../helpers/ProfilePicture';

import './BirdCard.css';

const BirdCard = ({ bird }) => {
  return (
    <div className="BirdCard card">
      <Link to={ '/birds/' + bird.slug }>
        <ProfilePicture bird={ bird } classNames={ ["card-img-top"] } />
      </Link>
      <div className="card-body">
        <h2 className="card-title h5"><Link to={ '/birds/' + bird.slug }>{ bird.name }&nbsp;&raquo;</Link></h2>
        <p className="card-text">
          { bird.sex }&nbsp;{ bird.get_life_stage }<br />{ bird.study_area }
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-light"><PrettyBandCombo bandCombo={ bird.band_combo } /></li>
        <li className="list-group-item">{ bird.band_combo }<br />{ bird.primary_band }</li>
      </ul>
    </div>
  );
};

export default BirdCard;
