import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = props => {
  return (
    <footer>
      <div className="constrainer">
        <div className="container py-3">
          <ul className="footer-links mb-3">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/sponsor">Sponsor A Kea</NavLink></li>
            <li><NavLink to="/help">Help</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
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
};

export default Footer;
