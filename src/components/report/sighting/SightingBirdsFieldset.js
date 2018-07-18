import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const SightingBirdsFieldset = ({
  options,
  values,
  handleChange,
  setFieldValue,
}) => {
  return (
    <fieldset>
      <legend>2. Birds</legend>
      <p>If you heard birds, or only saw them in the distance (e.g. flying overhead) choose 'Sighted (distant)' or 'Heard'. Otherwise pick 'Sighted'.</p>

      <div className="form-group">
        <label htmlFor="sighting_type">Sighting type</label>
        <Field
          component="select"
          name="sighting_type"
          className="form-control"
          id="sighting_type"
        >
          <option default value=""></option>
          {options.sighting_type.choices.map(option => (
            <option key={ option.value } value={ option.value }>{ option.display_name }</option>
          ))}
        </Field>
      </div>

      {values.sighting_type === 'sighted' &&
        <React.Fragment>
          <p>Please create the number of birds you saw, regardless of whether they were banded or not.</p>

          <div className="card">
            <div className="card-header">
              Birds
            </div>

            <div className="card-body">
            </div>
          </div>
        </React.Fragment>
      }

      {(values.sighting_type === 'heard' || values.sighting_type === 'distant') &&
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <Field
            type="number"
            name="number"
            className="form-control"
            id="number"
          />
        </div>
      }

      {values.sighting_type !== '' &&
        <div className="form-group">
          <label htmlFor="behaviour">Behaviour</label>
          <Field
            component="textarea"
            name="behaviour"
            className="form-control"
            id="behaviour"
            placeholder="e.g. Calling, Flying, Feeding…"
          />
        </div>
      }
    </fieldset>
  );
};

SightingBirdsFieldset.propTypes = {
  options: PropTypes.shape({
    sighting_type: PropTypes.shape({
      choices: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        display_name: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default SightingBirdsFieldset;
