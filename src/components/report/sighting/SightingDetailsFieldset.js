import React from 'react';
import DatePicker from 'react-datepicker';
import { Marker } from "react-mapbox-gl";
import { Link } from 'react-router-dom';

import Map from '../../map/Map';
import 'react-datepicker/dist/react-datepicker.css';

const SightingDetailsFieldset = ({
  values,
  handleChange,
  setFieldValue,
}) => (
  <fieldset>
    <legend>1. Sighting Details</legend>

    <div className="form-group">
      <label>Date and time sighted</label>
      <DatePicker
        selected={values.dateTimeSighted}
        onChange={date => setFieldValue('dateTimeSighted', date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
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
              coordinates={[values.longitude, values.latitude]}
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
          <select className="form-control" id="precision">
            <option default value=""></option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="text"
            className="form-control"
            id="longitude"
            placeholder="e.g. 171.562"
            value={values.longitude}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="text"
            className="form-control"
            id="latitude"
            placeholder="e.g. -42.940"
            value={values.latitude}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="locationDetails">Location details (optional)</label>
          <textarea
            className="form-control"
            id="locationDetails"
            placeholder="e.g. Beside the Arthur's Pass Store"
            value={values.locationDetails}
            onChange={handleChange}
          />
        </div>

      </div>
    </div>
  </fieldset>
);

export default SightingDetailsFieldset;
