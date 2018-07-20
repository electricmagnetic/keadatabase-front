import React from 'react';
import { getIn } from 'formik';

export const RenderField = (props) => {
  // Use label if provided, otherwise default on OPTIONS label
  const { field, form, options, placeholder, type, addBlank } = props;
  const label = props.label || options.label;
  const touched = getIn(form.touched, field.name);
  const error = getIn(form.errors, field.name);

  return (
    <div className={ (touched && error) ? "form-group has-error" : "form-group"}>
      <label className="control-label" htmlFor={ field.name }>{ label }</label>

      { type === 'choice' &&
        <select { ...field } className="form-control" id={ field.name } >
          {/* Add blank to compulsory fields (requiring the user to make a selection) */}
          { addBlank && <option default value={""}></option>}
          { options.choices.map(option => (
            <option value={ option.value } key={ option.value }>
              { option.display_name }
            </option>
          )) }
        </select>
      }

      { type === 'textarea' &&
        <textarea
          { ...field }
          placeholder={ placeholder }
          className="form-control"
          id={ field.name }
        />
      }

      { type !== 'choice' && type !== 'textarea' &&
        <input
          { ...field }
          type={ type }
          placeholder={ placeholder }
          className="form-control"
          id={ field.name }
        />
      }

      { touched && error && <span className="help-block">{ error }</span> }
    </div>
  );
};
