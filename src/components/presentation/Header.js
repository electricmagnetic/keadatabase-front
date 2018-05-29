import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';

const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <Link to="/" className="navbar-brand">Kea Database</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
