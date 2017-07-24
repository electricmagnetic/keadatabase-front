import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';

import { renderField } from '../../../helpers/renderField';

const renderBirds = ({ fields, meta: { error, submitFailed } }) => (
  <div className="row">
    { fields.map((bird, index) => (
      <div key={ index } className="col-sm-6 col-md-4">
        <div className="panel panel-default">
          <div className="panel-heading">Bird #{index + 1}</div>
          <div className="panel-body">
            <Field
              name={ `${bird}.banded` }
              type="text"
              component={ renderField }
              label="Banded?"
            />
            <Field
              name={ `${bird}.band_combo` }
              type="text"
              component={ renderField }
              label="What band?"
              placeholder="e.g. Black C on Yellow"
            />
            <Field
              name={ `${bird}.sex_guess` }
              type="text"
              component={ renderField }
              label="Sex (guess)"
            />
            <Field
              name={ `${bird}.life_stage_guess` }
              type="text"
              component={ renderField }
              label="Life Stage (guess)"
            />
            <button className="btn btn-default btn-sm" type="button" onClick={() => fields.remove(index)}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Remove Bird
            </button>
          </div>
        </div>
      </div>
    )) }
    <div className="col-sm-6 col-md-4">
      <button className="btn btn-success btn-sm" type="button" onClick={() => fields.push()}>
        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Bird
      </button>
      { submitFailed && error && <span>{error}</span> }
    </div>
  </div>
);


class SightingBirdsFieldset extends Component {
  render() {
    return(
      <fieldset>
        <h2>3. Birds</h2>
        <p>Tell us about the birds you heard/saw.</p>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <Field
              component={ renderField }
              type="text"
              name="sighting_type"
              label="Seen or heard?"
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <Field
              component={ renderField }
              type="number"
              name="number"
              label="Number"
              placeholder="# sighted/heard"
            />
          </div>
          <div className="col-sm-5 col-sm-offset-1">
            <p className="help-block"></p>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">What did you see?</div>
          <div className="panel-body">
            <FieldArray name="birds" component={ renderBirds } />
          </div>
        </div>
      </fieldset>
    );
  }
}

export default SightingBirdsFieldset;
