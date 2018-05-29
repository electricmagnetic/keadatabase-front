import React, { Component } from 'react';
import { connect } from 'react-redux';

import getSightings from '../../actions/sightings';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

class SightingsList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getSightings());
  }

  render() {
    const { sightings } = this.props;

    if (sightings.pending) return <Loader />;
    else if (sightings.rejected) return <Error reason={ sightings.value.message }/>;
    else if (sightings.fulfilled) {
      return (
        <div className="SightingsList">
          { sightings.value.results.map((sighting) =>
            <li key={ sighting.id }>{ sighting.contributor } on { sighting.date_sighted }</li>
          )}
        </div>
      );
    }
    else return null;
  }
};

const mapStateToProps = (state) => {
  return { sightings: state.sightings };
}

export default connect(mapStateToProps)(SightingsList);
