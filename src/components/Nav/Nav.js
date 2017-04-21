import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';
import './Nav.css';

class Nav extends Component {
  render() {
    return(
      <nav className="navbar navbar-inverse">
        <div className="constrainer">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand"><img src={ logo } alt="Kea Database" /></Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/birds">Birds</NavLink></li>
                <li><NavLink to="/sightings">Sightings</NavLink></li>
                <li><NavLink to="/report">Report</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
