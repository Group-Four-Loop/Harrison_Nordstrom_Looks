import React from 'react';
import App from '../src/components/App.jsx';
import Look from '../src/components/Look.jsx';
import {mount, shallow, render} from 'enzyme';

describe('Sets the App up properly', () => {

  it('Should include the Look component', () => {
    let wrapper = shallow(<App/>);
    expect(wrapper.containsMatchingElement(<Look />)).toBe(true);
  });

  it('Sets up the Look component properly', () => {
    let wrapper = shallow(<Look/>);
    //toEqual - all have same properties, not exact same obj
    expect(wrapper.state()).toEqual({look: {}, currentLook: 1, selectedProduct: null});
  });

});

describe('Tests for the Look component', () => {
  it ('Should contain the correct info from state', () => {
    const wrapper = shallow(<Look />);
    //added a comment here!
    expect(wrapper.contains(<a key='one'>blah</a>)).toBe(false);
    // expect(wrapper.contains(<a key='one'>one</a>)).toBe(true);
    // expect(wrapper.find('div').children()).toHaveLength(4);
  });

});
