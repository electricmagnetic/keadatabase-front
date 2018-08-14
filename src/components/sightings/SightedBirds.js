import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getBirdSightings } from '../../actions/birdSightings';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const BirdCard = ({ bird }) => {
  let name = 'Unknown';
  if (bird.bird) {
    name = <Link to={ '/birds/' + bird.bird }>{ bird.get_bird_display }&nbsp;&raquo;</Link>;
  } else if (bird.get_life_stage_guess_display || bird.get_sex_guess_display) {
    name = `${bird.get_life_stage_guess_display} ${bird.get_sex_guess_display}`;
  }

  const bandCombo = bird.band_combo
    ? bird.band_combo
    : bird.get_banded_display;

  return (
    <div className='col-6 col-md-3'>
      <div className='card'>
        <div className='card-body'>
          <h2 className="card-title h5">{ name }</h2>
          <p className="card-text">
            { bandCombo }
          </p>
        </div>
      </div>
    </div>
  );
};

class SightedBirds extends Component {
  componentDidMount() {
    const { id, dispatch } = this.props;
    dispatch(getBirdSightings(id));
  }

  render() {
    const { birdSightings } = this.props;

    if (birdSightings.pending) return <Loader />;
    else if (birdSightings.rejected) return <Error reason={ birdSightings.value.message }/>;
    else if (birdSightings.fulfilled) {

      return (
        <div className='container'>
          <h2>Birds</h2>
          <div className='row'>
            {birdSightings.value.results.map(bird => (
              <BirdCard bird={ bird } key={ bird.id } />
            ))}
          </div>
        </div>
      );
    }
    else return null;
  }
}

SightedBirds.propTypes = {
  id: PropTypes.string.isRequired,
  birdSightings: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  birdSightings: state.birdSightings,
});

export default connect(mapStateToProps)(SightedBirds);
