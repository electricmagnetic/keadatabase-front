import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import moment from 'moment';
import * as yup from 'yup';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import SightingDetailsFieldset from './fieldset/SightingDetailsFieldset';
import SightingBirdsFieldset from './fieldset/SightingBirdsFieldset';
import ContributorFieldset from './fieldset/ContributorFieldset';
import FurtherInformationFieldset from './fieldset/FurtherInformationFieldset';
import SubmitFieldset from './fieldset/SubmitFieldset';
import { getReportSightingOptions, postReportSighting } from '../../actions/reportSighting';

const initialValues = {
  dateTimeSighted: moment(),
  precision: '',
  longitude: '',
  latitude: '',
  location_details: '',
  sighting_type: '',
  birds: [],
  number: 1,
  behaviour: '',
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
const notNumber = 'This field must be a number.';
const validationSchema = yup.object().shape({
  dateTimeSighted: yup.object().required(requiredMessage),
  precision: yup.string().required(requiredMessage),
  longitude: yup.number().min(-180).max(180).required(requiredMessage).typeError(notNumber),
  latitude: yup.number().min(-90).max(90).required(requiredMessage).typeError(notNumber),
  sighting_type: yup.string().required(requiredMessage),
  birds: yup.array().of(
    yup.object().shape({
      banded: yup.string().required(requiredMessage),
    }),
  ),
  number: yup.number().required(requiredMessage),
  contributor: yup.object().shape({
    name: yup.string().required(requiredMessage),
    email: yup.string().email('Invalid email address.').required(requiredMessage),
  }),
});

class ReportSighting extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getReportSightingOptions());
  }

  handleSubmit(values, formikBag) {
    const { dispatch } = this.props;
    dispatch(postReportSighting(values, formikBag));
  }

  render() {
    const { reportSightingOptions, reportSightingPost } = this.props;

    if (reportSightingOptions.pending) return <Loader />;
    else if (reportSightingOptions.rejected) return <Error reason={ reportSightingOptions.value.message }/>;
    else if (reportSightingOptions.fulfilled) {
      const options = reportSightingOptions.value.actions.POST;
      return (
        <div>
          <p>All fields are required, except where indicated.</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={this.handleSubmit}
            render={props => (
              <Form>
                <SightingDetailsFieldset {...props} options={options} />
                <SightingBirdsFieldset {...props} options={options} />
                <ContributorFieldset {...props} options={options} />
                <FurtherInformationFieldset {...props} options={options} />
                <SubmitFieldset {...props} response={reportSightingPost} />
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
  reportSightingPost: state.reportSightingPost,
});

export default connect(mapStateToProps)(ReportSighting);
