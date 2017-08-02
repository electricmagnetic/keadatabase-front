import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SightingsDate from '../helpers/SightingsDate';

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

export default BirdContainingSightings;
