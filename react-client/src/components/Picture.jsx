import React from 'react';
import styled from 'styled-components';

const Product = styled.img`
  max-height: 340px;
  max-width: 143px;
`;

const Pictures = (props) => {
  console.log(props.product.type, props);
  return (
    <Product src={`${props.product.imgurl}`} key={props.product.id}>
    </Product>
  );
};

export default Pictures;