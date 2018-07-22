import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';

import { RenderField } from '../../helpers/RenderField';
import 'react-datepicker/dist/react-datepicker.css';

const SightingDetailsFieldset = ({
  options,
  values,
  setFieldValue,
}) => {
  return (
    <fieldset>
      <legend>1. Non-Sighting Details</legend>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="dateTimeSighted">Date and time</label>
            <DatePicker
              selected={ values.dateTimeSighted }
              onChange={ date => setFieldValue('dateTimeSighted', date) }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={ 15 }
              dateFormat="D MMM YYYY, hh:mm"
              timeCaption="time"
              className="form-control"
              id="dateTimeSighted"
            />
          </div>
        </div>

        <div className="col-md-6">
          <p className="text-muted">
            If you are reporting a non-sighting for a multi-day trip, just use the approximate start date/time.
          </p>
        </div>
      </div>

      <Field
        component={ RenderField }
        options={ options.location_details }
        name="location_details"
        type="textarea"
        label="Location details"
        placeholder="e.g. Walked the Travers-Sabine Circuit"
      />

    </fieldset>
  );
};

SightingDetailsFieldset.propTypes = {
  options: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default SightingDetailsFieldset;
