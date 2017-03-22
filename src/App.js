import React, { Component } from 'react';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './views/Home';
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
        <Home />
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
