import { combineEpics, Epic } from 'redux-observable';
import 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import { RootAction, RootState } from '@src/redux';
import { helloActions } from '@src/redux/hello/actions';

const delay = 3000;

const resetGreeting: Epic<RootAction, RootState> = (action$, store) =>
  action$
    .ofType('SET_GREETING')
    .delay(delay)
    .mapTo(helloActions.resetGreeting());

export const epics = combineEpics(resetGreeting);
