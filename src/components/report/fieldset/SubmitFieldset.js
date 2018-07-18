import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import Page from '../../presentation/Page';

const isReady = () => typeof window !== 'undefined'
  && typeof window.grecaptcha !== 'undefined'
  && typeof window.grecaptcha.render === 'function';

class SubmitFieldset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: isReady(),
    }
    this.recaptchaRef = React.createRef();
  }

  componentDidMount() {
    if (this.state.ready) {
      window.grecaptcha.render(this.recaptchaRef.current)
    }
  }

  render() {
    const { isSubmitting } = this.props;
    return (
      <fieldset>
        <legend>5. Confirmation</legend>
        <Page id={185} hideTitle />

        <div
          className="g-recaptcha"
          data-sitekey="6Ld-vWQUAAAAADt4VZq2waJDiW2ggBm_Zb7IxHO3"
          ref={this.recaptchaRef}
        ></div>

        <button type="submit" className="btn btn-primary" disabled={ isSubmitting }>
          Submit
        </button>

      </fieldset>
    );
  }
}

SubmitFieldset.propTypes = {
};

export default SubmitFieldset;
