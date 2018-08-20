import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'moment/locale/en-nz';

import './assets/css/custom.css';

Moment.globalLocale = 'en-nz';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
