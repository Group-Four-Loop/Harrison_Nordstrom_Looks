import React from 'react';
import styled from 'styled-components';

const Product = styled.div`
  transition: .25s;
  display: flex;
  flex-direction: column;
  align-items:center;
`;
const Picture = styled.img`
  max-height: 340px;
  max-width: 150px;
`;

const Pictures = (props) => {
  return (
    <Product key={props.product.id} style={props.position}>
      <Picture src={`${props.product.imgurl}`} onClick={() => { props.selectProduct(props.product); }}></Picture>
      <div>{props.product.name}</div>
      <strong>{`$${props.product.price}`}</strong>
    </Product>
  );
};

export default Pictures;