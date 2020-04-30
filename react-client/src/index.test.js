import React from 'react';
import Index from './index';
import Look from './components/Look'
import {mount, shallow} from 'enzyme';

describe('Index Counting Component', () => {
  it('starts with 0', () => {
    //render the component by creating a shallow copy of the the component we're testing
    const wrapper = shallow(<Index />);
    //We can treat our wrapper just like we would a normal React component.  And use enzyme methods like 'state()' to access the state of our would-be react component.
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count 0');
  });

  it('starts has a state with the correct count', () => {
    //render the component by creating a shallow copy of the the component we're testing
    const wrapper = shallow(<Index />);
    //We can treat our wrapper just like we would a normal React component.  And use enzyme methods like 'state()' to access the state of our would-be react component.
    const countState = wrapper.state().count;
    // Expectation to follow :D
    expect(countState).toEqual(0);
  });

})

describe('Your soon to be carousel component', () => {
  it ('should have as many items as props', () => {
    const wrapper = shallow(<Look />);
    // expect(wrapper.contains(<a key='one'>blah</a>)).toBe(false);
    expect(wrapper.find('div').children()).lengthOf(4);
  })

})

// test('adds 1 + 2 to equal 3', () => {
//   let sum = (a,b) => {
//     return a+b;
//   }
//   expect(sum(1, 2)).toBe(3);
// });