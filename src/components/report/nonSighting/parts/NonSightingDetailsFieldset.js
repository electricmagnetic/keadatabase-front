import React, { Component } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../../helpers/renderField';

class NonSightingDetailsFieldset extends Component {
  render() {
    const { options } = this.props;

    return(
      <fieldset>
        <legend>1. Non-Sighting Details</legend>
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
                  label="Date"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  component={ renderField }
                  name="time_sighted"
                  options={ options.time_sighted }
                  type="time"
                  placeholder="hh:mm (24 hour time)"
                  label="Time"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-sm-offset-1">
            <p className="help-block">
              If you are reporting a non-sighting for a multi-day trip, just use the approximate start date/time.
            </p>
          </div>
        </div>
        <Field
          component={ renderField }
          options={ options.location_details }
          name="location_details"
          placeholder="e.g. Walked the Travers-Sabine Circuit"
          type="textarea"
          label="Location details"
        />
      </fieldset>
    );
  }
}

export default NonSightingDetailsFieldset;
