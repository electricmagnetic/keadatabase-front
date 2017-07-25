import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../../../assets/img/logo.svg';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return(
      <Navbar inverse fluid collapseOnSelect>
        <div className="constrainer">
          <div className="container">
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/" className="navbar-brand"><img src={ logo } alt="Kea Database" /></Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="/" exact><NavItem>Home</NavItem></LinkContainer>
                <LinkContainer to="/birds"><NavItem>Birds</NavItem></LinkContainer>
                <LinkContainer to="/sightings"><NavItem>View Sightings</NavItem></LinkContainer>
                <LinkContainer to="/report"><NavItem>Report</NavItem></LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default Navigation;
