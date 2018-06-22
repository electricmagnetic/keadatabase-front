import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider  } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from './store/store';
import history from './history/history';

import ScrollToTop from './components/helpers/ScrollToTop';
import Header from './components/presentation/Header';
import Footer from './components/presentation/Footer';

import HomePage from './views/index';
import AboutPage from './views/about';
import BirdsPage from './views/birds/index';
import SightingsPage from './views/sightings/index';
import SightingsDetailPage from './views/sightings/detail';
import ReportPage from './views/report/index';
import BirdDetailPage from './views/birds/detail';
import NoMatchPage from './views/nomatch';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <ScrollToTop>
            <div className="Router">
              <Header />

              <main className="constrainer">
                <Switch>
                  <Route exact path="/" component={ HomePage } />
                  <Route exact path="/about" component={ AboutPage } />

                  <Route exact path="/birds" component={ BirdsPage } />
                  <Route exact path="/birds/:slug" component={ BirdDetailPage } />

                  <Route exact path="/sightings" component={ SightingsPage } />
                  <Route exact path="/sightings/:id" component={ SightingsDetailPage } />

                  <Route exact path="/report" component={ ReportPage } />

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
