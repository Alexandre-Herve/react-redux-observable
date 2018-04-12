import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Hello } from './';

test('matches snapshot', () => {
  const onSetGreeting = sinon.spy();
  const greeting = 'Hi';
  const wrapper = shallow(<Hello greeting={greeting} onSetGreeting={onSetGreeting} />);
  expect(wrapper).toMatchSnapshot();
});

test('renders greeging', () => {
  const onSetGreeting = sinon.spy();
  const greeting = 'Hi';
  const wrapper = shallow(<Hello greeting={greeting} onSetGreeting={onSetGreeting} />);
  expect(wrapper.text()).toContain(greeting);
});
