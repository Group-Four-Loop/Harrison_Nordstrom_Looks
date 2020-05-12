import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding-top: 4rem;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  height: 80vh;
  width: 50%;
  align-self: top;
  object-fit: contain;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  right: 0;
  font-family: 'Lato', sans-serif;
  margin-left: 3rem;
`;
const ProductHeader = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  font-size:larger;
  font-weight: 400;
`;
const ProductBrand = styled.span`
  font-weight: 300;
`;
const PurchaseDetails = styled.div`
  display: flex;
  font-size: normal;
  width: 100%;
`;
const ProductPrice = styled.div`
  align-self: flex-start;
`;
const ShippingDetails = styled.span`
  position: absolute;
  right: 15%;
  align-items: center;
  display:flex;
  flex-direction: row;
  font-size: smaller;
`;
const Truck = styled.svg`
`;
const ProductDescription = styled.div`
  font-weight: 400;
  font-size: smaller;
`;
const Sizes = styled.div`
  border: 1px solid black;
  height: 1rem;
  width: 87.75%;
  padding: 1rem;
  font-size:small;
  font-weight:bold;
`;
const SizeGuide = styled.a`
  align-self: flex-end;
  padding-top: .5rem;
  font-weight: 300;
  font-size: smaller;
  text-decoration: underline;
`;
const Checkout = styled.div`
  display:flex;
  background-color: black;
  height: 2.5rem;
  width: 100%;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: small;
`;
const DetailLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  font-weight: 300;
  font-size: small;
`;
const FitDetails = styled.div`
  font-size:smaller;
  font-weight: 300;
`;

class ProductView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <ProductImage src={this.props.product.imgurl} />
        <ProductDetails>
          <ProductHeader>
            {this.props.product.name}
            <ProductBrand>
              {this.props.product.brand}
            </ProductBrand>
            <br/>
          </ProductHeader>
          <PurchaseDetails>
            <ProductPrice>
              <strong>${this.props.product.price}</strong>
            </ProductPrice>
            <ShippingDetails><Truck focusable="false" height="25" width="30" ><g fill="none" stroke="#393939" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"><path d="M6.998 16.372h9.64m3.86 0H23.5v-3.448l-3.9-2.482-1.572-4.744H.5v10.674h2.63"></path><circle cx="5.068" cy="16.371" r="1.931"></circle><circle cx="18.568" cy="16.371" r="1.931"></circle></g><path d="M13.673 13.822v-5.46h-.811v3.391L9.673 8.251v5.436h.81v-3.341l.029.031z" fill="#393939"></path></Truck> FREE SHIPPING</ShippingDetails>

          </PurchaseDetails>
          <br/>
          <ProductDescription>
            {this.props.product.description}
          </ProductDescription>
          <br/>
          <FitDetails><strong>Fit:</strong>   True to size.</FitDetails>
          <Sizes>Size</Sizes>
          <SizeGuide>Size guides</SizeGuide>
          <div>
            <br/>
            {/* color pictures */}
            <br/>
          </div>
          <br/>
          <Checkout onClick={()=>{ this.props.toggleModal(); }}>Add to Bag</Checkout>
          <DetailLink>
            <br/>
            See full details
          </DetailLink>
        </ProductDetails>
      </Container>);
  }
}

export default ProductView;