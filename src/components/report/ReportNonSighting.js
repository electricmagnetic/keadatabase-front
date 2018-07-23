import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import moment from 'moment';
import * as yup from 'yup';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import NonSightingDetailsFieldset from './fieldset/NonSightingDetailsFieldset';
import ExpectationsFieldset from './fieldset/ExpectationsFieldset';
import ContributorFieldset from './fieldset/ContributorFieldset';
import FurtherInformationFieldset from './fieldset/FurtherInformationFieldset';
import SubmitFieldset from './fieldset/SubmitFieldset';
import { getReportNonSightingOptions, postReportNonSighting } from '../../actions/reportNonSighting';

const initialValues = {
  dateTimeSighted: moment(),
  location_details: '',
  expectations: '',
  contributor: {
    name: '',
    email: '',
    phone: '',
    activity: '',
    heard: '',
    communications: false,
  },
  comments: '',
};

const requiredMessage = 'This field is required.';
const validationSchema = yup.object().shape({
  dateTimeSighted: yup.object().required(requiredMessage),
  location_details: yup.string().required(requiredMessage),
  contributor: yup.object().shape({
    name: yup.string().required(requiredMessage),
    email: yup.string().email('Invalid email address').required(requiredMessage),
  }),
});

class ReportSighting extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getReportNonSightingOptions());
  }

  handleSubmit(values, formikBag) {
    const { dispatch } = this.props;
    dispatch(postReportNonSighting(values, formikBag));
  }

  render() {
    const { reportNonSightingOptions, reportNonSightingPost } = this.props;

    if (reportNonSightingOptions.pending) return <Loader />;
    else if (reportNonSightingOptions.rejected) return <Error reason={ reportNonSightingOptions.value.message }/>;
    else if (reportNonSightingOptions.fulfilled) {
      const options = reportNonSightingOptions.value.actions.POST;
      return (
        <div>
          <p>All fields are required, except where indicated.</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={this.handleSubmit}
            render={props => (
              <Form>
                <NonSightingDetailsFieldset {...props} options={options} />
                <ExpectationsFieldset {...props} options={options} />
                <ContributorFieldset {...props} options={options} />
                <FurtherInformationFieldset {...props} options={options} />
                <SubmitFieldset {...props} response={reportNonSightingPost} />
              </Form>
            )}
          />
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = state => ({
  reportNonSightingOptions: state.reportNonSightingOptions,
  reportNonSightingPost: state.reportNonSightingPost,
});

export default connect(mapStateToProps)(ReportSighting);
