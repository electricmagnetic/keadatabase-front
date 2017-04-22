import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import apkt from '../../assets/img/apkt.svg';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="constrainer">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <ul className="footer-links">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About/Contact</NavLink></li>
                  <li><a href="https://blog.keadatabase.nz">Blog</a></li>
                  <li><NavLink to="/licence">Licence/Copyright</NavLink></li>
                  <li><NavLink to="/terms">Terms/Privacy</NavLink></li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p className="footer-logo">
                  <img src={ apkt } alt="Arthur's Pass Kea Database" className="img-responsive" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
