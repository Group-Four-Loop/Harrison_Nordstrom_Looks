import React from 'react';
import styled from 'styled-components';

const Product = styled.div`
  margin: 5.5rem;
  transition: .5s;
`;
const Picture = styled.img`
  width: 347;
  height: 751;
`;

const Pictures = (props) => {
  return (
    <Product key={props.product.id} style={props.position}>
      <Picture src={`${props.product.imgurl}`}></Picture>
    </Product>
  );
};

export default Pictures;