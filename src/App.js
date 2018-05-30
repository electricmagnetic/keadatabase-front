import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider  } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from './store/store';
import history from './history/history';

import Header from './components/presentation/Header';
import Footer from './components/presentation/Footer';

import HomePage from './views/index';
import AboutPage from './views/about';
import BirdsPage from './views/birds/index';
import SightingsPage from './views/sightings/index';
import ReportPage from './views/report/index';
import NoMatchPage from './views/nomatch';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <div className="Router">
            <Header />

            <main className="constrainer">
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
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
