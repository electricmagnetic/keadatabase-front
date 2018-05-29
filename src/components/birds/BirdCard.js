import React from 'react';
import { Link } from 'react-router-dom';

import ProfilePicture from '../helpers/ProfilePicture';

import './BirdCard.css';

const BirdCard = ({ bird }) => {
  return (
    <div className="BirdCard card">
      <ProfilePicture bird={ bird } classNames={ ["card-img-top"] } />
      <div className="card-body">
        <h2 className="card-title h5"><Link to={ '/birds/' + bird.slug }>{ bird.name }&nbsp;&raquo;</Link></h2>
        <p className="card-text">
          { bird.get_life_stage }&nbsp;{ bird.sex }&nbsp;{ bird.study_area }
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{ bird.band_combo }</li>
        <li className="list-group-item">{ bird.primary_band }</li>
      </ul>
    </div>
  );
};

export default BirdCard;
