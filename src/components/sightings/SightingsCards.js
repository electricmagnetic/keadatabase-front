import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';

import FormatDate from '../helpers/FormatDate';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import { getFilteredSightings } from './getFilteredSightings';

class SightingsCards extends Component {
  render() {
    const { sightings, sightingsFilter } = this.props;

    if (sightings.pending) return <Loader />;
    else if (sightings.rejected) return <Error reason={ sightings.value.message }/>;
    else if (sightings.fulfilled) {
      const filteredSightings = getFilteredSightings(sightings.value.results, sightingsFilter);

      // csv
      const csvHeader = [
        'id', 'get_quality_display', 'contributor', 'get_sighting_type_display',
        'date_sighted', 'time_sighted', 'region', 'comments', 'quality',
        'date_created', 'date_updated', 'sighting_type', 'point_location', 'behaviour',
        'favourite', 'geocode',
      ];
      const csvData = filteredSightings.map(sighting => ([
        sighting.id, sighting.get_quality_display, sighting.contributor,
        sighting.get_sighting_type_display, sighting.date_sighted,
        sighting.time_sighted, sighting.region, sighting.comments,
        sighting.quality, sighting.date_created, sighting.date_updated,
        sighting.sighting_type, sighting.point_location, sighting.behaviour,
        sighting.favourite, sighting.geocode
      ]));

      return (
        <div className="SightingsCards">
          <span>Showing {filteredSightings.length} results</span>&nbsp;
          <CSVLink headers={csvHeader} data={csvData} filename="kea-sightings.csv">Download CSV</CSVLink>

          <div className="row">
            { filteredSightings.map((sighting) =>
              <div className="col-sm-4 col-md-3" key={ sighting.id }>
                <div className="card mb-3">
                  <div className="card-body">
                    <Link to={ '/sightings/' + sighting.id }>
                      <span className="badge badge-primary">{ sighting.id }</span>
                    </Link>
                    <p>
                      <FormatDate>{ sighting.date_sighted } { sighting.time_sighted }</FormatDate>,<br />
                      Around { sighting.geocode }<br />
                      <strong>{ sighting.contributor }</strong><br />
                      { sighting.get_sighting_type_display }&nbsp;{ sighting.number }&nbsp;{ sighting.number === 1 ? 'bird' : 'birds' }
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
    else return null;
  }
};

const mapStateToProps = (state) => ({
  sightings: state.sightings,
  sightingsFilter: state.sightingsFilter,
});

export default connect(mapStateToProps)(SightingsCards);
