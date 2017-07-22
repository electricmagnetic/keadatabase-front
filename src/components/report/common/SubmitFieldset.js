import React, { Component } from 'react';

import Page from '../../wordpress/Page';

class SubmitFieldset extends Component {
  render() {
    const { pristine, reset, submitting } = this.props;

    return(
      <fieldset>
        <Page id={185} hideTitle />
        <button type="submit" className="btn btn-primary" disabled={ pristine || submitting }>
          Submit
        </button>
        <button type="button" className="btn btn-default" disabled={ pristine || submitting } onClick={ reset }>
          Clear
        </button>
      </fieldset>
    );
  }
}

export default SubmitFieldset;
