import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import apkt from '../../../assets/img/apkt.svg';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="constrainer">
          <div className="container">
            <ul className="footer-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/sponsor">Sponsor A Kea</NavLink></li>
              <li><NavLink to="/help">Help</NavLink></li>
              <li><NavLink to="/about">About/Contact</NavLink></li>
              <li><NavLink to="/licence">Licence/Copyright</NavLink></li>
              <li><NavLink to="/terms">Terms/Privacy</NavLink></li>
              <li><a href="https://blog.keadatabase.nz">Blog</a></li>
            </ul>
            <p className="footer-attribution">
              <img src={ apkt } alt="Arthur's Pass Kea Team" className="img-responsive" />
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
