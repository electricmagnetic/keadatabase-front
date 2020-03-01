import 'react-app-polyfill/ie11';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'moment/locale/en-nz';

import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle';

import './assets/css/custom.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

Moment.globalLocale = 'en-nz';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
