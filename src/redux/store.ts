import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer, RootState, rootEpic } from '@src/redux';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';
import { createEpicMiddleware } from 'redux-observable';

export default function getStore(history: History, initialState?: RootState) {
  const routeMiddleware = routerMiddleware(history);
  const middlewares = [
    createEpicMiddleware(rootEpic),
    routeMiddleware
  ];
  const enhancer = compose(applyMiddleware(...middlewares));

  return createStore(
    rootReducer,
    initialState!,
    enhancer
  );
}
