import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = props => {
  return (
    <footer class="py-3">
      <div class="container">
        <ul className="footer-links mb-3">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><a href="https://blog.keadatabase.nz">Blog</a></li>
        </ul>
        <p className="footer-attribution">
          Kea Database sponsored by <a href="http://catalyst.net.nz" target="_blank" rel="noopener noreferrer" className="catalyst">Catalyst</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
