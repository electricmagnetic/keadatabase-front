import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import placeholder from '../../assets/img/placeholder.png';
import './Card.css';

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

export default BirdCard;
