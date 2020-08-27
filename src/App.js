import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { SWRConfig } from 'swr';

import configureStore from './store/store';
import history from './history/history';
import initGa from './analytics';

import ScrollToTop from './components/helpers/ScrollToTop';
import Header from './components/presentation/Header';
import Footer from './components/presentation/Footer';

import HomePage from './views/index';

import AboutPage from './views/about';
import TermsPage from './views/terms';
import LicencePage from './views/licence';
import SponsorPage from './views/sponsor';
import HelpPage from './views/help';

import BirdsPage from './views/birds/index';
import BirdDetailPage from './views/birds/detail';

import SightingsPage from './views/sightings/index';
import SightingsDetailPage from './views/sightings/detail';

import ReportSightingPage from './views/report/sighting';
import ReportSightingSuccessPage from './views/report/sightingSuccess';

import NoMatchPage from './views/nomatch';

const CACHE_TIME = 24 * 60 * 60 * 1000;
const store = configureStore();

initGa(history);

class App extends Component {
  render() {
    return (
      <SWRConfig
        value={{
          fetcher: (...args) => fetch(...args).then(result => result.json()),
          dedupingInterval: CACHE_TIME,
          revalidateOnFocus: false,
        }}
      >
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <ScrollToTop>
              <div className="Router">
                <Header />

                <main className="constrainer">
                  <Switch>
                    <Route exact path="/" component={HomePage} />

                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/terms" component={TermsPage} />
                    <Route exact path="/licence" component={LicencePage} />
                    <Route exact path="/sponsor" component={SponsorPage} />
                    <Route exact path="/help" component={HelpPage} />

                    <Route exact path="/birds" component={BirdsPage} />
                    <Route exact path="/birds/:slug" component={BirdDetailPage} />

                    <Route exact path="/observations" component={SightingsPage} />
                    <Route exact path="/observations/:id" component={SightingsDetailPage} />

                    <Redirect exact from="/sightings" to="/observations" />
                    <Redirect exact from="/sightings/:id" to="/observations/:id" />

                    <Route exact path="/report" component={ReportSightingPage} />
                    <Redirect exact from="/report/sighting" to="/report" />
                    <Route exact path="/report/success" component={ReportSightingSuccessPage} />
                    <Route exact path="/report/success/:id" component={ReportSightingSuccessPage} />

                    <Route component={NoMatchPage} />
                  </Switch>
                </main>

                <Footer />
              </div>
            </ScrollToTop>
          </ConnectedRouter>
        </Provider>
      </SWRConfig>
    );
  }
}

export default App;
