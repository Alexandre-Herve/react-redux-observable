import { combineEpics } from 'redux-observable';

import { epics as hello } from './hello/epics';

export const rootEpic = combineEpics(
  hello
);
