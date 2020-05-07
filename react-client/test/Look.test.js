import React from 'react';
import Look from '../src/components/Look.jsx';
import Enzyme, {mount, shallow, render} from 'enzyme';
import axios from 'axios';

describe('The Looks Component', () => {
  const wrapper = shallow(<Look />);

  test('should render the app component on the screen', () => {
    expect(wrapper).toBeDefined();
  });

  test('should invoke getLookById on componentDidMount', () => {
    // jest.mock('axios', () => {
    //   const products = [
    //     {
    //       'id': 10,
    //       'type': 'tops',
    //       'lookid': 1,
    //       'productid1': 10,
    //       'productid2': 13,
    //       'productid3': 16,
    //       'name': 'modi',
    //       'imgurl': 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/Top/4.jpeg',
    //       'rating': '2.00',
    //       'brand': 'temporibus',
    //       'price': '9.00',
    //       'description': 'Incidunt eligendi veritatis et velit.',
    //       'size': 'XS',
    //       'color': 'undefined',
    //       'producturl': 'https://shop.nordstrom.com/s/5390901'
    //     }
    //   ];

    //   return {
    //     get: jest.fn(() => Promise.resolve(products)),
    //   };
    // });
    const mock = jest.fn(jest.mock('axios', () => {
      const products = [
        {
          'id': 10,
          'type': 'tops',
          'lookid': 1,
          'productid1': 10,
          'productid2': 13,
          'productid3': 16,
          'name': 'modi',
          'imgurl': 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/Top/4.jpeg',
          'rating': '2.00',
          'brand': 'temporibus',
          'price': '9.00',
          'description': 'Incidunt eligendi veritatis et velit.',
          'size': 'XS',
          'color': 'undefined',
          'producturl': 'https://shop.nordstrom.com/s/5390901'
        }
      ];

      return {
        get: jest.fn(() => Promise.resolve(products)),
      };
    }));
    wrapper.instance().getLookById = mock;
    wrapper.instance().forceUpdate();
    wrapper
      .instance()
      .componentDidMount();
    expect(mock).toHaveBeenCalled();
    expect(wrapper.state()).toBeNull();
  });

  it('Successfully Queries the database on load', () => {
    expect(wrapper.state().look).toBeDefined();
  });
  const products = [
    {
      'id': 100,
      'type': 'tops',
      'lookid': 1,
      'productid1': 10,
      'productid2': 13,
      'productid3': 16,
      'name': 'modi',
      'imgurl': 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/Top/4.jpeg',
      'rating': '2.00',
      'brand': 'temporibus',
      'price': '9.00',
      'description': 'Incidunt eligendi veritatis et velit.',
      'size': 'XS',
      'color': 'undefined',
      'producturl': 'https://shop.nordstrom.com/s/5390901'
    },
    {
      'id': 110,
      'type': 'tops',
      'lookid': 1,
      'productid1': 10,
      'productid2': 13,
      'productid3': 16,
      'name': 'modi',
      'imgurl': 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/Top/4.jpeg',
      'rating': '2.00',
      'brand': 'temporibus',
      'price': '9.00',
      'description': 'Incidunt eligendi veritatis et velit.',
      'size': 'XS',
      'color': 'undefined',
      'producturl': 'https://shop.nordstrom.com/s/5390901'
    }
  ];
  it('Passes items in look down to carousels', () => {

    let wrapper = mount(<Look look={products}/>);
    expect(wrapper.find('.left-panel').children()).toHaveLength(products.length);
  });

  it('changes the look when clicked', () => {
    wrapper.find('.right-panel').simulate('click');
    expect(wrapper.state().currentLook).toEqual(2);
  });
});