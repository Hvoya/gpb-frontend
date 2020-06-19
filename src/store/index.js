import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '@/store/reducers';

const reduxDevtool = process.env.NODE_ENV === 'production' ? r => r : composeWithDevTools;

const store = createStore(rootReducer, reduxDevtool(applyMiddleware(thunk)));

export default store;
