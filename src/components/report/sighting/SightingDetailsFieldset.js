import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import { Marker } from "react-mapbox-gl";

import Map from '../../map/Map';
import 'react-datepicker/dist/react-datepicker.css';

const SightingDetailsFieldset = ({
  options,
  values,
  handleChange,
  setFieldValue,
}) => {
  return (
    <fieldset>
      <legend>1. Sighting Details</legend>

      <div className="form-group">
        <label>Date and time sighted</label>
        <DatePicker
          selected={ values.dateTimeSighted }
          onChange={ date => setFieldValue('dateTimeSighted', date) }
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={ 15 }
          dateFormat="D MMM YYYY, hh:mm"
          timeCaption="time"
        />
      </div>

      <div className="card">
        <div className="card-header">
          Location
        </div>

        <div className="card-body">
          <Map
            onClick={(map, e) => {
              setFieldValue('longitude', e.lngLat.lng)
              setFieldValue('latitude', e.lngLat.lat)
            }}
          >
            {values.longitude && values.latitude &&
              <Marker
                coordinates={ [values.longitude, values.latitude] }
              >
                <p>Marker</p>
              </Marker>
            }
          </Map>

          <p>
            Use the precision dropdown to give us an indication of how accurate the location is (in metres).
          </p>

          <div className="form-group">
            <label htmlFor="precision">Precision</label>
            <Field
              component="select"
              name="precision"
              className="form-control"
              id="precision"
            >
              <option default value=""></option>
              {options.precision.choices.map(option => (
                <option key={ option.value } value={ option.value }>{ option.display_name }</option>
              ))}
            </Field>
          </div>

          <div className="form-group">
            <label htmlFor="longitude">Longitude</label>
            <Field
              name="longitude"
              className="form-control"
              id="longitude"
              placeholder="e.g. 171.562"
            />
          </div>

          <div className="form-group">
            <label htmlFor="latitude">Latitude</label>
            <Field
              name="latitude"
              className="form-control"
              id="latitude"
              placeholder="e.g. -42.940"
            />
          </div>

          <div className="form-group">
            <label htmlFor="locationDetails">Location details (optional)</label>
            <Field
              component="textarea"
              name="locationDetails"
              className="form-control"
              id="locationDetails"
              placeholder="e.g. Beside the Arthur's Pass Store"
            />
          </div>

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
  handleChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default SightingDetailsFieldset;
