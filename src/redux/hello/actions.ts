import { createAction } from 'typesafe-actions';

export const helloActions = {
  setGreeting: createAction('SET_GREETING', (greeting: string) => ({
    type: 'SET_GREETING',
    payload: greeting
  })),
  resetGreeting: createAction('RESET_GREETING')
}
