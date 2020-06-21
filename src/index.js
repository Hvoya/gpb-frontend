import React from 'react';
import ReactDOM from 'react-dom';

import { initAxios } from '@/inits/axios';

initAxios();

import App from '@/App';
import '@/assets/css/normalize.css';
import '@/assets/css/reset.css';
import '@/assets/css/base.css';

localStorage.setItem('token', '9e6ba03e430b41914f8b6cd44b2ca9f567a7d04c');

const container = document.querySelector('#TheApp');
ReactDOM.render(<App />, container);
