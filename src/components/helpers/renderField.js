import React from 'react';

export const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label htmlFor={ input.name }>{ label }</label>
    <input { ...input } type={ type }placeholder={ placeholder } className="form-control" />
    {touched && error && <span>{ error }</span>}
  </div>
);
