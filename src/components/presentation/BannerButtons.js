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
          <div className="col-lg-4 col-md-5 banner-button">
            <Link to="/report/sighting" className="btn btn-lg btn-transparent">
              <i className="fas fa-feather-alt"></i> Report Observation
            </Link>
          </div>
          <div className="col-lg-4 col-md-5 banner-button">
            <Link to="/report/non-sighting" className="btn btn-lg btn-transparent">
              <i className="fas fa-eye-slash"></i> Report Absence
            </Link>
          </div>
          <div className="col-lg-4 col-md-2 banner-button">
            <Link to="/birds" className="btn btn-lg btn-transparent">
              <i className="fas fa-search"></i> <span className="d-md-none">Browse </span>Birds
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerButtons;
