import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const ContributorFieldset = ({
  options,
  values,
}) => {
  return (
    <fieldset>
      <legend>3. About You</legend>

      <p>We need to know who is reporting the sighting.</p>

      <div className="form-group">
        <label htmlFor="contributor-name">Name</label>
        <Field
          name="contributor.name"
          className="form-control"
          id="contributor-name"
          placeholder="Name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="contributor-email">Email</label>
        <Field
          name="contributor.email"
          type="email"
          className="form-control"
          id="contributor-email"
          placeholder="Email"
        />
      </div>

      <p className="help-block">
        Your name will be public (as part of your sighting), but any contact information you provide will not be.
      </p>
    </fieldset>
  );
};

ContributorFieldset.propTypes = {
  options: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
};

export default ContributorFieldset;
