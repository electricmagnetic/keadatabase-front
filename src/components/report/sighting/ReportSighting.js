import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import moment from 'moment';

import SightingDetailsFieldset from './SightingDetailsFieldset';

const ReportSighting = () => (
  <div>
    <p>All fields are required, except where indicated.</p>
    <Formik
      initialValues={{
        email: '',
        date: moment(),
      }}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <SightingDetailsFieldset {...props} />
        </form>
      )}
    />
  </div>
);

export default ReportSighting;
