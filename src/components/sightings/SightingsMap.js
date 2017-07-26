import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchSightingsIfNeeded } from '../../actions/sightings.js';

import generateMarker from '../helpers/generateMarker';
import Error from '../helpers/Error';
import Loader from '../helpers/Loader';
import Map from '../helpers/Map';

function generateMarkers(result, entities) {
  return result.map(key => {
    return generateMarker(entities.sightings[key]);
  });
}

class SightingsMap extends Component {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchSightingsIfNeeded(id));
  }

  render() {
    const { id } = this.props;

    if (this.props.isError) {
      return (<Error>Either this sighting doesn't exist, or something went wrong here.</Error>);
    }
    else if (this.props.isFetching) {
      return (<Loader />);
    }
    else if (id && !this.props.entities.sightings[id]) {
      return (<Loader />);
    }
    else {
      var { result, entities } = this.props;
      var markers = {};

      if (id) {
        markers = [generateMarker(entities.sightings[id])];
      }
      else {
        markers = generateMarkers(result, entities);
      }

      return(
        <div className="SightingsMap">
          <section>
            <Map
               containerElement={ <div className="map-container" /> }
               mapElement={ <div className="map-element" /> }
               markers={ markers }
               cluster
             />
          </section>
        </div>
      );
    }
  }
}

SightingsMap.propTypes = {
  id: PropTypes.string,
  entities: PropTypes.object,
  result: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired
}

SightingsMap.defaultProps = {
  id: ''
}

const mapStateToProps = (state) => {
  const { sightingsReducer } = state;

  const {
      isFetching,
      entities,
      result,
      isError
  } = sightingsReducer;

  return {
    isFetching,
    entities,
    result,
    isError
  }
}

export default connect(mapStateToProps)(SightingsMap);
