import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'formik';

import { RenderField } from '../../helpers/RenderField';

const RenderBirds = ({ arrayHelpers, options }) => {
  const { values } = arrayHelpers.form;
  const initialBirdValues = {
    banded: '',
    band_combo: '',
    sex_guess: '',
    life_stage_guess: '',
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => arrayHelpers.push(initialBirdValues)}
      >
        Add Bird
      </button>

      {values.birds && values.birds.length > 0 &&
        values.birds.map((bird, index) => (
          <div key={ index } className="card">
            <div className="card-header">Bird #{ index + 1 }</div>

            <div className="card-body">

              <Field
                component={ RenderField }
                options={ options.banded }
                name={ `birds.${index}.banded` }
                type="choice"
                label="Banded?"
                addBlank
              />

              <Field
                component={ RenderField }
                options={ options.band_combo }
                name={ `birds.${index}.band_combo` }
                type="text"
                label="Band combo (if known)"
                placeholder="e.g. Black C on Yellow"
              />

              <Field
                component={ RenderField }
                options={ options.sex_guess }
                name={ `birds.${index}.sex_guess` }
                type="choice"
                label="Male/Female (optional)"
              />

              <Field
                component={ RenderField }
                options={ options.life_stage_guess }
                name={ `birds.${index}.life_stage_guess` }
                type="choice"
                label="Life Stage (optional)"
              />

              <button
                type="button"
                onClick={ () => arrayHelpers.remove(index) }
              >
                Remove Bird
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

const SightingBirdsFieldset = ({
  options,
  values,
}) => {
  return (
    <fieldset>
      <legend>2. Birds</legend>
      <p>If you heard birds, or only saw them in the distance (e.g. flying overhead) choose 'Sighted (distant)' or 'Heard'. Otherwise pick 'Sighted'.</p>

      <Field
        component={ RenderField }
        options={ options.sighting_type }
        name="sighting_type"
        type="choice"
        addBlank
      />

      {values.sighting_type === 'sighted' &&
        <React.Fragment>
          <p>Please create the number of birds you saw, regardless of whether they were banded or not.</p>

          <div className="card">
            <div className="card-header">
              Birds
            </div>

            <div className="card-body">
              <FieldArray
                name="birds"
                render={arrayHelpers => (
                  <RenderBirds
                    arrayHelpers={arrayHelpers}
                    options={ options.birds.child.children }
                  />
                )}
              />
            </div>
          </div>
        </React.Fragment>
      }

      {(values.sighting_type === 'heard' || values.sighting_type === 'distant') &&
        <Field
          component={ RenderField }
          options={ options.number }
          name="number"
          type="number"
        />

      }

      {values.sighting_type !== '' &&
        <Field
          component={ RenderField }
          options={ options.behaviour }
          name="behaviour"
          type="textarea"
          placeholder="e.g. Calling, Flying, Feeding…"
        />
      }
    </fieldset>
  );
};

SightingBirdsFieldset.propTypes = {
  options: PropTypes.shape({
    sighting_type: PropTypes.shape({
      choices: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        display_name: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
  values: PropTypes.object.isRequired,
};

export default SightingBirdsFieldset;
