import React, { Component } from 'react';

import './BirdFeatured.css';

class BirdFeatured extends Component {
  render() {
    return(
      <div className="BirdFeatured">
        <div className="container">
          <p>Featured Bird!</p>
          <h2>bird name</h2>
        </div>
      </div>
    );
  }
}

export default BirdFeatured;
