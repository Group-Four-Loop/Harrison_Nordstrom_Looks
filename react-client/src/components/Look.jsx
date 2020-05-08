import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import model from '../models/Looks.js';
import ProductView from './ProductView.jsx';

const Container = styled.div`
  border: 1px solid black;
  display:flex;
  justify-content: space-between;
`;
const LeftPanel = styled.div`
  border: 1px solid black;
  width: 38%;
  left: 0px;
  display:flex;
  flex-direction: column;
  align-items: center;
`;
const LookName = styled.h2`
  height: .25rem;
`;
const LookWindow = styled.div`
  border: 1px solid black;
  width: 100%;
  left: 0px;
  display:flex;
  flex-direction: column;
  margin: 1rem;
  align-items: center;`;
const RightPanel = styled.div`
  width:45%;
  right: 0px;
`;
const ColumnFiller = styled.div`
width: 10%;
`;

class Look extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      look: {},
      currentLook: 1,
      selectedProduct: null
    };
    this.getLookById = this.getLookById.bind(this);
    this.changeLook = this.changeLook.bind(this);
    this.getUpdatedProps = this.getUpdatedProps.bind(this);
    this.updateCurrentlySelectedProduct = this.updateCurrentlySelectedProduct.bind(this);
  }

  componentDidMount() {
    this.getLookById(1);
  }

  changeLook() {
    this.setState((prevState) => {
      return (
        {currentLook: prevState.currentLook + 1}
      );
    });
    this.getLookById(this.state.currentLook);
  }

  //THIS NEEDS WORK!! Need to refactor such that when multiple looks are returned, we only display one. the rest go to a separate look carousel. this is actually a pretty big refactor
  getLooksByProductId(productId) {
    model.getLooksByProductId(productId)
      .then((response) => {
        // let products = response.data;
        let products = response;
        let newLook = {};
        for (var x = 0; x <= products.length - 1; x++) {
          if (!newLook[products[x].type]) {
            newLook[products[x].type] = [];
          }
          newLook[products[x].type].push(products[x]);
        }
        let newLooks = Object.values(newLook);
        this.setState({look: newLooks}, ()=>console.log(this.state));
      })
      .catch((err) => {
      });
  }

  getLookById(id) {
    // axios.get('/api', {
    //   params: {
    //     lookId: id
    //   }
    // })
    model.getLooksById(id)
      .then((response) => {
        console.log('RESPONSE', response);
        // let products = response.data;
        let products = response;
        let newLook = {};
        for (var x = 0; x <= products.length - 1; x++) {
          if (!newLook[products[x].type]) {
            newLook[products[x].type] = [];
          }
          newLook[products[x].type].push(products[x]);
        }
        let newLooks = Object.values(newLook);
        this.setState({look: newLooks}, ()=>console.log(this.state));
      })
      .catch((err) => {
        // console.log('error', err);
        //removed error because it was making it difficult to read my jest tests.  ALSO, I need to learn how to mock this behavior in testing suite
      });
  }

  getUpdatedProps() {
    return Object.values(this.state.look);
  }

  updateCurrentlySelectedProduct(product) {
    console.log('SELECTED:', product);
    this.setState({selectedProduct: product});
  }

  render() {
    let looks = this.getUpdatedProps();
    let car = looks.map(carousel =>{
      let order = (carousel[0].type === 'tops') ? -1 : (carousel[0].type === 'bottoms') ? 0 : 1;
      return ( <Carousel key={carousel[0].type} items={carousel} style={{'order': order}} selectFunc={this.updateCurrentlySelectedProduct}/>
      );
    }
    );
    let productViewTest = {
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
    };
    return (
      <Container className="app-container">
        <LeftPanel className="left-panel">
          <LookName onClick={()=> { this.changeLook(); }}>{this.state.currentLook}
          </LookName>
          <LookWindow>
            {car}
          </LookWindow>
        </LeftPanel>
        <RightPanel className="right-panel">
          <ProductView product={this.state.selectedProduct || productViewTest}></ProductView>
        </RightPanel>
        <ColumnFiller></ColumnFiller>
      </Container>
    );
  }
}

export default Look;