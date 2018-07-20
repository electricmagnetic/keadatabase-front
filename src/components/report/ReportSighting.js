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
  point_location: ['', ''],
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
const schema = yup.object().shape({
  dateTimeSighted: yup.object().required(requiredMessage),
  precision: yup.string().required(requiredMessage),
  point_location: yup.array().of(
    yup.string().required(requiredMessage),
    yup.string().required(requiredMessage),
  ),
  sighting_type: yup.string().required(requiredMessage),
  birds: yup.array().of(
    yup.object().shape({
      banded: yup.string().required(requiredMessage),
    }),
  ),
  number: yup.number().required(requiredMessage),
  contributor: yup.object().shape({
    name: yup.string().required(requiredMessage),
    email: yup.string().email('Invalid email address').required(requiredMessage),
  }),
});

class ReportSighting extends Component {
  constructor(props) {
    super(props);
    this.handleValidate = this.handleValidate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getReportSightingOptions());
  }

  handleValidate(values) {
  }

  handleSubmit(values, formikBag) {
    const { dispatch } = this.props;
    dispatch(postReportSighting(values, formikBag));
  }

  render() {
    const { reportSightingOptions } = this.props;

    if (reportSightingOptions.pending) return <Loader />;
    else if (reportSightingOptions.rejected) return <Error reason={ reportSightingOptions.value.message }/>;
    else if (reportSightingOptions.fulfilled) {
      const options = reportSightingOptions.value.actions.POST;
      return (
        <div>
          <p>All fields are required, except where indicated.</p>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={this.handleSubmit}
            render={props => (
              <Form>
                <SightingDetailsFieldset {...props} options={options} />
                <SightingBirdsFieldset {...props} options={options} />
                <ContributorFieldset {...props} options={options} />
                <FurtherInformationFieldset {...props} options={options} />
                <SubmitFieldset {...props} />
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
