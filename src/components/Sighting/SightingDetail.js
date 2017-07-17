import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { fetchSightingsIfNeeded } from '../../actions/sightings.js';

import Error from '../Helpers/Error';
import Loader from '../Helpers/Loader';
import QualityIndicator from '../Helpers/QualityIndicator';
import SightingsDate from '../Helpers/SightingsDate';
import Banner from '../Banner/Banner';
import SightingMap from './SightingMap';

import './SightingDetail.css';

class SightingDetail extends Component {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchSightingsIfNeeded(id));
  }

  render() {
    if (this.props.isFetching) {
      return (<div className="container"><Loader /></div>);
    }
    else if (this.props.isError) {
      return (<div className="container"><Error>Either this sighting doesn't exist, or something went wrong here.</Error></div>);
    }
    else {
      const sighting = this.props.entities.sightings[this.props.id];

      return(
        <div className="SightingDetail">
          <Helmet title={'#' + sighting.id + ' - Sighting'} />
          <Banner size="small">
            <h1>Sighting #{ sighting.id }</h1>
          </Banner>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
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
                        <th>Verification</th>
                        <td>
                          <QualityIndicator quality={ sighting.quality } />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>
                { sighting.comments &&
                  <section>
                    <h2 className="sr-only">Comments</h2>
                    { sighting.comments }
                  </section>
                }
                { sighting.behaviour &&
                  <section>
                    <h3>Behaviour</h3>
                    { sighting.behaviour }
                  </section>
                }
              </div>
              <div className="col-md-5">
                <SightingMap sighting={ sighting } />
              </div>
            </div>
          </div>
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

function mapStateToProps(state, ownProps) {
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
