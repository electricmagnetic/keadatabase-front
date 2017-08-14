import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PrettyBandCombo from '../helpers/PrettyBandCombo';
import ProfilePicture from '../helpers/ProfilePicture';

import './BirdCard.css';

class BirdCard extends Component {
  render() {
    const bird = this.props.bird;
    /*const isDead = bird.status === 'Dead' ? true : false;*/

    return(
      <div className="BirdCard">
        <Link to={ '/birds/' + bird.slug }>
          {/* isDead && <span className="is-dead glyphicon glyphicon-remove"></span> */}
          { bird.bird_extended
            ?
              <ProfilePicture
                profilePicture={ bird.bird_extended.profile_picture }
                alt={ bird.name }
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
            { bird.study_area }
          </p>
          <p className="bandcombo">
            { bird.band_combo &&
              <PrettyBandCombo band={ bird.band_combo } />
            }
          </p>
        </div>
      </div>
    );
  }
}

export default BirdCard;
