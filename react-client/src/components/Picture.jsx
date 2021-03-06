import React from 'react';
import styled from 'styled-components';

const Product = styled.div`
  transition: .25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Lato, sans-serif;
  font-display: swap;
`;
const Brand = styled.div`
  font-weight: 300;
  font-size: small;
`;
const Price = styled.div`
  font-style: 300;
  font-size: small;
  font-weight: bold;
`;
const Picture = styled.img`
  max-height: 283px;
  width: 125px;
  object-fit:contain;
  z-index: -1
`;
const Pictures = (props) => {
  return (
    <Product key={props.product.id} style={props.position}>
      <Picture src={`${props.product.imgurl}`} alt={`${props.product.type}-photo`} onClick={() => { props.selectProduct(props.product); }}></Picture>
      <Brand>{props.product.brand}</Brand>
      <Price>{`$${props.product.price}`}</Price>
    </Product>
  );
};

export default Pictures;