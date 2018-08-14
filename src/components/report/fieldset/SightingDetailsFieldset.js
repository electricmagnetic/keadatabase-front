import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import { Marker } from "react-mapbox-gl";
import moment from 'moment';

import Map from '../../map/Map';
import { RenderField } from '../../helpers/RenderField';
import 'react-datepicker/dist/react-datepicker.css';

const SightingDetailsFieldset = ({
  options,
  values,
  setFieldValue,
}) => {
  const { longitude, latitude } = values;
  const isValidCoordinates = (
    longitude && latitude &&
    -180 <= longitude && longitude <= 180 &&
    -90 <= latitude && latitude <= 90
  );
  return (
    <fieldset>
      <legend>1. Sighting Details</legend>

      <div className="form-group">
        <label htmlFor="dateTimeSighted">Date and time sighted</label>
        <DatePicker
          selected={ values.dateTimeSighted }
          onChange={ date => setFieldValue('dateTimeSighted', date) }
          onChangeRaw={ e => {
            const date = moment(e.target.value, 'D MMM YYYY, HH:mm');
            if (date.isValid()) setFieldValue('dateTimeSighted', date);
          }}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={ 15 }
          dateFormat="D MMM YYYY, HH:mm"
          timeCaption="time"
          className="form-control"
          id="dateTimeSighted"
        />
      </div>

      <div className="card">
        <div className="card-header">Location</div>

        <div className="card-body">
          <p>
            Click/tap on the map to set a point, or alternatively enter the coordinates below.
          </p>

          <div className="map-container">
            <Map
              onClick={(map, e) => {
                setFieldValue('longitude', e.lngLat.lng);
                setFieldValue('latitude', e.lngLat.lat);
              }}
              height="480px"
            >
              {isValidCoordinates &&
                <Marker
                  coordinates={[ longitude, latitude ]}
                >
                  <i className="fas fa-map-marker-alt"></i>
                </Marker>
              }
            </Map>
          </div>

          <p>
            Use the precision dropdown to give us an indication of how accurate the location is (in metres).
          </p>

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <Field
                component={ RenderField }
                options={ options.precision }
                name="precision"
                type="choice"
                addBlank
              />
            </div>

            <div className="offset-lg-2 col-md-3">
              <Field
                component={ RenderField }
                options={ options.point_location }
                name="longitude"
                label="Longitude"
                placeholder="e.g. 171.562"
              />
            </div>

            <div className="col-md-3">
              <Field
                component={ RenderField }
                options={ options.point_location }
                name="latitude"
                label="Latitude"
                placeholder="e.g. -42.940"
              />
            </div>
          </div>

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