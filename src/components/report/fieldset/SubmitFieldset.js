import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { Field } from 'formik';

import Page from '../../presentation/Page';

const SubmitFieldset = ({ isSubmitting, reportSightingPost }) => {
  return (
    <fieldset>
      <legend>5. Confirmation</legend>
      <Page id={185} hideTitle />

      <button type="submit" className="btn btn-primary" disabled={ isSubmitting }>
        Submit
      </button>

      {reportSightingPost.rejected &&
        <p>{reportSightingPost.value.message}</p>
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
