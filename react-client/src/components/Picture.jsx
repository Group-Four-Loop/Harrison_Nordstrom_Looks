import React from 'react';
import styled from 'styled-components';

const Product = styled.div`
  margin: 1rem;
  transition: .5s;
  overflow:hidden;
`;

const Pictures = (props) => {
  console.log(props.product.type, props);
  return (
    <Product key={props.product.id} style={props.position}>
      <img src={`${props.product.imgurl}`}></img>
    </Product>
  );
};

export default Pictures;