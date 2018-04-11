import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

import { helloReducer, HelloState } from './hello';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
  router: RouterState;
  hello: HelloState;
}

import { RootAction } from './';
export const rootReducer = combineReducers<RootState, RootAction>({
  router: routerReducer,
  hello: helloReducer,
})
