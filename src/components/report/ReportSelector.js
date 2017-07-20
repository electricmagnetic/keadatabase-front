import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Report.css';

class ReportSelector extends Component {
  render() {
    return(
      <div className="ReportSelector">
        <fieldset>
          <p className="question">Are you reporting a <strong>Sighting</strong> or a <strong>Non-Sighting</strong>?</p>
          <div className="row">
            <div className="col-sm-6">
              <div className="btn-group btn-group-lg" role="group" aria-label="Report Type Selector">
                <Link to="/report/sighting/" role="button" className="btn btn-default">Sighting</Link>
                <Link to="/report/non-sighting/" role="button" className="btn btn-default">Non-Sighting</Link>
              </div>
            </div>
            <div className="col-sm-6">
              <p className="help-block">
                A <strong>Sighting</strong> is for recording any times you heard or saw kea.<br />
                Equally as important is a <strong>Non-Sighting</strong>, i.e. if
                you <em>didn't</em> see or hear any kea, especially in an area where you were
                expecting to see them.
              </p>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default ReportSelector;
