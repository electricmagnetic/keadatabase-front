import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory'

import configureStore from './store/store';
import Navigation from './components/presentation/Navigation/Navigation';
import Footer from './components/presentation/Footer/Footer';
import ScrollToTop from './components/helpers/ScrollToTop';

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

const store = configureStore();
const history = createHistory();

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-67905653-2');

  // Initial pageview
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);

  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ScrollToTop>
            <div className="MainRouter">
              <Navigation />

              <main className="constrainer">
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/about" component={AboutPage} />
                  <Route exact path="/terms" component={TermsPage} />
                  <Route exact path="/licence" component={LicencePage} />

                  <Route exact path="/birds" component={BirdsPage} />
                  <Route exact path="/birds/:slug" component={BirdDetailPage} />

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
      </Provider>
    );
  }
}

export default App;
