import React, { Component } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../../helpers/renderField';

class FurtherInformationFieldset extends Component {
  render() {
    const { options } = this.props;

    return(
      <fieldset>
        <legend>4. Further Information <small>Optional</small></legend>
        <p><em>All of these fields are optional</em>. Skip them if you're in a hurry!</p>
        <Field
          component={ renderField }
          name="comments"
          options={ options.comments }
          placeholder="Any comments?"
          type="textarea"
        />
        <Field
          component={ renderField }
          name="behaviour"
          options={ options.behaviour }
          placeholder="What were the kea doing?"
          type="textarea"
        />
        <div className="row">
          <div className="col-sm-4">
            <Field
              component={ renderField }
              name="contributor.activity"
              options={ options.contributor.children.activity }
              label="I'm a…"
              type="choice"
            />
          </div>
          <div className="col-sm-4">
            <Field
              component={ renderField }
              name="contributor.heard"
              options={ options.contributor.children.heard }
              label="I heard about this from…"
              type="choice"
            />
          </div>
          <div className="col-sm-4">
            <Field
              component={ renderField }
              name="contributor.phone"
              options={ options.contributor.children.phone }
              placeholder="Phone number"
              type="text"
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
