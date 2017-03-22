import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              Kea Database
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">Birds</a></li>
              <li><a href="#">Sightings</a></li>
              <li><a href="#"><strong>Report</strong></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
