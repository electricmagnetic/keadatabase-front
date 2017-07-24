import React, { Component } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../../helpers/renderField';
import Map from '../../../Map/Map';

class SightingDetailsFieldset extends Component {
  render() {
    const { options } = this.props;

    return(
      <fieldset>
        <legend>1. Sighting Details</legend>
        <p>When &amp; where.</p>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <Field
                  component={ renderField }
                  name="date_sighted"
                  options={ options.date_sighted }
                  placeholder="Date sighted"
                  type="text"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  component={ renderField }
                  name="time_sighted"
                  options={ options.time_sighted }
                  placeholder="Time sighted"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-sm-offset-1">
            <p className="help-block">
              Use format YYYY-MM-DD and HH:mm:ss
            </p>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">Location</div>
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-9">
                <Map
                   containerElement={ <div className="map-container" /> }
                   mapElement={ <div className="map-element" /> }
                 />
              </div>
              <div className="col-sm-3">
                <Field
                  component={ renderField }
                  options={ options.precision }
                  name="precision"
                  label="Precision"
                  type="choice"
                />
                <p>Manually add coordinates</p>
                <Field
                  component={ renderField }
                  options={ options.point_location }
                  name="point_location.coordinates[0]"
                  label="Longitude"
                  placeholder="e.g. 171.562"
                />
                <Field
                  component={ renderField }
                  options={ options.point_location }
                  name="point_location.coordinates[1]"
                  label="Latitude"
                  placeholder="e.g. -42.940"
                />
                <small>
                  Use decimal degrees (DD.DD…)
                </small>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default SightingDetailsFieldset;
