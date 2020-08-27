import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import MapSelector from '../../helpers/MapSelector';
import { RenderField } from '../../helpers/RenderField';
import 'react-datepicker/dist/react-datepicker.css';

const ObservationDetailsFieldset = ({ options, values, setFieldValue }) => {
  return (
    <fieldset>
      <legend>1. Observation Details</legend>

      <div className="form-group">
        <label htmlFor="dateTimeSighted">Date and time sighted</label>
        <DatePicker
          selected={values.dateTimeSighted}
          onChange={date => setFieldValue('dateTimeSighted', date)}
          onChangeRaw={e => {
            const date = moment(e.target.value, 'D MMM YYYY, HH:mm');
            if (date.isValid()) setFieldValue('dateTimeSighted', date);
          }}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="D MMM YYYY, HH:mm"
          timeCaption="time"
          className="form-control"
          id="dateTimeSighted"
        />
      </div>

      <div className="card">
        <div className="card-header">Location</div>

        <div className="card-body">
          <p>Click/tap on the map to set a point, or alternatively enter the coordinates below.</p>

          <div className="map-container mb-3">
            <MapSelector options={options} values={values} setFieldValue={setFieldValue} />
          </div>

          <p>
            Use the precision dropdown to give us an indication of how accurate the location is (in
            metres).
          </p>

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <Field
                component={RenderField}
                options={options.precision}
                name="precision"
                type="choice"
              />
            </div>

            <div className="offset-lg-2 col-md-3">
              <Field
                component={RenderField}
                options={options.point_location}
                name="longitude"
                label="Longitude"
                placeholder="e.g. 171.562"
              />
            </div>

            <div className="col-md-3">
              <Field
                component={RenderField}
                options={options.point_location}
                name="latitude"
                label="Latitude"
                placeholder="e.g. -42.940"
              />
            </div>
          </div>

          <Field
            component={RenderField}
            options={options.location_details}
            name="location_details"
            type="textarea"
            label="Location details (optional)"
            placeholder="e.g. Beside the Arthur's Pass Store"
          />
        </div>
      </div>
    </fieldset>
  );
};

ObservationDetailsFieldset.propTypes = {
  options: PropTypes.shape({
    precision: PropTypes.shape({
      choices: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.number.isRequired,
          display_name: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default ObservationDetailsFieldset;
