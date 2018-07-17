import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import moment from 'moment';

import SightingDetailsFieldset from './SightingDetailsFieldset';
import { getReportSightingOptions } from '../../../actions/reportSighting';

class ReportSighting extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getReportSightingOptions());
  }

  render() {
    // const { sightingOptions, handleSubmit } = this.props;
    const handleSubmit = null;
    return (
      <div>
        <p>All fields are required, except where indicated.</p>
        <Formik
          initialValues={{
            dateTimeSighted: moment(),
            longitude: '',
            latitude: '',
            locationDetails: '',
          }}
          onSubmit={handleSubmit}
          render={props => (
            <form onSubmit={props.handleSubmit}>
              <SightingDetailsFieldset {...props} />
            </form>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // sightingOptions: state.reportOptions,
});

export default connect(mapStateToProps)(ReportSighting);
