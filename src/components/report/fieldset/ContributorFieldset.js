import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import { RenderField } from '../../helpers/RenderField';

const ContributorFieldset = ({
  options,
  values,
}) => {
  return (
    <fieldset>
      <legend>3. About You</legend>

      <p>We need to know who is reporting the sighting.</p>

      <Field
        component={ RenderField }
        options={ options.contributor.children.name }
        name="contributor.name"
        type="text"
        placeholder="Name"
      />

      <Field
        component={ RenderField }
        options={ options.contributor.children.email }
        name="contributor.email"
        type="email"
        placeholder="Email"
      />

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
