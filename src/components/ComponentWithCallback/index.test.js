import React from 'react';
import ComponentWithCallback from './index';
import { shallow } from 'enzyme';
import {findByTestAttr} from '../../utils/testUtils';

const setup = (props={}) => {
  return shallow(<ComponentWithCallback { ...props } />);
};

describe('ComponentWithCallback', () => {
  test('call callback when the button is clicked', () => {
    const callback = jest.fn();
    const wrapper = setup({ callback });
    expect(wrapper.length).toBe(1);
  });
  test('call callback when the button is clicked', () => {
    const callback = jest.fn();
    const wrapper = setup({ callback });
    const buttonEl = findByTestAttr(wrapper, 'button');
    buttonEl.simulate('click');
    expect(callback).toHaveBeenCalledWith('Callback Called');
  });
});