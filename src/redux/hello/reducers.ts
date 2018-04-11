import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';

import { RootAction } from '@src/redux';
import { helloActions } from './';

export type HelloState = {
  readonly greeting: string;
}

export const helloReducer = combineReducers<HelloState, RootAction>({
  greeting: (state = 'you', action) => {
    switch (action.type) {
      case getType(helloActions.setGreeting):
        return action.payload
      case getType(helloActions.resetGreeting):
        return 'you';
      default:
        return state;
    }
  }
});
