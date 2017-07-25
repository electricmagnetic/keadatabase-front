import React, { Component } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../helpers/renderField';

class FurtherInformationFieldset extends Component {
  render() {
    const { options } = this.props;

    return(
      <fieldset>
        <legend>4. Further Information <small>(Optional)</small></legend>
        <p><em>All of these fields are optional</em>. Skip them if you're in a hurry!</p>
        <Field
          component={ renderField }
          name="comments"
          options={ options.comments }
          placeholder="Any comments?"
          type="textarea"
          small
        />
        <div className="row">
          <div className="col-sm-4">
            <Field
              component={ renderField }
              name="contributor.activity"
              options={ options.contributor.children.activity }
              label="I'm a…"
              type="choice"
              small
            />
          </div>
          <div className="col-sm-4">
            <Field
              component={ renderField }
              name="contributor.heard"
              options={ options.contributor.children.heard }
              label="How did you hear about this?"
              type="choice"
              small
            />
          </div>
          <div className="col-sm-4">
            <Field
              component={ renderField }
              name="contributor.phone"
              options={ options.contributor.children.phone }
              placeholder="Phone number"
              type="text"
              small
            />
          </div>
        </div>
        <label>
          <Field
            component="input"
            type="checkbox"
            name="contributor.communications"
          />
          &nbsp;
          I would like to hear more from the Arthur's Pass Kea Team.
        </label>
      </fieldset>
    );
  }
}

export default FurtherInformationFieldset;
