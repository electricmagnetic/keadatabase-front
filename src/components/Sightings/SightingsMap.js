import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchSightingsIfNeeded } from '../../actions/sightings.js';

import generateMarker from '../Helpers/generateMarker';
import Error from '../Helpers/Error';
import Loader from '../Helpers/Loader';
import Map from '../Map/Map';

function generateMarkers(result, entities) {
  return result.map(key => {
    return generateMarker(entities.sightings[key]);
  });
}

class SightingsMap extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSightingsIfNeeded());
  }

  render() {
    if (this.props.isFetching) {
      return (<div className="container"><Loader /></div>);
    }
    else if (this.props.isError) {
      return (<div className="container"><Error /></div>);
    }
    else {
      var { result, entities } = this.props;

      const markers = generateMarkers(result, entities);

      return(
        <div className="SightingsMap">
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

SightingsMap.propTypes = {
  entities: PropTypes.object,
  result: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired
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
