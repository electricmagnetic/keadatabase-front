import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/presentation/Header';
import Footer from './components/presentation/Footer';

import HomePage from './views/index';
import AboutPage from './views/about';
import BirdsPage from './views/birds/index';
import SightingsPage from './views/sightings/index';
import ReportPage from './views/report/index';
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

              <Route exact path="/birds" component={ BirdsPage } />

              <Route exact path="/sightings" component={ SightingsPage } />

              <Route exact path="/report" component={ ReportPage } />

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
