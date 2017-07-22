import React, { Component } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../../helpers/renderField';

class FurtherInformationFieldset extends Component {
  render() {
    return(
      <fieldset>
        <h2>4. Further Information <small>Optional</small></h2>
        <p><em>All of these fields are optional</em>. Skip them if you're in a hurry!</p>
        <Field
          component={ renderField }
          name="comments"
          label="Comments"
          placeholder="Any comments?"
          textarea
        />
        <Field
          component={ renderField }
          name="behaviour"
          label="Behaviour"
          placeholder="What were the kea doing?"
          textarea
        />
        <div className="row">
          <div className="col-sm-4">
            <Field
              component={ renderField }
              type="text"
              name="contributor.activity"
              label="I am a…"
            />
          </div>
          <div className="col-sm-4">
            <Field
              component={ renderField }
              type="text"
              name="contributor.heard"
              label="I heard about this from…"
            />
          </div>
          <div className="col-sm-4">
            <Field
              component={ renderField }
              type="text"
              name="contributor.phone"
              label="Phone"
              placeholder="Phone number"
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
