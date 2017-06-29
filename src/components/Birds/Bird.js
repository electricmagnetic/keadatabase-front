import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import placeholder from '../../assets/img/placeholder.png';
import './Bird.css';

class BirdFeatured extends Component {
  render() {
    return(
      <div className="BirdFeatured">
        <div className="container">
          <p>Featured Bird!</p>
          <h2>bird name</h2>
        </div>
      </div>
    );
  }
}

class BirdProfile extends Component {
  render() {
    return(
      <div className="BirdProfile">
        <div className="container">
          <h2>{ this.props.id }</h2>
        </div>
      </div>
    );
  }
}

class BirdCard extends Component {
  render() {
    const bird = this.props.bird;
    return(
      <div className="BirdCard">
        { bird.bird_extended && bird.bird_extended.is_featured && <span className="extended glyphicon glyphicon-star"></span>}
        <Link to={ '/birds/' + bird.slug }>
          {bird.bird_extended && bird.bird_extended.profile_picture
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
            { bird.band_combo }
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

export { BirdFeatured, BirdProfile };
export default BirdCard;
