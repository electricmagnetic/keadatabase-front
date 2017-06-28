import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/Banner/Banner';
import Birds from '../../components/Birds/Birds';

class BirdsPage extends Component {
  render() {
    return (
      <div className="BirdsPage">
        <Helmet title="Birds" />
        <Banner size="small">
          <h1>Birds</h1>
        </Banner>
        <div className="container">
          <form className="form-search">
            <div className="form-group">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="input-group">
                <div className="input-group-addon">
                  <span className="glyphicon glyphicon-search"></span>
                </div>
                <input className="form-control" type="text" name="search" id="search"
                       placeholder="Auto-complete (human-style band or bird name) here." />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-md-3">
              <p>Filters go here</p>
              <ul>
                <li>Featured</li>
                <li>Status</li>
                <li>Area</li>
                <li>Life Stage</li>
                <li>Sex</li>
              </ul>
              <p>Default filters -- sort by featured birds first (then alphabetical), alive</p>
            </div>
            <div className="col-md-9">
              <Birds />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BirdsPage;
