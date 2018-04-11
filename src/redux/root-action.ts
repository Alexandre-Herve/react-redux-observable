import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { $call } from 'utility-types';

import { helloActions } from '@src/redux/hello';

const returnsOfActions = [
  ...Object.values(helloActions),
].map($call);

type AppAction = typeof returnsOfActions[number];
type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction =
  | AppAction
  | ReactRouterAction
