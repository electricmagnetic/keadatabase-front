import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchSightingsIfNeeded } from '../../actions/sightings.js';

import Error from '../helpers/Error';
import Loader from '../helpers/Loader';
import QualityIndicator from '../helpers/QualityIndicator';
import SightingsDate from '../helpers/SightingsDate';

import './SightingDetail.css';

class SightingDetail extends Component {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchSightingsIfNeeded(id));
  }

  render() {
    const { id } = this.props;

    if (this.props.isError) {
      return (<Error>Either this sighting doesn't exist, or something went wrong here.</Error>);
    }
    else if (this.props.isFetching) {
      return (<Loader />);
    }
    else if (id && !this.props.entities.sightings[id]) {
      return (<Loader />);
    }
    else {
      const sighting = this.props.entities.sightings[id];
      return(
        <div className="SightingDetail">
          <section>
            <h2 className="sr-only">Details</h2>
            <table className="table table-condensed table-responsive details-table">
              <tbody>
                <tr>
                  <th>When</th>
                  <td>
                    <SightingsDate>
                      { sighting.date_sighted } { sighting.time_sighted }
                    </SightingsDate>
                  </td>
                </tr>
                <tr>
                  <th>Where</th>
                  <td>
                    { sighting.region }
                  </td>
                </tr>
                <tr>
                  <th>Who</th>
                  <td>
                    { sighting.contributor }
                  </td>
                </tr>
                <tr>
                  <th>What</th>
                  <td>
                    { sighting.get_sighting_type_display } { sighting.number } bird(s)
                  </td>
                </tr>
                <tr>
                  <th>Location precision</th>
                  <td>
                    Within { sighting.precision }m
                  </td>
                </tr>
                <tr>
                  <th>Verification</th>
                  <td>
                    <QualityIndicator quality={ sighting.quality } verbose />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          { sighting.comments &&
            <section>
              <h2 className="sr-only">Comments</h2>
              <p className="display-linebreak">
                { sighting.comments }
              </p>
            </section>
          }
          { sighting.location_details &&
            <section>
              <h3>Location details</h3>
              <p className="display-linebreak">
                { sighting.location_details }
              </p>
            </section>
          }
          { sighting.behaviour &&
            <section>
              <h3>Behaviour</h3>
              <p className="display-linebreak">
                { sighting.behaviour }
              </p>
            </section>
          }
        </div>
      );
    }
  }
}

SightingDetail.propTypes = {
  id: PropTypes.string.isRequired,
  entities: PropTypes.object,
  result: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
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

export default connect(mapStateToProps)(SightingDetail);
