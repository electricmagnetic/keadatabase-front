import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BirdCard = bird => (
  <div className='card'>
    <div className='card-body'>
      <h2 className="card-title h5"><Link to={ '/birds/' + bird.slug }>{ bird.name }&nbsp;&raquo;</Link></h2>
      <p className="card-text">
        { bird.band_combo }
      </p>
    </div>
  </div>
);

class SightedBirds extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Birds</h2>
      </div>
    );
  }
}

SightedBirds.propTypes = {
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(SightedBirds);
