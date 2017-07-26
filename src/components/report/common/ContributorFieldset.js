import React, { Component } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../helpers/renderField';

class ContributorFieldset extends Component {
  render() {
    const { options } = this.props;

    return(
      <fieldset>
        <legend>3. About You</legend>
        <p>We need to know who is reporting the sighting.</p>
        <div className="row">
          <div className="col-sm-6">
            <Field
              component={ renderField }
              name="contributor.name"
              options={ options.contributor.children.name }
              type="text"
              placeholder="Name"
            />
            <Field
              component={ renderField }
              name="contributor.email"
              options={ options.contributor.children.email }
              type="email"
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
