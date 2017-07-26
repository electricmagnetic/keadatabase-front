import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import NonSightingDetailsFieldset from './parts/NonSightingDetailsFieldset';
import ExpectationsFieldset from './parts/ExpectationsFieldset';
import ContributorFieldset from '../common/ContributorFieldset';
import FurtherInformationFieldset from '../common/FurtherInformationFieldset';
import SubmitFieldset from '../common/SubmitFieldset';

import '../Report.css';

class ReportNonSighting extends Component {
  render() {
    const { handleSubmit } = this.props;
    const options = this.props.nonSightingOptions.actions.POST;

    return(
      <form className="ReportNonSighting" onSubmit={ handleSubmit }>
        <p>
          All fields are required, except where indicated.
        </p>
        <NonSightingDetailsFieldset {...this.props} options={ options } />
        <ExpectationsFieldset {...this.props} options={ options } />
        <ContributorFieldset {...this.props} options={ options } />
        <FurtherInformationFieldset {...this.props} options={ options } />
        <SubmitFieldset {...this.props} />
      </form>
    );
  }
}

ReportNonSighting.propTypes = {
  nonSightingOptions: PropTypes.object
}

export default reduxForm({
  form: 'reportNonSighting'
})(ReportNonSighting);
