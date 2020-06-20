import React from 'react';
import ReactDOM from 'react-dom';

import { initAxios } from '@/inits/axios';

initAxios();

import App from '@/App';
import '@/assets/css/normalize.css';
import '@/assets/css/reset.css';
import '@/assets/css/base.css';

const container = document.querySelector('#TheApp');
ReactDOM.render(<App />, container);
