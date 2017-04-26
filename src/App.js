import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import HomePage from './views/index';
import AboutPage from './views/about';
import TermsPage from './views/terms';
import BirdsPage from './views/birds/index';
import BirdDetailPage from './views/birds/detail';
import SightingsPage from './views/sightings/index';
import SightingDetailPage from './views/sightings/detail';
import ReportPage from './views/report';
import NoMatchPage from './views/nomatch';
import LicencePage from './views/licence';

import './assets/css/bootstrap.css';
import './assets/css/custom.css';

class App extends Component {
  getChildContext() {
    return {
      keadatabase_api: 'https://api.keadatabase.nz',
      wordpress_base: 'https://public-api.wordpress.com/wp/v2/sites',
      wordpress_site: 'blog.keadatabase.nz'
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop>
            <div className="MainRouter">
              <Nav />

              <main className="constrainer">
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/about" component={AboutPage} />
                  <Route exact path="/terms" component={TermsPage} />
                  <Route exact path="/licence" component={LicencePage} />

                  <Route exact path="/birds" component={BirdsPage} />
                  <Route exact path="/birds/:id" component={BirdDetailPage} />

                  <Route exact path="/sightings" component={SightingsPage} />
                  <Route exact path="/sightings/:id" component={SightingDetailPage} />

                  <Route exact path="/report" component={ReportPage} />

                  <Route component={NoMatchPage} />
                </Switch>
              </main>

              <Footer />
            </div>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

App.childContextTypes = {
  wordpress_base: PropTypes.string,
  wordpress_site: PropTypes.string,
  keadatabase_api: PropTypes.string
};

export default App;
