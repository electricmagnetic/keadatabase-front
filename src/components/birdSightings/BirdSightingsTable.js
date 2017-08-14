import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBirdSightingsIfNeeded } from '../../actions/birdSightings.js';

import BirdContainingSightings from './BirdContainingSightings';
import SightingContainingBirds from './SightingContainingBirds';
import Error from '../helpers/Error';
import Loader from '../helpers/Loader';

import './BirdSightingsTable.css';

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
      return(<span className="no-sightings"></span>);
    }
    else {
      if(this.props.bird) {
        return(
          <section className="BirdSightingsTable">
            <h2>Sightings</h2>
            <BirdContainingSightings { ...this.props } />
          </section>
        );
      }
      else {
        return(
          <section className="BirdSightingsTable">
            <h2>Birds</h2>
            <SightingContainingBirds { ...this.props } />
          </section>
        );
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
