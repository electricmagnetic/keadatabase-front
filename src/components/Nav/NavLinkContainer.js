import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Modified version of of NavLink that puts an active class on the surrounding list item.
 */
const NavLinkContainer = ({
  to,
  exact,
  strict,
  location,
  activeClassName,
  className,
  activeStyle,
  style,
  isActive: getIsActive,
  ...rest
}) => (
  <Route
    path={typeof to === 'object' ? to.pathname : to}
    exact={exact}
    strict={strict}
    location={location}
    children={({ location, match }) => {
      const isActive = !!(getIsActive ? getIsActive(match, location) : match)

      return (
        <li
          className={isActive ? [ activeClassName, className ].filter(i => i).join(' ') : className}
          style={isActive ? { ...style, ...activeStyle } : style} >
          <Link
            to={to}

            {...rest}
          />
        </li>
    );
    }}
  />
);

NavLinkContainer.propTypes = {
  to: Link.propTypes.to,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  location: PropTypes.object,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  activeStyle: PropTypes.object,
  style: PropTypes.object,
  isActive: PropTypes.func
};

NavLinkContainer.defaultProps = {
  activeClassName: 'active'
};

export default NavLinkContainer;
