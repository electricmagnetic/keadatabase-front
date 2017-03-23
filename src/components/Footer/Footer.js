import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <ul className="nav nav-pills">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About/Privacy</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><a href="https://blog.keadatabase.nz">Blog</a></li>
                <li><a href="https://keaconservation.co.nz">Kea Conservation Trust</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <p>Logo</p>
              <p>copyright, cc licence</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
