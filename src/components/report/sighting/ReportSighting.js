import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import ContributorFieldset from '../common/ContributorFieldset';
import SightingDetailsFieldset from './parts/SightingDetailsFieldset';
import SightingBirdsFieldset from './parts/SightingBirdsFieldset';
import FurtherInformationFieldset from './parts/FurtherInformationFieldset';
import SubmitFieldset from '../common/SubmitFieldset';

import '../Report.css';

class ReportSighting extends Component {
  render() {
    const { error, handleSubmit } = this.props;
    return(
      <form className="ReportSighting" onSubmit={ handleSubmit }>
        { error &&
          <div className="alert alert-danger" role="alert">
            <p>{ error.message }</p>
            <pre>
              {JSON.stringify(error.response, null, 2) }
            </pre>
          </div>
        }
        <p>
          All fields are required, except where indicated.
        </p>
        <ContributorFieldset />
        <SightingDetailsFieldset />
        <SightingBirdsFieldset />
        <FurtherInformationFieldset />
        <SubmitFieldset {...this.props} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'reportSighting' // a unique identifier for this form
})(ReportSighting);
