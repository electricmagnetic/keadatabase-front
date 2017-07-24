import React, { Component } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../../helpers/renderField';
import Map from '../../../Map/Map';

class SightingDetailsFieldset extends Component {
  render() {
    return(
      <fieldset>
        <h2>2. Sighting Details</h2>
        <p>When &amp; where.</p>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <Field
                  component={ renderField }
                  type="text"
                  name="date_sighted"
                  label="Date"
                  placeholder="Date sighted"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  component={ renderField }
                  type="text"
                  name="time_sighted"
                  label="Time"
                  placeholder="Time sighted"
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
                  type="text"
                  name="accuracy"
                  label="Accuracy"
                />
                <Field
                  component={ renderField }
                  type="text"
                  name="specificity"
                  label="Specificity"
                />
                <p>Manually add coordinates</p>
                <Field
                  component={ renderField }
                  type="number"
                  name="point_location.coordinates[0]"
                  label="Longitude"
                  placeholder="e.g. 171.562"
                />
                <Field
                  component={ renderField }
                  type="number"
                  name="point_location.coordinates[1]"
                  label="Latitude"
                  placeholder="e.g. -42.940"
                />
                <Field
                  component={ renderField }
                  type="text"
                  name="region"
                  label="Region"
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
