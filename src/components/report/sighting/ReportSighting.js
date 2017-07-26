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
    const { handleSubmit } = this.props;
    const options = this.props.sightingOptions.actions.POST;

    return(
      <form className="ReportSighting" onSubmit={ handleSubmit }>
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
  form: 'reportSighting'
})(ReportSighting);
