import React, { Component } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../../helpers/renderField';
import Map from '../../../helpers/Map';

class SightingDetailsFieldset extends Component {
  render() {
    const { options } = this.props;

    return(
      <fieldset>
        <legend>1. Sighting Details</legend>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <Field
                  component={ renderField }
                  name="date_sighted"
                  options={ options.date_sighted }
                  type="date"
                  placeholder="YYYY-MM-DD"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  component={ renderField }
                  name="time_sighted"
                  options={ options.time_sighted }
                  type="time"
                  placeholder="hh:mm (24 hour time)"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-sm-offset-1">
            {/* Placeholder */}
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">Location</div>
          <div className="panel-body">
            <p>
              Click/tap on the map to set a point, or alternatively enter the coordinates below.
            </p>
            <Map
               containerElement={ <div className="map-container" /> }
               mapElement={ <div className="map-element" /> }
               formChange={ this.props.change }
               click
             />
            <p>
              Use the precision dropdown to give us an indication of how accurate the location is (in metres).
            </p>
            <div className="row">
              <div className="col-sm-4">
                <Field
                  component={ renderField }
                  options={ options.precision }
                  name="precision"
                  label="Precision"
                  type="choice"
                  addBlank
                />
              </div>
              <div className="col-sm-offset-2 col-sm-3">
                <Field
                  component={ renderField }
                  options={ options.point_location }
                  name="point_location.coordinates[0]"
                  label="Longitude"
                  placeholder="e.g. 171.562"
                />
              </div>
              <div className="col-sm-3">
                <Field
                  component={ renderField }
                  options={ options.point_location }
                  name="point_location.coordinates[1]"
                  label="Latitude"
                  placeholder="e.g. -42.940"
                />
              </div>
            </div>
            <Field
              component={ renderField }
              options={ options.location_details }
              name="location_details"
              placeholder="e.g. Beside the Arthur's Pass Store"
              type="textarea"
              label="Location details (optional)"
            />
          </div>
        </div>
      </fieldset>
    );
  }
}

export default SightingDetailsFieldset;
