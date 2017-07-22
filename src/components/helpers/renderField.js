import React from 'react';

export const renderField = ({ input, label, placeholder, type, textarea, meta: { touched, error } }) => (
  <div className="form-group">
    <label htmlFor={ input.name }>{ label }</label>
    { textarea ?
      <textarea { ...input } placeholder={ placeholder } className="form-control" />
      :
      <input { ...input } type={ type } placeholder={ placeholder } className="form-control" />
    }
    {touched && error && <span>{ error }</span>}
  </div>
);
