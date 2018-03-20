import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
              Kea Database sponsored by <a href="http://catalyst.net.nz" target="_blank" rel="noopener noreferrer" className="catalyst">Catalyst</a>.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
