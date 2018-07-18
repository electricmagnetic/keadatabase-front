import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import moment from 'moment';

import Loader from '../../helpers/Loader';
import Error from '../../helpers/Error';
import SightingDetailsFieldset from './SightingDetailsFieldset';
import SightingBirdsFieldset from './SightingBirdsFieldset';
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
      console.log(options)
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
              sighting_type: '',
              number: 0,
              behaviour: '',
            }}
            onSubmit={handleSubmit}
            render={props => (
              <Form>
                <SightingDetailsFieldset {...props} options={options} />
                <SightingBirdsFieldset {...props} options={options} />
              </Form>
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
