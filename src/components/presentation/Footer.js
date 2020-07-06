import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.scss';

const Footer = props => {
  return (
    <footer className="d-print-none">
      <div className="constrainer">
        <div className="container my-4">
          <nav>
            <ul className="footer-links my-2">
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/sponsor">Sponsor Kea</NavLink>
              </li>
              <li>
                <NavLink to="/help">Help</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/licence">Licence/Copyright</NavLink>
              </li>
              <li>
                <NavLink to="/terms">Terms/Privacy</NavLink>
              </li>
              <li>
                <a href="https://blog.keadatabase.nz">Blog</a>
              </li>
            </ul>
          </nav>
          <div className="footer-attribution">
            <p>
              Kea Database data hosted in New Zealand on{' '}
              <a
                href="https://www.catalyst.net.nz/products/gis-core"
                target="_blank"
                rel="noopener noreferrer"
                className="catalyst"
              >
                Catalyst GIS Core
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
