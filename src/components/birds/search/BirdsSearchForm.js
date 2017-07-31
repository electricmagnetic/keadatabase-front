import React from 'react'
import { Field, reduxForm } from 'redux-form'

let BirdsSearchForm = props => {
  const { submitting, handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit } className="BirdsSearchForm">
      <div className="form-group">
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="input-group">
          <div className="input-group-addon">
            <span className="glyphicon glyphicon-search"></span>
          </div>
          <Field name="search" component="input" className="form-control" type="text" placeholder="Search by name (e.g. Schist) or band combo (e.g. Black K on White)" />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary" disabled={ submitting }>Search</button>
          </span>
        </div>
      </div>
    </form>
  )
}

BirdsSearchForm = reduxForm({
  form: 'birdsSearch'
})(BirdsSearchForm)

export default BirdsSearchForm;
