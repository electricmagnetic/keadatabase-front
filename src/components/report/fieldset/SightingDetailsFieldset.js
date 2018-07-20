import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import { Marker } from "react-mapbox-gl";

import Map from '../../map/Map';
import { RenderField } from '../../helpers/RenderField';
import 'react-datepicker/dist/react-datepicker.css';

const SightingDetailsFieldset = ({
  options,
  values,
  errors,
  setFieldValue,
}) => {
  return (
    <fieldset>
      <legend>1. Sighting Details</legend>

      <div className="form-group">
        <label htmlFor="dateTimeSighted">Date and time sighted</label>
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

      <div className="card">
        <div className="card-header">Location</div>

        <div className="card-body">
          <Map
            onClick={(map, e) => {
              setFieldValue('point_location[0]', e.lngLat.lng)
              setFieldValue('point_location[1]', e.lngLat.lat)
            }}
          >
            {values.point_location && values.point_location[0] && values.point_location[1] &&
              <Marker
                coordinates={ values.point_location }
              >
                <p>Marker</p>
              </Marker>
            }
          </Map>

          <p>
            Use the precision dropdown to give us an indication of how accurate the location is (in metres).
          </p>

          <Field
            component={ RenderField }
            options={ options.precision }
            name="precision"
            type="choice"
            addBlank
          />

          <Field
            component={ RenderField }
            options={ options.point_location }
            name="point_location[0]"
            label="Longitude"
            placeholder="e.g. 171.562"
          />

          <Field
            component={ RenderField }
            options={ options.point_location }
            name="point_location[1]"
            label="Latitude"
            placeholder="e.g. -42.940"
          />

          <Field
            component={ RenderField }
            options={ options.location_details }
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

SightingDetailsFieldset.propTypes = {
  options: PropTypes.shape({
    precision: PropTypes.shape({
      choices: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number.isRequired,
        display_name: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default SightingDetailsFieldset;
