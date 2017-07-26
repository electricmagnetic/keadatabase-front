import React, { Component } from 'react';

import Page from '../../wordpress/Page';

class SubmitFieldset extends Component {
  render() {
    const { error, pristine, submitting } = this.props;

    return(
      <fieldset>
        <legend>5. Confirmation</legend>
        <Page id={185} hideTitle />
        <p>
          <button type="submit" className="btn btn-primary" disabled={ pristine || submitting }>
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Submit
          </button>
        </p>
        { error &&
          <div className="alert alert-danger" role="alert">
            <p>
              Hmm, it seems there were some errors. Please scroll up and check the data you've entered.
            </p>
            <small>({ error })</small>
          </div>
        }
      </fieldset>
    );
  }
}

export default SubmitFieldset;
