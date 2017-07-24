import React, { Component } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../helpers/renderField';

class ContributorFieldset extends Component {
  render() {
    return(
      <fieldset>
        <h2>3. About You</h2>
        <p>We need to know who is reporting the sighting.</p>
        <div className="row">
          <div className="col-sm-6">
            <Field
              component={ renderField }
              type="text"
              name="contributor.name"
              label="Name"
              placeholder="Name"
            />
            <Field
              component={ renderField }
              type="text"
              name="contributor.email"
              label="Email"
              placeholder="Email"
            />
          </div>
          <div className="col-sm-5 col-sm-offset-1">
            <p className="help-block">
              Your name will be public (as part of your sighting), but any contact information you provide will not be.
            </p>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default ContributorFieldset;
