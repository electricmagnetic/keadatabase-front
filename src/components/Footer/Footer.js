import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <ul className="nav nav-pills">
                <li><a href="#">Home</a></li>
                <li><a href="#">About/Privacy</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Kea Conservation Trust</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <p>Logo</p>
              <p>copyright, cc licence</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
