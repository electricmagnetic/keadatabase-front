import React, { Component } from 'react';

import Page from '../../wordpress/Page';

class SubmitFieldset extends Component {
  render() {
    const { pristine, submitting } = this.props;

    return(
      <fieldset>
        <legend>5. Confirmation</legend>
        <Page id={185} hideTitle />
        <button type="submit" className="btn btn-primary" disabled={ pristine || submitting }>
          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Submit
        </button>
      </fieldset>
    );
  }
}

export default SubmitFieldset;
