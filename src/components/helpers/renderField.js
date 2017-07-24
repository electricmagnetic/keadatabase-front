import React from 'react';

export const renderField = ({ input, label, placeholder, type, options, meta: { touched, error } }) => {
  // Use label if provided, otherwise default on OPTIONS label
  label = label || options.label;

  if(type === 'choice') {
    return(
      <div className="form-group">
        <label htmlFor={ input.name }>{ label }</label>
        <select { ...input } className="form-control" id={ input.name }>
          {options.choices.map(option => (
            <option value={ option.value } key={ option.value }>
              { option.display_name }
            </option>
          ))}
        </select>
        {touched && error && <span>{ error }</span>}
      </div>
    );
  }
  else if(type === 'textarea') {
    return(
      <div className="form-group">
        <label htmlFor={ input.name }>{ label }</label>
        <textarea { ...input } placeholder={ placeholder } className="form-control" id={ input.name } />
        {touched && error && <span>{ error }</span>}
      </div>
    );
  }
  else {
    return (
      <div className="form-group">
        <label htmlFor={ input.name }>{ label }</label>
        <input { ...input } type={ type } placeholder={ placeholder } className="form-control" id={ input.name } />
        {touched && error && <span>{ error }</span>}
      </div>
    );
  }
};
