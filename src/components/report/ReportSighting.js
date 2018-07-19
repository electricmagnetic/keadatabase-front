import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import moment from 'moment';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import SightingDetailsFieldset from './fieldset/SightingDetailsFieldset';
import SightingBirdsFieldset from './fieldset/SightingBirdsFieldset';
import ContributorFieldset from './fieldset/ContributorFieldset';
import FurtherInformationFieldset from './fieldset/FurtherInformationFieldset';
import SubmitFieldset from './fieldset/SubmitFieldset';
import { getReportSightingOptions, postReportSighting } from '../../actions/reportSighting';

class ReportSighting extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getReportSightingOptions());
  }

  handleSubmit(values) {
    const { dispatch } = this.props;
    dispatch(postReportSighting(values));
  }

  render() {
    const { reportSightingOptions } = this.props;

    if (reportSightingOptions.pending) return <Loader />;
    else if (reportSightingOptions.rejected) return <Error reason={ reportSightingOptions.value.message }/>;
    else if (reportSightingOptions.fulfilled) {
      const options = reportSightingOptions.value.actions.POST;
      console.log(options)
      const validate = null;
      return (
        <div>
          <p>All fields are required, except where indicated.</p>
          <Formik
            initialValues={{
              dateTimeSighted: moment(),
              precision: '',
              point_location: {
                coordinates: ['', ''],
              },
              location_details: '',
              sighting_type: '',
              birds: [],
              number: 0,
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
            }}
            validate={validate}
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
