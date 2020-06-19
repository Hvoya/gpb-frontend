import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/App';
import '@/css/normalize.css';
import '@/css/reset.css';
import '@/css/base.css';

import { initAxios } from '@/inits/axios';

initAxios();

const container = document.querySelector('#TheApp');
ReactDOM.render(<App />, container);
