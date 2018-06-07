import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchSightingsIfNeeded } from '../../actions/sightings.js';

import Error from '../helpers/Error';
import Loader from '../helpers/Loader';
import SightingsDate from '../helpers/SightingsDate';

import './SightingsTable.css';

class SightingTableRow extends Component {
  render() {
    const { sighting } = this.props;

    return(
      <tr>
        <td>
          <Link to={ '/sightings/' + sighting.id }>
            <SightingsDate format="medium">
              { sighting.date_sighted } { sighting.time_sighted }
            </SightingsDate>
            &nbsp;&raquo;
          </Link>
        </td>
        <td>
          { sighting.contributor }
        </td>
        <td>
          { sighting.get_sighting_type_display } { sighting.number } { sighting.number === 1 ? 'bird' : 'birds' }
        </td>
        <td>
          Near { sighting.geocode }
        </td>
      </tr>
    );
  }
}

class SightingsTable extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSightingsIfNeeded());
  }

  render() {
    if (this.props.isFetching) {
      return (<Loader />);
    }
    else if (this.props.isError) {
      return (<Error />);
    }
    else {
      var { result, entities } = this.props;

      if(this.props.limit > 0) {
        // Enables a reduced list to be shown, whilst still getting the full list of sightings
        result = result.slice(0, this.props.limit);
      }

      return(
        <table className="SightingsTable table table-responsive table-striped">
          <thead>
            <tr>
              <th>When</th>
              <th>Who</th>
              <th>What</th>
              <th>Where</th>
            </tr>
          </thead>
          <tbody>
            { result.map(key =>
              <SightingTableRow key={ key } sighting={ entities.sightings[key] } />
            ) }
          </tbody>
        </table>
      );
    }
  }
}

SightingsTable.propTypes = {
  entities: PropTypes.object,
  result: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  limit: PropTypes.number.isRequired
}

SightingsTable.defaultProps = {
  limit: 0,
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

export default connect(mapStateToProps)(SightingsTable);
