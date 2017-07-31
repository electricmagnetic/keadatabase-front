import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';

import { renderField } from '../../../helpers/renderField';

class RenderBirds extends Component {
  render() {
    const { fields, meta: { error, submitFailed }, options } = this.props;

    return(
      <div className="panel panel-default">
        <div className="panel-heading">Birds</div>
        <div className="panel-body">
          <p>
            { submitFailed && error && <span>{ error }</span> }
            <button className="btn btn-success btn-sm" type="button" onClick={ () => fields.push() }>
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>Add Bird
            </button>
          </p>
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
                      label="Banded?"
                      small
                      addBlank
                    />
                    <Field
                      component={ renderField }
                      name={ `${bird}.band_combo` }
                      options={ options.birds.child.children.band_combo }
                      label="Band combo (if known)"
                      placeholder="e.g. Black C on Yellow"
                      type="text"
                      small
                    />
                    <Field
                      component={ renderField }
                      name={ `${bird}.sex_guess` }
                      options={ options.birds.child.children.sex_guess }
                      label="Male/Female (optional)"
                      type="choice"
                      small
                    />
                    <Field
                      component={ renderField }
                      name={ `${bird}.life_stage_guess` }
                      options={ options.birds.child.children.life_stage_guess }
                      label="Life Stage (optional)"
                      type="choice"
                      small
                    />
                  <button className="btn btn-default btn-sm" type="button" onClick={ () => fields.remove(index) }>
                      <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>Remove Bird
                    </button>
                  </div>
                </div>
              </div>
            )) }
          </div>
        </div>
      </div>
    );
  }
}

class SightingBirdsFieldset extends Component {
  render() {
    const { options, sightingType } = this.props;

    return(
      <fieldset>
        <legend>2. Birds</legend>
        <p>If you heard birds, or only saw them in the distance (e.g. flying overhead) choose 'Sighted (distant)' or 'Heard'. Otherwise pick 'Sighted'.</p>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <Field
              component={ renderField }
              name="sighting_type"
              options={ options.sighting_type }
              type="choice"
              addBlank
            />
          </div>
          { (sightingType && sightingType !== 'sighted') &&
            <div className="isHeard isSightedDistant">
              <div className="col-xs-6 col-sm-3">
                <Field
                  component={ renderField }
                  name="number"
                  options={ options.number }
                  type="number"
                />
              </div>
              <div className="col-sm-5 col-sm-offset-1">
                {/* Placeholder */}
              </div>
            </div>
          }
        </div>
        { (sightingType && sightingType === 'sighted') &&
          <div className="isSighted">
            <p>Please create the number of birds you saw, regardless of whether they were banded or not.</p>
            <FieldArray name="birds" component={ RenderBirds } options={ options } formChange={ this.props.change } />
          </div>
        }
        { sightingType &&
          <Field
            component={ renderField }
            name="behaviour"
            label="Behaviour (optional)"
            options={ options.behaviour }
            placeholder="e.g. Calling, Flying, Feeding…"
            type="textarea"
          />
        }
      </fieldset>
    );
  }
}

export default SightingBirdsFieldset;
