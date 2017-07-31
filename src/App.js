import React, { Component  } from 'react';
import { Route, Switch  } from 'react-router-dom';
import { Provider  } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from './store/store';
import Navigation from './components/presentation/Navigation/Navigation';
import Footer from './components/presentation/Footer/Footer';
import ScrollToTop from './components/helpers/ScrollToTop';
import history from './history/history';
import initGa from './analytics';

import HomePage from './views/index';
import AboutPage from './views/about';
import TermsPage from './views/terms';
import BirdsPage from './views/birds/index';
import BirdDetailPage from './views/birds/detail';
import SightingsPage from './views/sightings/index';
import SightingDetailPage from './views/sightings/detail';
import ReportPage from './views/report/index';
import ReportSightingPage from './views/report/sighting';
import ReportNonSightingPage from './views/report/nonSighting';
import ReportSightingSuccessPage from './views/report/sightingSuccess';
import ReportNonSightingSuccessPage from './views/report/nonSightingSuccess';
import NoMatchPage from './views/nomatch';
import LicencePage from './views/licence';

import './assets/css/bootstrap.css';
import './assets/css/custom.css';

const store = configureStore();

initGa(history);

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <ScrollToTop>
            <div className="MainRouter">
              <Navigation />

              <main className="constrainer">
                <Switch>
                  <Route exact path="/" component={ HomePage } />
                  <Route exact path="/about" component={ AboutPage } />
                  <Route exact path="/terms" component={ TermsPage } />
                  <Route exact path="/licence" component={ LicencePage } />

                  <Route exact path="/birds" component={ BirdsPage } />
                  <Route exact path="/birds/:slug" component={ BirdDetailPage } />

                  <Route exact path="/sightings" component={ SightingsPage } />
                  <Route exact path="/sightings/:id" component={ SightingDetailPage } />

                  <Route exact path="/report" component={ ReportPage } />

                  <Route exact path="/report/sighting" component={ ReportSightingPage } />
                  <Route exact path="/report/sighting/success" component={ ReportSightingSuccessPage } />
                  <Route exact path="/report/sighting/success/:id" component={ ReportSightingSuccessPage } />

                  <Route exact path="/report/non-sighting" component={ ReportNonSightingPage } />
                  <Route exact path="/report/non-sighting/success" component={ ReportNonSightingSuccessPage } />

                  <Route component={ NoMatchPage } />
                </Switch>
              </main>

              <Footer />
            </div>
          </ScrollToTop>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
