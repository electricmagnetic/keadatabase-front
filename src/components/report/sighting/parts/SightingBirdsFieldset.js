import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';

import { renderField } from '../../../helpers/renderField';

const renderBirds = ({ fields, meta: { error, submitFailed }, options }) => (
  <div className="row">
    { fields.map((bird, index) => (
      <div key={ index } className="col-sm-6 col-md-4">
        <div className="panel panel-default">
          <div className="panel-heading">Bird #{index + 1}</div>
          <div className="panel-body">
            <Field
              component={ renderField }
              name={ `${bird}.banded` }
              options={ options.birds.child.children.banded }
              type="choice"
              small
            />
            <Field
              component={ renderField }
              name={ `${bird}.band_combo` }
              options={ options.birds.child.children.band_combo }
              placeholder="e.g. Black C on Yellow"
              type="text"
              small
            />
            <Field
              component={ renderField }
              name={ `${bird}.sex_guess` }
              options={ options.birds.child.children.sex_guess }
              type="choice"
              small
            />
            <Field
              component={ renderField }
              name={ `${bird}.life_stage_guess` }
              options={ options.birds.child.children.life_stage_guess }
              type="choice"
              small
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
    const { options } = this.props;

    return(
      <fieldset>
        <legend>2. Birds</legend>
        <p>Tell us about the birds you heard/saw.</p>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <Field
              component={ renderField }
              name="sighting_type"
              options={ options.sighting_type }
              type="choice"
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <Field
              component={ renderField }
              name="number"
              options={ options.number }
              placeholder="# sighted/heard"
              type="number"
            />
          </div>
          <div className="col-sm-5 col-sm-offset-1">
            <p className="help-block"></p>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">What did you see?</div>
          <div className="panel-body">
            <FieldArray name="birds" component={ renderBirds } options={ options } />
          </div>
        </div>
        <Field
          component={ renderField }
          name="behaviour"
          label="Behaviour (optional)"
          options={ options.behaviour }
          placeholder="e.g. Calling, Flying, Feeding…"
          type="textarea"
        />
      </fieldset>
    );
  }
}

export default SightingBirdsFieldset;
