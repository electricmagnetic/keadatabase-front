import React from 'react'
import { Field, reduxForm } from 'redux-form'

let BirdsFilterForm = props => {
  const { handleSubmit, reset, pristine, submitting } = props;
  return (
    <form onSubmit={ handleSubmit } className="BirdsFilterForm">
      <div className="form-group">
        <label htmlFor="status">Location</label>
        <Field name="status" component="select" className="form-control input-sm">
          <option value="">All</option>
          <option value="abel-tasman,kahurangi,murchison,rahu,rotoiti">Upper SI</option>
          <option value="kaikoura,hohonu,waimakariri,westland">Mid SI &amp; Coast</option>
          <option value="aoraki,fiordland,wakatipu,wanaka">Lower SI</option>
        </Field>
      </div>

      <div className="form-group">
        <label>Colours</label>
        <div className="row">
          <div className="col-xs-5">
            <div className="checkbox">
              <label>
                <Field name="colour-metal" component="input" type="checkbox" value="1" />
                Metal
              </label>
            </div>
            <div className="checkbox">
              <label>
                <Field name="colour-yellow" component="input" type="checkbox" value="1" />
                Yellow
              </label>
            </div>
            <div className="checkbox">
              <label>
                <Field name="colour-white" component="input" type="checkbox" value="1" />
                White
              </label>
            </div>
            <div className="checkbox">
              <label>
                <Field name="colour-blue" component="input" type="checkbox" value="1" />
                Blue
              </label>
            </div>
            <div className="checkbox">
              <label>
                <Field name="colour-red" component="input" type="checkbox" value="1" />
                Red
              </label>
            </div>
            <div className="checkbox">
              <label>
                <Field name="colour-orange" component="input" type="checkbox" value="1" />
                Orange
              </label>
            </div>
          </div>
          <div className="col-xs-7">
            <div className="checkbox">
              <label>
                <Field name="colour-silver-grey" component="input" type="checkbox" value="1" />
                Silver/Grey
              </label>
            </div>
            <div className="checkbox">
              <label>
                <Field name="colour-pink" component="input" type="checkbox" value="1" />
                Pink
              </label>
            </div>
            <div className="checkbox">
              <label>
                <Field name="colour-black" component="input" type="checkbox" value="1" />
                Black
              </label>
            </div>
            <div className="checkbox">
              <label>
                <Field name="colour-green" component="input" type="checkbox" value="1" />
                Green
              </label>
            </div>
            <div className="checkbox">
              <label>
                <Field name="colour-lime" component="input" type="checkbox" value="1" />
                Lime
              </label>
            </div>
            <div className="checkbox">
              <label>
                <Field name="colour-purple" component="input" type="checkbox" value="1" />
                Purple
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col-xs-5">
            <label htmlFor="symbol">Symbol</label>
            <Field name="symbol" component="input" className="form-control input-sm" type="text" maxLength="1" />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="is_extended">Stories</label>
        <Field name="is_extended" component="select" className="form-control input-sm">
          <option value="">All</option>
          <option value="True">Birds with stories</option>
          <option value="False">Other birds</option>
        </Field>
      </div>

      <div className="form-group">
        <label htmlFor="status">Status</label>
        <Field name="status" component="select" className="form-control input-sm">
          <option value="">All</option>
          <option value="+">Alive</option>
          <option value="-">Dead</option>
          <option value="?">Unknown</option>
        </Field>
      </div>

      <div className="form-group">
        <label htmlFor="band-style">Band Style</label>
        <Field name="band-style" component="select" className="form-control input-sm">
          <option>All</option>
          <option value="new">New Style (e.g. Black C on Yellow)</option>
          <option value="old">Old Style (e.g. x / Metal - Blue / Yellow )</option>
        </Field>
      </div>
      <button type="submit" className="btn btn-primary" disabled={pristine || submitting} >Submit</button>&nbsp;
      <button type="button" className="btn btn-default" disabled={pristine || submitting} onClick={reset}>Reset</button>
    </form>
  )
}

BirdsFilterForm = reduxForm({
  form: 'birdsfilter'
})(BirdsFilterForm)

export default BirdsFilterForm;
