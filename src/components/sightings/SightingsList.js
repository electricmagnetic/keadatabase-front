import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <div className="row">
            { sightings.value.results.map((sighting) =>
              <div className="col-sm-4 col-md-3" key={ sighting.id }>
                <div className="card mb-3">
                  <div className="card-body">
                    <span className="badge badge-primary">{ sighting.id }</span>
                    <p>{ sighting.date_sighted } at { sighting.time_sighted }</p>
                    <Link to={ '/sightings/' + sighting.id }>
                      <h2 className="h5">{ sighting.contributor }</h2>
                    </Link>
                    <p>
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

export default connect(mapStateToProps)(SightingsList);
