import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';

const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <Link to="/" className="navbar-brand">Kea Database</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/birds" className="nav-link">View kea</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sightings" className="nav-link">View sightings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/report" className="nav-link">Report</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
