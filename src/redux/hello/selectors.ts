import { RootState } from '@src/redux';

export const getGreeting =
  (state: RootState) => state.hello.greeting;
