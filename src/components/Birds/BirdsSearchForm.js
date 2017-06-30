import React from 'react'
import { Field, reduxForm } from 'redux-form'

let BirdsSearchForm = props => {
  const { pristine, submitting, handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit } className="BirdsSearchForm">
      <div className="form-group">
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="input-group">
          <div className="input-group-addon">
            <span className="glyphicon glyphicon-search"></span>
          </div>
          <Field name="search" component="input" className="form-control" type="text" placeholder="Search" />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Search</button>
          </span>
        </div>
      </div>
    </form>
  )
}

BirdsSearchForm = reduxForm({
  form: 'birdssearch'
})(BirdsSearchForm)

export default BirdsSearchForm;
