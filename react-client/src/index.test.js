import React from 'react';
import Index from './index';
import Look from './components/Look';
import {mount, shallow, render} from 'enzyme';

describe('Tests for the Index', () => {
  it('Count shit', () => {
    //render the component by creating a shallow copy of the the component we're testing
    const wrapper = shallow(<Index />);
    //We can treat our wrapper just like we would a normal React component.  And use enzyme methods like 'state()' to access the state of our would-be react component. see docs for full list of other cool enzyme methods we can use
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count 0');
  });

  it('Should include the Look component', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.containsMatchingElement(<Look />)).toBe(true);
  });

});

describe('Tests for the Look component', () => {
  it ('Should contain the correct info from state', () => {
    const wrapper = shallow(<Look />);
    //added a comment here!
    expect(wrapper.contains(<a key='one'>blah</a>)).toBe(false);
    expect(wrapper.contains(<a key='one'>one</a>)).toBe(true);
    expect(wrapper.find('div').children()).toHaveLength(4);
  });

});
