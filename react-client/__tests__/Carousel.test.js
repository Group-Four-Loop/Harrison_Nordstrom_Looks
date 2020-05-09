import React from 'react';
import Carousel from '../src/components/Carousel.jsx';
import Enzyme, {mount, shallow, render} from 'enzyme';

describe('The Carousel', () => {

  const items = [
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
    },
    {
      'id': 11,
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
      'id': 12,
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

  it ('mounts without dying', () => {
    let wrapper = shallow(<Carousel items={items} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.state().items).toHaveLength(3);
  });

  it ('contains pictures', () => {
    let wrapper = mount(<Carousel items={items} />);
    expect(wrapper.find('img')).toHaveLength(3);
  });

  // it ('clicks left and updates state - size 200', () => {
  //   let wrapper = mount(<Carousel items={items} />);
  //   let RightArrow = wrapper.find('.right-arrow');
  //   let LeftArrow = wrapper.find('.left-arrow');
  //   RightArrow.simulate('click');
  //   expect(wrapper.state().picturePosition).toEqual(0);
  //   RightArrow.simulate('click');
  //   expect(wrapper.state().picturePosition).toEqual(-200);
  //   RightArrow.simulate('click');
  //   expect(wrapper.state().picturePosition).toEqual(-200);
  //   LeftArrow.simulate('click');
  //   expect(wrapper.state().picturePosition).toEqual(0);
  //   LeftArrow.simulate('click');
  //   expect(wrapper.state().picturePosition).toEqual(200);
  //   LeftArrow.simulate('click');
  //   expect(wrapper.state().picturePosition).toEqual(200);
  // });

  const bottoms = [
    {
      'id': 10,
      'type': 'bottoms',
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
      'id': 11,
      'type': 'bottoms',
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
      'id': 12,
      'type': 'bottoms',
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

  it ('clicks left and updates state - size 199.5', () => {
    let wrapper = mount(<Carousel items={bottoms} style={{order: 0}}/>);
    let RightArrow = wrapper.find('.right-arrow');
    let LeftArrow = wrapper.find('.left-arrow');
    RightArrow.simulate('click');
    expect(wrapper.state().picturePosition).toEqual(0);
    RightArrow.simulate('click');
    expect(wrapper.state().picturePosition).toEqual(-199.5);
    RightArrow.simulate('click');
    expect(wrapper.state().picturePosition).toEqual(-199.5);
    LeftArrow.simulate('click');
    expect(wrapper.state().picturePosition).toEqual(0);
    LeftArrow.simulate('click');
    expect(wrapper.state().picturePosition).toEqual(199.5);
    LeftArrow.simulate('click');
    expect(wrapper.state().picturePosition).toEqual(199.5);
  });

  it('assigns an order to child carousels', () => {
    let wrapper = mount(<Carousel items={bottoms} picturePosition={215} style={{order: 0}}/>);
    expect(wrapper.prop('style')).toEqual({'order': 0});
  });

  it('successfully updates when new items are passed', () => {
    let wrapper = mount(<Carousel items={bottoms} picturePosition={215} style={{order: 0}}/>);
    expect(wrapper.prop('style')).toEqual({'order': 0});
    wrapper.setProps({items: items, style: {order: -1}});
    expect(wrapper.prop('style')).toEqual({'order': -1});
  });

});