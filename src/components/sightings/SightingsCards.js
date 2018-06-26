import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSightings } from '../../actions/sightings';

import FormatDate from '../helpers/FormatDate';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

class SightingsCards extends Component {
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
        <div className="SightingsCards">
          <div className="row">
            { sightings.value.results.map((sighting) =>
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

const mapStateToProps = (state) => {
  return { sightings: state.sightings };
}

export default connect(mapStateToProps)(SightingsCards);
