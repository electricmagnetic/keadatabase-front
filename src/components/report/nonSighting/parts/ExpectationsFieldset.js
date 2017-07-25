import React, { Component } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../../helpers/renderField';

class ExpectationsFieldset extends Component {
  render() {
    const { options } = this.props;

    return(
      <fieldset>
        <legend>2. Expectations <small>(Optional)</small></legend>
        <p>
          Were you expecting to see kea in this area? (e.g. you may have seen them here in the past)
        </p>
        <Field
          component={ renderField }
          options={ options.expectations }
          name="expectations"
          type="textarea"
          label="Expectations"
        />
      </fieldset>
    );
  }
}

export default ExpectationsFieldset;
