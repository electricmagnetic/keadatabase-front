import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import '../Report.css';

class ReportSighting extends Component {
  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <form className="ReportSighting" onSubmit={ handleSubmit }>
        { error &&
          <div className="alert alert-danger" role="alert">
            <p>{ error.message }</p>
            <pre>
              {JSON.stringify(error.response, null, 2) }
            </pre>
          </div>
        }
        <fieldset>
          <h2>1. About You</h2>
          <p className="question">First we need some details about who's reporting the sighting.</p>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="contributor.name">Name</label>
                <Field component="input" type="text" className="form-control" name="contributor.name" placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="contributor.email">Email</label>
                <Field component="input" type="email" className="form-control" name="contributor.email" placeholder="Email" />
              </div>
            </div>
            <div className="col-sm-5 col-sm-offset-1">
              <p className="help-block">
                Your name will be public (as part of your sighting), but any contact information you provide will not be.
              </p>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <h2>2. Your Sighting</h2>
          <p className="question">All fields are required.</p>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="date_sighted">Date Sighted</label>
                <Field component="input" type="text" className="form-control" name="date_sighted" placeholder="Date" />
              </div>
              <div className="form-group">
                <label htmlFor="time_sighted">Time Sighted</label>
                <Field component="input" type="text" className="form-control" name="time_sighted" placeholder="Time" />
              </div>
            </div>
            <div className="col-sm-5 col-sm-offset-1">
              <p className="help-block">
                Use format YYYY-MM-DD and HH:mm:ss
              </p>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <button type="submit" className="btn btn-primary" disabled={ pristine || submitting }>
            Submit
          </button>
          <button type="button" className="btn btn-default" disabled={ pristine || submitting } onClick={ reset }>
            Clear
          </button>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'reportSighting' // a unique identifier for this form
})(ReportSighting);
