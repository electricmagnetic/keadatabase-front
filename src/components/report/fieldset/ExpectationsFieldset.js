import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import { RenderField } from '../../helpers/RenderField';

const ExpectationsFieldset = ({
  options,
}) => {
  return (
    <fieldset>
      <legend>2. Expectations (Optional)</legend>
      <p>
        Were you expecting to see kea in this area? (e.g. you may have seen them here in the past)
      </p>

      <Field
        component={ RenderField }
        options={ options.expectations }
        name="expectations"
        type="textarea"
      />

    </fieldset>
  );
};

ExpectationsFieldset.propTypes = {
  options: PropTypes.object.isRequired,
};

export default ExpectationsFieldset;
