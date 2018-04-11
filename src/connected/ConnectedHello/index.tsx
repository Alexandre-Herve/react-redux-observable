import { connect } from 'react-redux';

import { RootState } from '@src/redux';
import {
  helloActions,
  getGreeting 
} from '@src/redux/hello';
import { Hello } from '@src/components/Hello';

const mapStateToProps = (state: RootState) => ({
  greeting: getGreeting(state)
});

export const ConnectedHello = connect(mapStateToProps, {
  onSetGreeting: helloActions.setGreeting,
})(Hello)
