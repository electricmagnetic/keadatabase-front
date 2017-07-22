import React, { Component } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../../helpers/renderField';

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
            <Field
              component={ renderField }
              type="text"
              name="region"
              label="Region"
            />
            <Field
              component={ renderField }
              type="number"
              name="point_location.coordinates[0]"
              label="Longitude"
            />
            <Field
              component={ renderField }
              type="number"
              name="point_location.coordinates[1]"
              label="Latitude"
            />
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
            <Field
              component={ renderField }
              type="text"
              name="sighting_type"
              label="Seen or heard?"
            />
          </div>
          <div className="col-sm-5 col-sm-offset-1">
            <p className="help-block">
              Use format YYYY-MM-DD and HH:mm:ss
            </p>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default SightingDetailsFieldset;
