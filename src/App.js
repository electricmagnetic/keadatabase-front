import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/presentation/Header';
import Footer from './components/presentation/Footer';

import HomePage from './views/index.js';
import AboutPage from './views/about.js';
import NoMatchPage from './views/nomatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Router">
          <Header />

          <main>
            <Switch>
              <Route exact path="/" component={ HomePage } />
              <Route exact path="/about" component={ AboutPage } />

              <Route component={ NoMatchPage } />
            </Switch>
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
