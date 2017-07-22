import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';

import { renderField } from '../../../helpers/renderField';

const renderBirds = ({ fields, meta: { error, submitFailed } }) => (
  <table className="table table-responsive">
    <thead>
      <tr>
        <td colSpan="4">
          <button className="btn btn-default" type="button" onClick={() => fields.push()}>Add Bird</button>
          { submitFailed && error && <span>{error}</span> }
        </td>
      </tr>
    </thead>
    <tbody>
      { fields.map((bird, index) => (
        <tr key={ index }>
          <td>
            #{index + 1}
          </td>
          <td>
            <Field
              name={ `${bird}.banded` }
              type="text"
              component={ renderField }
              label="banded"
            />
          </td>
          <td>
            <Field
              name={ `${bird}.band_combo` }
              type="text"
              component={ renderField }
              label="band_combo"
            />
          </td>
          <td>
            <button className="btn btn-default" type="button" onClick={() => fields.remove(index)}>Remove</button>
            {/* Sex guess */}
            {/* Life stage guess */}
          </td>
        </tr>
      )) }
    </tbody>
  </table>
);


class SightingBirdsFieldset extends Component {
  render() {
    return(
      <fieldset>
        <h2>3. Birds</h2>
        <p>How many birds did you see/hear?</p>
        <div className="row">
          <div className="col-sm-6">
            <Field
              component={ renderField }
              type="number"
              name="number"
              label="Number"
              placeholder="Number sighted"
            />
          </div>
          <div className="col-sm-5 col-sm-offset-1">
            <p className="help-block"></p>
          </div>
        </div>
        <p>What birds did you see?</p>
        <FieldArray name="birds" component={ renderBirds } />
      </fieldset>
    );
  }
}

export default SightingBirdsFieldset;
