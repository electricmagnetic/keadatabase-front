import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import SightingDetailsFieldset from './parts/SightingDetailsFieldset';
import SightingBirdsFieldset from './parts/SightingBirdsFieldset';
import ContributorFieldset from '../common/ContributorFieldset';
import FurtherInformationFieldset from '../common/FurtherInformationFieldset';
import SubmitFieldset from '../common/SubmitFieldset';

import '../Report.css';

class ReportSighting extends Component {
  render() {
    const { error, handleSubmit } = this.props;
    const options = this.props.sightingOptions.actions.POST;

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
        <SightingDetailsFieldset {...this.props} options={ options } />
        <SightingBirdsFieldset {...this.props} options={ options } />
        <ContributorFieldset {...this.props} options={ options } />
        <FurtherInformationFieldset {...this.props} options={ options } />
        <SubmitFieldset {...this.props} />
      </form>
    );
  }
}

ReportSighting.propTypes = {
  sightingOptions: PropTypes.object
}

export default reduxForm({
  form: 'reportSighting' // a unique identifier for this form
})(ReportSighting);
