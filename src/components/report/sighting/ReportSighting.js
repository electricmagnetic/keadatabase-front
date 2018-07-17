import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import moment from 'moment';

import Loader from '../../helpers/Loader';
import Error from '../../helpers/Error';
import SightingDetailsFieldset from './SightingDetailsFieldset';
import { getReportSightingOptions } from '../../../actions/reportSighting';

class ReportSighting extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getReportSightingOptions());
  }

  render() {
    const { reportSightingOptions } = this.props;

    if (reportSightingOptions.pending) return <Loader />;
    else if (reportSightingOptions.rejected) return <Error reason={ reportSightingOptions.value.message }/>;
    else if (reportSightingOptions.fulfilled) {
      const options = reportSightingOptions.value.actions.POST;
      const handleSubmit = null;
      return (
        <div>
          <p>All fields are required, except where indicated.</p>
          <Formik
            initialValues={{
              dateTimeSighted: moment(),
              precision: '',
              longitude: '',
              latitude: '',
              locationDetails: '',
            }}
            onSubmit={handleSubmit}
            render={props => (
              <form onSubmit={props.handleSubmit}>
                <SightingDetailsFieldset {...props} options={options} />
              </form>
            )}
          />
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = state => ({
  reportSightingOptions: state.reportSightingOptions,
});

export default connect(mapStateToProps)(ReportSighting);
