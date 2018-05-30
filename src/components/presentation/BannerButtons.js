import React from 'react';
import { Link } from 'react-router-dom';

import './BannerButtons.css';

const BannerButtons = ({ additionalClasses }) => {
  // Add classes
  var classNames = ['BannerButtons'];

  // Add additional classes
  classNames.push(additionalClasses);

  return(
    <div className={ classNames.join(' ') }>
      <div className="container">
        <div className="row">
          <div className="col-md-4 banner-button">
            <Link to="/birds" className="btn btn-lg btn-transparent">
              Browse Birds
            </Link>
          </div>
          <div className="col-md-4 banner-button">
            <Link to="/report" className="btn btn-lg btn-transparent">
              Report Sighting
            </Link>
          </div>
          <div className="col-md-4 banner-button">
            <Link to="/report" className="btn btn-lg btn-transparent">
              Report Non-Sighting
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerButtons;
