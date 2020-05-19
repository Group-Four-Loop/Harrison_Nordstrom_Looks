import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 101%;
  width: 101%;
  overflow: visible;
  position: absolute;
  z-index 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  font-family: Lato, sans-serif;
  font-display: swap;
`;
const Close = styled.div`
  font-weight: light;
  font-size: larger;
  align-self: flex-end;
  color: grey;
  opacity: 75%;
`;
const Modal = styled.div`
  padding: .5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  max-height: 75%;
  min-width: 21%;
`;

const Checkout = styled.div`
  width: 70%;
  height: 40px;
  background-color: black;
  color: white;
  display:flex;
  align-items:center;
  justify-content: center;
  text-align: center;
  font-weight: lighter;
  font-size: small;
  margin-bottom: 3%;
`;
const Add = styled.div`
  margin-top: 2%;
  font-size: small;
`;

const Header = styled.div`
  color: black;
  font-size: larger;
  font-weight: bold;
`;
const ProductImage = styled.img`
  max-height: 60%;
  max-width: 80%;
`;
const Details = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5%;
`;

const BagModal = (props) => {
  return (
    <Container>
      <Modal>
        <Close className='close-modal' onClick={()=>{ props.toggleModal(); }}>X</Close>
        <Header>We love this, too</Header>
        <Add>Added to your bag.</Add>
        <br/>
        <ProductImage src={`${props.product.imgurl}`}/>
        <Details>
          Size: {props.product.size}
          <br/>
          <br/>
          <strong>${props.product.price}</strong>
        </Details>
        <br/>
        <Checkout>Checkout</Checkout>
      </Modal>
    </Container>
  );
};

export default BagModal;
