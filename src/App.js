import React, { Component } from 'react';

import Header from './components/presentation/Header';
import Footer from './components/presentation/Footer';

import HomePage from './views/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <HomePage />
        </main>
        
        <Footer />
      </div>
    );
  }
}

export default App;
