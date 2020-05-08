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
  font-family: Brandon Text;
  margin-left: 3rem;
`;
const ProductHeader = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  font-size:larger;
`;
const PurchaseDetails = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  font-size:larger;
`;
const ProductDescription = styled.div`

`;
const Sizes = styled.div`
  border: 1px solid black;
  height: 1rem;
  width: 87.75%;
  padding: 1rem;
`;
const SizeGuide = styled.a`
  align-self: flex-end;
  padding-top: .5rem;
`;
const Checkout = styled.div`
  display:flex;
  background-color: black;
  height: 2.5rem;
  width: 100%;
  color: white;
  align-items: center;
  justify-content: center;
`;
const DetailLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class ProductView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <ProductImage src={this.props.product.imgurl}></ProductImage>
        <ProductDetails>
          <ProductHeader>
            <strong>{this.props.product.name}</strong>
            <div>{this.props.product.brand}</div>
          </ProductHeader>
          <PurchaseDetails>
            <br/>
            <div>
              <strong>${this.props.product.price}</strong> shipping details
            </div>
            <div>Sale Details</div>
          </PurchaseDetails>
          <br/>
          <ProductDescription>
            {this.props.product.description}
          </ProductDescription>
          <br/>
          <div><strong>Fit:</strong>  True to size.</div>
          <Sizes>Size</Sizes>
          <SizeGuide>Size guides</SizeGuide>
          <div>
            <br/>
            color pictures
            <br/>
          </div>
          <Checkout>Add to Bag</Checkout>
          <DetailLink>
            <br/>
            See full details
          </DetailLink>
        </ProductDetails>
      </Container>);
  }
}

export default ProductView;