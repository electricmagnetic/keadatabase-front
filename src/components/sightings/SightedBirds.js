import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getBirdSightingsById } from '../../actions/birdSightings';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import ProfilePicture from '../helpers/ProfilePicture';
import './SightedBirds.css';

const BirdCard = ({ birdSighting }) => {
  const matched = birdSighting.bird ? true : false;
  const known = !matched && (birdSighting.life_stage_guess || birdSighting.sex_guess) ? true : false;
  const banded = birdSighting.band_combo ? true : false;

  let name = <em>Unknown</em>;
  if (matched) {
    name = <Link to={ '/birds/' + birdSighting.bird.slug }>{ birdSighting.bird.name }&nbsp;&raquo;</Link>;
  } else if (known) {
    name = `${birdSighting.get_life_stage_guess_display || ''} ${birdSighting.get_sex_guess_display || ''}`;
  } else if (banded) {
    name = <em>Unmatched</em>;
  }

  const bandCombo = banded
    ? birdSighting.band_combo
    : <em>{ birdSighting.get_banded_display }</em>;

  return (
    <div className="col-6 col-sm-4 col-md-3">
      <div className="card mb-3">
        <ProfilePicture bird={ birdSighting.bird } classNames={ ["card-img-top"] } asLink={ matched } />
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <p className="card-text">{ bandCombo }</p>
        </div>
      </div>
    </div>
  );
};

class SightedBirds extends Component {
  componentDidMount() {
    const { id, dispatch } = this.props;
    dispatch(getBirdSightingsById(id));
  }

  render() {
    const { birdSightings } = this.props;

    if (birdSightings.pending) return <Loader />;
    else if (birdSightings.rejected) return <Error reason={ birdSightings.value.message }/>;
    else if (birdSightings.fulfilled) {
      if (!birdSightings.value.results || birdSightings.value.results.length === 0) {
        return <span className="no-sightings"></span>;
      }

      return (
        <div className="SightedBirds container">
          <h2>Birds sighted</h2>
          <div className="row">
            {birdSightings.value.results.map(birdSighting => (
              <BirdCard birdSighting={ birdSighting } key={ birdSighting.id } />
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
