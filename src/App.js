import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import HomePage from './views/index';
import AboutPage from './views/about';
import ContactPage from './views/contact';
import BirdsPage from './views/birds/index';
import BirdDetailPage from './views/birds/detail';
import SightingsPage from './views/sightings/index';
import SightingDetailPage from './views/sightings/detail';
import ReportPage from './views/report';
import NoMatchPage from './views/nomatch';

import './App.css';

class App extends Component {
  getChildContext() {
    return {
      wordpress_base: 'https://public-api.wordpress.com/wp/v2/sites/',
      wordpress_site: 'blog.keadatabase.nz',
      keadatabase_api: 'http://api.keadatabase.nz/'
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="MainRouter">
            <Nav />

            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/about" component={AboutPage}/>
              <Route exact path="/contact" component={ContactPage}/>

              <Route exact path="/birds" component={BirdsPage}/>
              <Route exact path="/birds/:id" component={BirdDetailPage}/>

              <Route exact path="/sightings" component={SightingsPage}/>
              <Route exact path="/sightings/:id" component={SightingDetailPage}/>

              <Route exact path="/report" component={ReportPage}/>

              <Route component={NoMatchPage}/>
            </Switch>

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

App.childContextTypes = {
  wordpress_base: React.PropTypes.string,
  wordpress_site: React.PropTypes.string,
  keadatabase_api: React.PropTypes.string
};

export default App;
