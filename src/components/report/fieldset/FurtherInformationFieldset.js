import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const FurtherInformationFieldset = ({
  options,
  values,
  errors,
  touched,
}) => {
  return (
    <fieldset>
      <legend>4. Further Information (Optional)</legend>
      <p><em>All of these fields are optional</em></p>

      <div className="form-group">
        <label htmlFor="comments">Comments</label>
        <Field
          component="textarea"
          name="comments"
          className="form-control"
          id="comments"
          placeholder="Any comments?"
        />
      </div>

      <div className="form-group">
        <label htmlFor="activity">I'm a...</label>
        <Field
          component="select"
          name="activity"
          className="form-control"
          id="activity"
        >
          {options.contributor.children.activity.choices.map(option => (
            <option key={ option.value } value={ option.value }>{ option.display_name }</option>
          ))}
        </Field>
      </div>

      <div className="form-group">
        <label htmlFor="heard">How did you hear about this?</label>
        <Field
          component="select"
          name="heard"
          className="form-control"
          id="heard"
        >
          {options.contributor.children.heard.choices.map(option => (
            <option key={ option.value } value={ option.value }>{ option.display_name }</option>
          ))}
        </Field>
      </div>

      <div className="form-group">
        <label htmlFor="contributor-phone">Phone</label>
        <Field
          name="contributor.phone"
          className="form-control"
          id="contributor-phone"
          placeholder="Phone number"
        />
      </div>

      <div className="form-check">
        <Field
          type="checkbox"
          name="contributor.communications"
          className="form-check-input"
          id="contributor-communications"
        />
        <label
          className="form-check-label"
          htmlFor="contributor-communications"
        >
          I would like to hear more from the Arthur's Pass Kea Team.
        </label>
      </div>
    </fieldset>
  );
};

FurtherInformationFieldset.propTypes = {
  options: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
};

export default FurtherInformationFieldset;
