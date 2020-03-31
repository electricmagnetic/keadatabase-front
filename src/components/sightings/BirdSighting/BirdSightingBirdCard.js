import React from 'react';
import PropTypes from 'prop-types';

import Bird from '../../birds/Bird';
import getPicture from '../../birds/Bird/helpers/getPicture';

/**
  If bird is unknown/unmoderated, present information that is currently known.
  */
const UnknownBirdCard = ({ birdSighting }) => (
  <div className="UnknownBirdCard">
    <div className="card card-dull">
      <img src={getPicture()} alt="Bird silhouette" className="card-img-top" />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <i className="far fa-fw fa-circle mr-2" />
          {birdSighting.get_banded_display}
        </li>
        {(birdSighting.band_combo ||
          birdSighting.get_life_stage_guess_display ||
          birdSighting.get_sex_guess_display) && (
          <li className="list-group-item">
            {birdSighting.band_combo ? (
              <>{birdSighting.band_combo}</>
            ) : (
              <>
                {birdSighting.get_life_stage_guess_display} {birdSighting.get_sex_guess_display}
              </>
            )}
          </li>
        )}
      </ul>
    </div>
  </div>
);

/**
  Presents a card about a given bird as part of an BirdSighting (given a specified Sighting,
  show either the Bird (if known) or given information about a bird).
  */
const BirdSightingBirdCard = ({ birdSighting, ...others }) => {
  const { className } = others;
  const classNames = ['BirdSightingBirdCard'];
  if (className) classNames.push(className);

  return (
    <div className={classNames.join(' ')}>
      {birdSighting.bird ? (
        <Bird bird={birdSighting.bird} type="card" />
      ) : (
        <UnknownBirdCard birdSighting={birdSighting} />
      )}
    </div>
  );
};

BirdSightingBirdCard.propTypes = {
  birdSighting: PropTypes.object.isRequired,
};

export default BirdSightingBirdCard;
