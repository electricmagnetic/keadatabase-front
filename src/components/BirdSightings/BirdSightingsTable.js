import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBirdSightingsIfNeeded } from '../../actions/birdSightings.js';

import SightingsDate from '../Helpers/SightingsDate';
import Error from '../Helpers/Error';
import Loader from '../Helpers/Loader';

import './BirdSightingsTable.css';

class SightingContainingBirdsRow extends Component {
  render() {
    const { birdSighting } = this.props;

    var matched = false;
    var known = false;

    if (birdSighting.life_stage_guess || birdSighting.sex_guess) {
      known = true;
    }
    if (birdSighting.bird) {
      matched = true;
    }

    return(
      <tr>
        <td>
        { matched &&
          <Link to={ '/birds/' + birdSighting.bird }>
            { birdSighting.get_bird_display }
          </Link>
        }
        { known &&
          <span>
            { birdSighting.get_life_stage_guess_display } { birdSighting.get_sex_guess_display }
          </span>
        }
        { (!matched && !known) &&
          <span className="bird-unmatched">
            Unmatched/Unknown
          </span>
        }
        </td>
        <td>
          { birdSighting.band_combo ?
            birdSighting.band_combo
            :
            birdSighting.get_banded_display
          }

        </td>
      </tr>
    );
  }
}

class SightingContainingBirds extends Component {
  /* For sighting detail pages, containing a list of birds in that sighting */
  render() {
    var { result, entities } = this.props;

    return(
      <table className="BirdSightingsTable SightingContainingBirds table table-responsive table-striped">
        <thead>
          <tr>
            <th>Bird</th>
            <th>Bands</th>
          </tr>
        </thead>
        <tbody>
          { result.map(key =>
            <SightingContainingBirdsRow key={ key } birdSighting={ entities.birdSightings[key] } />
          ) }
        </tbody>
      </table>
    );
  }
}

class BirdContainingSightingsRow extends Component {
  render() {
    const { birdSighting } = this.props;

    return(
      <tr>
        <td>
          <Link to={ '/sightings/' + birdSighting.sighting }>
            <SightingsDate>
              { birdSighting.sighting__date_sighted } { birdSighting.sighting__time_sighted }
            </SightingsDate>
          </Link>
        </td>
      </tr>
    );
  }
}

class BirdContainingSightings extends Component {
  /* For bird detail pages, containing a list of sightings of that bird */
  render() {
    var { result, entities } = this.props;

    return(
      <table className="BirdSightingsTable BirdContainingSightings table table-responsive table-striped">
        <thead>
          <tr>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          { result.map(key =>
            <BirdContainingSightingsRow key={ key } birdSighting={ entities.birdSightings[key] } />
          ) }
        </tbody>
      </table>
    );
  }
}

class BirdSightingsTable extends Component {
  componentDidMount() {
    const { dispatch, sighting, bird } = this.props;
    dispatch(fetchBirdSightingsIfNeeded(sighting, bird));
  }

  render() {
    if (this.props.isFetching) {
      return (<Loader />);
    }
    else if (this.props.isError) {
      return (<Error />);
    }
    else if (!this.props.entities.birdSightings) {
      return(<p className="no-sightings">No sightings have yet been recorded!</p>);
    }
    else {
      if(this.props.bird) {
        return(<BirdContainingSightings { ...this.props } />);
      }
      else {
        return(<SightingContainingBirds { ...this.props } />);
      }
    }
  }
}

BirdSightingsTable.propTypes = {
  bird: PropTypes.string,
  sighting: PropTypes.string,
  entities: PropTypes.object,
  result: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const { birdSightingsReducer } = state;

  const {
      isFetching,
      entities,
      result,
      isError
  } = birdSightingsReducer;

  return {
    isFetching,
    entities,
    result,
    isError
  }
}

export default connect(mapStateToProps)(BirdSightingsTable);
