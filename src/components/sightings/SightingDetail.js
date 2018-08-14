import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSightings } from '../../actions/sightings';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

class SightingDetail extends Component {
  componentDidMount() {
    const { id, dispatch } = this.props;
    dispatch(getSightings({ id }));
  }

  render() {
    const { sightings, sighting } = this.props;

    if (sightings.pending) return <Loader />;
    else if (sightings.rejected) return <Error reason={ sightings.value.message }/>;
    else if (sightings.fulfilled) {

      console.log(sighting);

      return (
        <div className="container">
          <p>Sighting Detail</p>
        </div>
      );
    }
    else return null;
  }
}

SightingDetail.propTypes = {
  id: PropTypes.string.isRequired,
  sightings: PropTypes.object,
  sighting: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const results = state.sightings.value && state.sightings.value.results;
  const sighting = results && results.find(sighting => sighting.id === Number(ownProps.id));

  return {
    sightings: state.sightings,
    sighting,
  };
};

export default connect(mapStateToProps)(SightingDetail);
