import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PrettyBandCombo from '../Helpers/PrettyBandCombo';

import placeholder from '../../assets/img/placeholder_thumbnail.png';
import './BirdCard.css';

class BirdCard extends Component {
  render() {
    const bird = this.props.bird;
    return(
      <div className="BirdCard">
        { bird.bird_extended && bird.bird_extended.is_featured && <span className="featured glyphicon glyphicon-star"></span>}
        <Link to={ '/birds/' + bird.slug }>
          { bird.bird_extended && bird.bird_extended.profile_picture
            ? <img src={ bird.bird_extended.profile_picture.thumbnail } alt={ bird.name } className="card-image img-responsive" />
            : <img src={ placeholder } alt="placeholder" className="card-image img-responsive" />
          }
        </Link>
        <div className="card-details">
          <Link to={ '/birds/' + bird.slug }>
            <h2>{ bird.name }</h2>
          </Link>
          <p className="details">
            { bird.get_life_stage } { bird.sex }
          </p>
          <p className="bandcombo">
            { bird.band_combo &&
              <PrettyBandCombo band={ bird.band_combo } />
            }
          </p>
          <p className="links">
            <Link to={ '/birds/' + bird.slug }>View</Link>
            &nbsp;&middot;&nbsp;
            <Link to="/report">Report</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default BirdCard;
