import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Marker } from "react-mapbox-gl";

import { getSightingById } from '../../actions/sightingById';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import FormatDate from '../helpers/FormatDate';
import Map from '../map/Map';

class SightingDetail extends Component {
  componentDidMount() {
    const { id, dispatch } = this.props;
    dispatch(getSightingById(id));
  }

  render() {
    const { id, sightings, sighting } = this.props;

    if (sightings.pending) return <Loader />;
    else if (sightings.rejected) return <Error reason={ sightings.value.message }/>;
    else if (sightings.fulfilled) {
      if (!sighting) return <Error reason={ `Sighting #${id} not found.` }/>;

      const tableData = [
        { key: 'When', value: <FormatDate>{ sighting.date_sighted } { sighting.time_sighted }</FormatDate> },
        { key: 'Where', value: sighting.region },
        { key: 'Who', value: sighting.contributor },
        { key: 'What', value: `${ sighting.get_sighting_type_display } ${ sighting.number } bird(s)` },
        { key: 'Precision', value: `Within ${ sighting.precision } m` },
        { key: 'Verification', value: sighting.get_quality_display },
      ];

      return (
        <div className="container">
          <div className='row'>
            <div className='col-md-6'>
              <table className="table table-sm">
                <tbody>
                  {tableData.map(row => (
                    <tr key={ row.key }>
                      <th>{ row.key }</th>
                      <td>{ row.value }</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {sighting.comments &&
                <section className='comments'>
                  <h3>Comments</h3>
                  <p>{ sighting.comments }</p>
                </section>
              }

              {sighting.location_details &&
                <section className='location_details'>
                  <h3>Location details</h3>
                  <p>{ sighting.location_details }</p>
                </section>
              }

              {sighting.behaviour &&
                <section className='behaviour'>
                  <h3>Behaviour</h3>
                  <p>{ sighting.behaviour }</p>
                </section>
              }
            </div>

            <div className='col-md-6'>
              <Map height='480px'>
                <Marker
                  coordinates={ sighting.point_location.coordinates }
                >
                  <i className="fas fa-map-marker-alt"></i>
                </Marker>
              </Map>
            </div>
          </div>
        </div>
      );
    }
    else return null;
  }
}

SightingDetail.propTypes = {
  id: PropTypes.string.isRequired,
  sightings: PropTypes.object,
  sighting: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const results = state.sightings.value && state.sightings.value.results;
  const sighting = results && results.find(sighting => sighting.id === Number(ownProps.id));

  return {
    sightings: state.sightings,
    sighting,
  };
};

export default connect(mapStateToProps)(SightingDetail);
