import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

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
  render() {
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
          {this.props.sightings.map(sighting =>
            <SightingTableRow key={ sighting.id } sighting={ sighting } />
          )}
        </tbody>
      </table>
    );
  }
}

SightingsTable.propTypes = {
  sightings: PropTypes.array.isRequired
}

export default SightingsTable;
