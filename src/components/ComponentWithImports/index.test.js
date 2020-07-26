import React from 'react';
import { shallow } from 'enzyme';
import ComponentWithImports from './index';
import {findByTestAttr} from '../../utils/testUtils';

/// below imports are required for mock import approach 1 using jest.spyOn
import * as helpers from '../../utils/helpers';
import * as greeting from '../../utils/greeting';
///

const setup = (props={}) => {
  return shallow(<ComponentWithImports { ...props } />);
};

// this jest.mock is required for mock import approach 2
jest.mock('../../utils/anotherHelpers.js', () => (
  {
    ...(jest.requireActual('../../utils/anotherHelpers.js')),
    add: () => 'Mock result!',
    greeting: () => 'Hello, everyone!',
  }
));

// jest.mock('../../utils/greeting.js', () => jest.fn(()=>'Hello, Everyone!'));

describe('ComponentWithImports', () => {
  test('mock import default approach 1 (jest.spyOn)', () => {
    const mock = jest.spyOn(greeting, 'default');  // spy on sum function
    mock.mockReturnValue('Mocked greeting!');  // mock the return value
    const wrapper = setup();
    const pEl = findByTestAttr(wrapper, 'greetingResult');
    expect(pEl.text()).toBe('Greeting Result: Mocked greeting!');
  });

  test('mock import approach 1 (jest.spyOn)', () => {
    const mock = jest.spyOn(helpers, 'sum');  // spy on sum function
    mock.mockReturnValue('Mocked value');  // mock the return value
    const wrapper = setup();
    const pEl = findByTestAttr(wrapper, 'sumResult');
    expect(pEl.text()).toBe('Sum Result: Mocked value');
  });

  test('mock import approach 2 (use jest.mock above)', () => {
    const wrapper = setup();
    const pEl = findByTestAttr(wrapper, 'addResult');
    expect(pEl.text()).toEqual('Add Result: Mock result!');
  });
});