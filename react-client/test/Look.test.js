import React from 'react';
import Look from '../src/components/Look.jsx';
import Enzyme, {mount, shallow, render} from 'enzyme';

describe('The Looks Component', () => {
  const wrapper = mount(<Look />, {disableLifecycleMethods: false});
  it('Successfully Queries the database on load', () => {
    expect(wrapper.state().look).toBeDefined();
  });
});