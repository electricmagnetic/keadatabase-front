import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBirdSightingsIfNeeded } from '../../actions/birdSightings.js';

import generateMarker from '../Helpers/generateMarker';
import Error from '../Helpers/Error';
import Loader from '../Helpers/Loader';
import Map from '../Map/Map';

function generateMarkers(result, entities) {
  return result.map(key => {
    return generateMarker(entities.birdSightings[key]);
  });
}

class BirdSightingsMap extends Component {
  componentDidMount() {
    const { dispatch, bird } = this.props;
    dispatch(fetchBirdSightingsIfNeeded('', bird));
  }

  render() {
    if (this.props.isFetching) {
      return (<Loader />);
    }
    else if (this.props.isError) {
      return (<Error />);
    }
    else if (!this.props.entities.birdSightings) {
      return(<p className="no-sightings" />);
    }
    else {
      var { result, entities } = this.props;
      var markers = generateMarkers(result, entities);

      return(
        <div className="BirdSightingsMap">
          <section>
            <Map
               containerElement={ <div className="map-container" /> }
               mapElement={ <div className="map-element" /> }
               markers={ markers }
             />
          </section>
        </div>
      );
    }
  }
}

BirdSightingsMap.propTypes = {
  bird: PropTypes.string.isRequired,
  entities: PropTypes.object,
  result: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps)(BirdSightingsMap);