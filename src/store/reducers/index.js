import { combineReducers } from 'redux';

import { layoutReducer } from '@/store/reducers/layout-reducer';
import { userReducer } from '@/store/reducers/user-reducer';

export const rootReducer = combineReducers({
  layout: layoutReducer,
  user: userReducer,
});
