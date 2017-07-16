import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { fetchSightingsIfNeeded } from '../../actions/sightings.js';

import Error from '../../components/Helpers/Error';
import Loader from '../../components/Helpers/Loader';
import QualityIndicator from '../Helpers/QualityIndicator';

class SightingTableRow extends Component {
  render() {
    const { sighting } = this.props;

    return(
      <tr>
        <td>
          <Link to={ '/sightings/' + sighting.id }>
            <Moment format="dddd DD MMMM YYYY [at] h:mm a" parse="YYYY-MM-DD HH:mm:ss">
              { sighting.date_sighted } { sighting.time_sighted }
            </Moment>
          </Link>
        </td>
        <td>
          { sighting.contributor }
        </td>
        <td>
          <QualityIndicator quality={ sighting.quality } />
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
      return (<div className="container"><Loader /></div>);
    }
    else if (this.props.isError) {
      return (<div className="container"><Error /></div>);
    }
    else {
      var sightings = this.props.items;

      if(this.props.limit > 0) {
        // Enables a reduced list to be shown, whilst still getting the full list of sightings
        sightings = sightings.slice(0, this.props.limit);
      }

      return(
        <table className="SightingsTable table table-responsive table-striped">
          <thead>
            <tr>
              <th>When</th>
              <th>Who</th>
              <th>Verified?</th>
            </tr>
          </thead>
          <tbody>
            { sightings.map(sighting =>
              <SightingTableRow key={ sighting.id } sighting={ sighting } />
            ) }
          </tbody>
        </table>
      );
    }
  }
}

SightingsTable.propTypes = {
  items: PropTypes.array,
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
      items,
      isError
  } = sightingsReducer || {
    isFetching: true,
    items: [],
    isError: false
  }

  return {
    isFetching,
    items,
    isError
  }
}

export default connect(mapStateToProps)(SightingsTable);
