import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'formik';

const RenderBirds = ({ arrayHelpers, options }) => {
  const { values } = arrayHelpers.form;
  const initialBirdValues = {
    banded: 'unknown',
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
              <div className="form-group">
                <label htmlFor={ `bird${index}banded` }>Banded?</label>
                <Field
                  component="select"
                  name={ `birds.${index}.banded` }
                  id={ `bird${index}banded` }
                  className="form-control"
                >
                  {options.banded.choices.map(option => (
                    <option key={ option.value } value={ option.value }>{ option.display_name }</option>
                  ))}
                </Field>
              </div>

              <div className="form-group">
                <label htmlFor={ `bird${index}bandcombo` }>Band combo (if known)</label>
                <Field
                  name={ `birds.${index}.band_combo` }
                  id={ `bird${index}bandcombo` }
                  className="form-control"
                  placeholder="e.g. Black C on Yellow"
                />
              </div>

              <div className="form-group">
                <label htmlFor={ `bird${index}sexguess` }>Male/Female (optional)</label>
                <Field
                  component="select"
                  name={ `birds.${index}.sex_guess` }
                  id={ `bird${index}sexguess` }
                  className="form-control"
                >
                  {options.sex_guess.choices.map(option => (
                    <option key={ option.value } value={ option.value }>{ option.display_name }</option>
                  ))}
                </Field>
              </div>

              <div className="form-group">
                <label htmlFor={ `bird${index}lifestageguess` }>Life Stage (optional)</label>
                <Field
                  component="select"
                  name={ `birds.${index}.life_stage_guess` }
                  id={ `bird${index}lifestageguess` }
                  className="form-control"
                >
                  {options.life_stage_guess.choices.map(option => (
                    <option key={ option.value } value={ option.value }>{ option.display_name }</option>
                  ))}
                </Field>
              </div>

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

      <div className="form-group">
        <label htmlFor="sighting_type">Sighting type</label>
        <Field
          component="select"
          name="sighting_type"
          className="form-control"
          id="sighting_type"
        >
          <option default value=""></option>
          {options.sighting_type.choices.map(option => (
            <option key={ option.value } value={ option.value }>{ option.display_name }</option>
          ))}
        </Field>
      </div>

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
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <Field
            type="number"
            name="number"
            className="form-control"
            id="number"
          />
        </div>
      }

      {values.sighting_type !== '' &&
        <div className="form-group">
          <label htmlFor="behaviour">Behaviour</label>
          <Field
            component="textarea"
            name="behaviour"
            className="form-control"
            id="behaviour"
            placeholder="e.g. Calling, Flying, Feeding…"
          />
        </div>
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
