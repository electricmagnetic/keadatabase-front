import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import moment from 'moment';

import SightingDetailsFieldset from './SightingDetailsFieldset';
// import { getSightingOptions, reportSighting } from '../../../actions/report';

class ReportSighting extends Component {
  componentDidMount() {
    // const { getSightingOptions } = this.props;
    // getSightingOptions();
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

const mapDispatchToProps = dispatch => ({
  // getSightingOptions: () => { dispatch(getSightingOptions()) },
  // handleSubmit: values => { dispatch(reportSighting(values)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportSighting);
