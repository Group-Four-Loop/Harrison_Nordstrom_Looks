import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding-top: 4rem;
  justify-content: space-between;
`;
const Info = styled.div`
  position: relative;
  top: 38%;
  left: 60%;
  font-family: Lato, sans-serif;
  font-display: swap;
  font-style: Thin;
`;
const ProductImage = styled.img`
  height: 60vh;
  width: 50%;
  background-color:gray;
  align-self: top;
  object-fit: contain;
  opacity: 25%;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  right: 0;
  font-family: 'Lato', sans-serif;
  font-display: swap;
  margin-left: 3rem;
  opacity: 25%
`;
const NamePlaceholder = styled.div`
  margin-top: 2%;
  background-color: gray;
  height: 2.5%;
  width: 23%
`;
const BrandPlaceholder = styled.span`
  margin-top: 3%;
  height: 2%;
  width: 15%;
  background-color: gray;
`;
const PricePlaceholder = styled.div`
  margin-top: 10%;
  width: 15%;
  height: 2%;
  background-color: grey;
`;
const DescriptionPlaceholder = styled.div`
  margin-top: 10%;
  background-color: gray;
  height: 8%;
  width: 80%;
`;
const SizePlaceholder = styled.div`
  margin-top: 10%;
  background-color: gray;
  height: 8%;
  width: 80%;
`;
const CheckoutPlaceholder = styled.div`
  margin-top: 2%;
  display:flex;
  background-color: grey;
  height: 8%;
  width: 80%;
`;
const Stars = styled.div``;

class ProductView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Info>Tap an item for details.</Info>
        <ProductImage />
        <ProductDetails>
          <Stars ><svg focusable="false" height="16" width="16" ><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z"></path></svg><svg focusable="false" height="16" width="16" ><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z"></path></svg><svg focusable="false" height="16" width="16"><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z"></path></svg><svg focusable="false" height="16" width="16" ><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z"></path></svg><svg focusable="false" height="16" width="16"><path d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z"></path></svg></Stars>
          <NamePlaceholder/>
          <BrandPlaceholder/>
          <PricePlaceholder/>
          <DescriptionPlaceholder/>
          <SizePlaceholder/>
          <CheckoutPlaceholder/>
        </ProductDetails>
      </Container>);
  }
}

export default ProductView;