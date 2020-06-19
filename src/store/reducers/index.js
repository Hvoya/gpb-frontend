import { combineReducers } from 'redux';
import { layoutReducer } from '@/store/reducers/layout-reducer';

export const rootReducer = combineReducers({
  layout: layoutReducer,
});
