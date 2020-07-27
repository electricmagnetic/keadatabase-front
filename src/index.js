import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'moment/locale/en-nz';

import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle';

import './assets/css/custom.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

Moment.globalLocale = 'en-nz';

ReactDOM.render(<App />, document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
