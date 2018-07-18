import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import Page from '../../presentation/Page';

const SubmitFieldset = ({ isSubmitting }) => {
  return (
    <fieldset>
      <legend>5. Confirmation</legend>
      <Page id={185} hideTitle />

      <button type="submit" className="btn btn-primary" disabled={ isSubmitting }>
        Submit
      </button>

    </fieldset>
  );
}

SubmitFieldset.propTypes = {
};

export default SubmitFieldset;
