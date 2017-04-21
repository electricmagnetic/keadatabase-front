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
                  <li><NavLink to="/about">About/Privacy</NavLink></li>
                  <li><a href="https://blog.keadatabase.nz">Blog</a></li>
                  <li><NavLink to="/licence">Licence/Copyright</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p>
                  <img src={ apkt } alt="Arthur's Pass Kea Database"
                       className="img-responsive footer-logo" />
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
