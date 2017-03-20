import React, { Component } from 'react';

import { Nav, Footer } from './Common';
import HomePage from './HomePage';
import './App.css';

class App extends Component {
  getChildContext() {
    return {
      wordpress_base: 'https://public-api.wordpress.com/wp/v2/sites/',
      wordpress_site: 'blog.keadatabase.nz'
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

App.childContextTypes = {
  wordpress_base: React.PropTypes.string,
  wordpress_site: React.PropTypes.string
};

export default App;
