import React, { Component } from 'react';

import '../Report.css';

class ReportSighting extends Component {
  render() {
    return(
      <div className="ReportSighting">
        <fieldset>
          <p className="question">First, who are you?</p>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label for="contributor_name">Name</label>
                <input type="text" className="form-control" id="contributor_name" placeholder="Name" />
              </div>
              <div className="form-group">
                <label for="contributor_email">Email address</label>
                <input type="email" className="form-control" id="contributor_email" placeholder="Email" />
              </div>
            </div>
            <div className="col-sm-5 col-sm-offset-1">
              <p className="help-block">
                Your name will be public (as part of your sighting), but any contact information you provide will not be.
              </p>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default ReportSighting;
