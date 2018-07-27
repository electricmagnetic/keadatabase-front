import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import FormatDate from '../helpers/FormatDate';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const MACHINE_DATE_FORMAT = 'YYYY-MM-DD';

const getFilteredSightings = (sightings, filter) => {
  const date_from = filter.date_from && moment(filter.date_from).startOf('day');
  const date_to = filter.date_to && moment(filter.date_to).endOf('day');
  const geocode = filter.geocode.toLowerCase();
  const contributor = filter.contributor.toLowerCase();
  const isValidGroupSize = size => {
    switch (filter.group_size_validator) {
      case '>=':
        return size >= filter.group_size;
      case '<=':
        return size <= filter.group_size;
      default:
        return size === filter.group_size;
    }
  };

  return sightings.filter(sighting => {
    const date_sighted = moment(sighting.date_sighted, MACHINE_DATE_FORMAT);
    const withinPeriod =
      (!date_from || (date_from && date_from <= date_sighted)) &&
      (!date_to || (date_to && date_sighted <= date_to));

    const matchGeocode = sighting.geocode.toLowerCase().includes(geocode);
    const matchContributor = sighting.contributor.toLowerCase().includes(contributor);

    return withinPeriod && matchGeocode && matchContributor && isValidGroupSize(sighting.number);
  });
};

class SightingsCards extends Component {
  render() {
    const { sightings, sightingsFilter } = this.props;

    if (sightings.pending) return <Loader />;
    else if (sightings.rejected) return <Error reason={ sightings.value.message }/>;
    else if (sightings.fulfilled) {
      const filteredSightings = getFilteredSightings(sightings.value.results, sightingsFilter);
      return (
        <div className="SightingsCards">
          <p>Showing {filteredSightings.length} results</p>
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
