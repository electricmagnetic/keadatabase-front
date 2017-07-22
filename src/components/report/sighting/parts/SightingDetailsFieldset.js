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
            {/* Region */}
            {/* Point Location */}
            {/* Accuracy */}
            {/* Specificity */}
            {/* Sighting Type */}
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
