import React from 'react';
import { Link } from 'react-router-dom';

const ReportType = props => {
  return (
    <div className="ReportType">
      <fieldset>
        <legend className="sr-only">Report Type Selector</legend>
        <p>Are you reporting a <strong>Sighting</strong> or a <strong>Non-Sighting</strong>?</p>
        <div className="row">
          <div className="col-sm-6">
            <div className="btn-group btn-group-lg" role="group">
              <Link to="/report/sighting/" role="button" className="btn btn-light">Sighting</Link>
              <Link to="/report/non-sighting/" role="button" className="btn btn-light">Non-Sighting</Link>
            </div>
          </div>
          <div className="col-sm-5 col-sm-offset-1">
            <div className="help-block">
              <p>
                A <strong>Sighting</strong> is for recording any times you heard or saw kea.
              </p>
              <p>
                A <strong>Non-Sighting</strong> is for when you <em>didn't</em> see or hear any kea, especially in an area where you were
                expecting to see them.<br />
              </p>
              <p>
                Both types are important!
              </p>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default ReportType;
