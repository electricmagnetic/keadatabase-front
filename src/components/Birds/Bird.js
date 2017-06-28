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
          <h2>bird name</h2>
        </div>
      </div>
    );
  }
}

class BirdCard extends Component {
  render() {
    return(
      <div className="BirdCard">
        <Link to={ '/birds/' + this.props.bird.slug }>
          <img src={ placeholder } alt="placeholder" className="card-image img-responsive" />
        </Link>
        <div className="card-details">
          <Link to={ '/birds/' + this.props.bird.slug }>
            <h2>{ this.props.bird.name }</h2>
          </Link>
          <p>
            { this.props.bird.sex }
            &nbsp;&middot;&nbsp;
            { this.props.bird.status }
            { this.props.bird.get_age != null &&
              ' (' + this.props.bird.get_age + ')'
            }
          </p>
          <p>
            { this.props.bird.study_area }
          </p>
          <p>
            <Link to={ '/birds/' + this.props.bird.slug }>View</Link>
            &nbsp;&middot;&nbsp;
            <Link to="/report">Report</Link>
          </p>
        </div>
      </div>
    );
  }
}

export { BirdFeatured, BirdProfile};
export default BirdCard;
