import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { Field } from 'formik';

import Page from '../../presentation/Page';

const SubmitFieldset = ({ submitCount, isValid, isSubmitting, reportSightingPost }) => {
  const showInvalid = (submitCount > 0 && !isValid) || reportSightingPost.rejected;
  return (
    <fieldset>
      <legend>5. Confirmation</legend>
      <Page id={185} hideTitle />

      <button type="submit" className="btn btn-primary" disabled={ isSubmitting }>
        Submit
      </button>

      {showInvalid &&
        <div className="alert alert-danger" role="alert">
          <p>
            Hmm, it seems there were some errors. Please scroll up and check the data you've entered.
          </p>
          {reportSightingPost.rejected &&
            <small>{reportSightingPost.value.message}</small>
          }
        </div>
      }

    </fieldset>
  );
}

SubmitFieldset.propTypes = {
};

const mapStateToProps = state => ({
  reportSightingPost: state.reportSightingPost,
});

export default connect(mapStateToProps)(SubmitFieldset);
