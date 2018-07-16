import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const SightingDetailsFieldset = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  isSubmitting,
}) => (
  <fieldset>
    <legend>1. Sighting Details</legend>
    <label>Date and time sighted
      <DatePicker
        selected={values.date}
        onChange={date => setFieldValue('date', date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="D MMM YYYY, h:mm a"
        timeCaption="time"
      />
    </label>
  </fieldset>
);

export default SightingDetailsFieldset;
