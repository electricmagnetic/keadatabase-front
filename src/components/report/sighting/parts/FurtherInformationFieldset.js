import React, { Component } from 'react';
import { Field } from 'redux-form';

class FurtherInformationFieldset extends Component {
  render() {
    return(
      <fieldset>
        <h2>4. Further Information <small>Optional</small></h2>
        <p><em>All of these fields are optional</em></p>
        {/* Comments */}
        {/* Behaviour */}
        {/* Phone */}
        {/* Activity */}
        {/* Heard */}
        {/* Communications */}
      </fieldset>
    );
  }
}

export default FurtherInformationFieldset;
