import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PrettyBandCombo from '../helpers/PrettyBandCombo';
import ProfilePicture from '../helpers/ProfilePicture';

import './BirdCard.css';

class BirdCard extends Component {
  render() {
    const bird = this.props.bird;
    const isDead = bird.status === 'Dead' ? true : false;

    return(
      <div className="BirdCard">
        <Link to={ '/birds/' + bird.slug }>
          { bird.bird_extended
            ?
              <ProfilePicture
                profilePicture={ bird.bird_extended.profile_picture }
                alt={ bird.name }
                isDead={ isDead }
              />
            :
              <ProfilePicture />
          }
        </Link>
        <div className="card-details">
          <Link to={ '/birds/' + bird.slug }>
            <h2>{ bird.name }&nbsp;&raquo;</h2>
          </Link>
          <p className="details">
            { bird.get_life_stage } { bird.sex }<br />
            { bird.study_area }{ bird.primary_band && <span className="primaryband"> &middot; { bird.primary_band }</span> }
          </p>
          <p className="bandcombo">
            { bird.band_combo &&
              <PrettyBandCombo band={ bird.band_combo } />
            }
          </p>
          { isDead &&
            <p className="status">
              <span className="glyphicon glyphicon-remove"></span>
            </p>
          }
        </div>
      </div>
    );
  }
}

export default BirdCard;
