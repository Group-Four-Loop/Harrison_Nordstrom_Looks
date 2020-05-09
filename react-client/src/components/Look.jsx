import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import model from '../models/Looks.js';
import ProductView from './ProductView.jsx';
import Empty from './EmptyProductView.jsx';

const Container = styled.div`
  display:flex;
  justify-content: space-between;
`;
const LeftPanel = styled.div`
  border: 1px solid grey;
  width: 38%;
  left: 0px;
  display:flex;
  flex-direction: column;
  align-items: center;
`;
const LookHeader = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 9%;
  font-family: Lato, sans-serif;
`;
const LookName = styled.div`
  font-size: large;
  font-weight: 200;
  text-transform: uppercase;
  margin-top: .5rem;
  margin-bottom: .25rem;
`;
const LookCreator = styled.div`
  font-size:smaller;
  font-weight:200;
  text-decoration: underline;
`;
const LookWindow = styled.div`
  border: 1px solid grey;
  width: 100%;
  left: 0px;
  display:flex;
  flex-direction: column;
  margin: 1rem;
  align-items: center;`;
const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  width:45%;
  right: 0px;
  align-content: center;
`;
const ColumnFiller = styled.div`
width: 10%;
`;

class Look extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedLooks: [],
      look: {},
      currentLook: 0,
      selectedProduct: null
    };
    this.getLookById = this.getLookById.bind(this);
    this.changeLook = this.changeLook.bind(this);
    this.updateCurrentlySelectedProduct = this.updateCurrentlySelectedProduct.bind(this);
  }

  componentDidMount() {
    this.getLooksByProductId(10);
  }

  changeLook() {
    this.setState((prevState) => {
      return (
        {currentLook: prevState.currentLook + 1,
          look: prevState.relatedLooks[prevState.currentLook]}
      );
    });
  }

  getLooksByProductId(productId) {
    model.getLooksByProductId(productId)
      .then((response) => {
        let products = response;
        var newLook = {};
        let listOfLooks = [];
        let currentLook = null;
        for (var x = 0; x <= products.length - 1; x++) {
          let productType = products[x].type;
          if (x === 0) {
            newLook.lookId = products[x].lookid;
            newLook.lookName = products[x].lookName;
            newLook.lookCreator = products[x].lookCreator;
            currentLook = products[x].lookName;
          } else if (currentLook !== products[x].lookName && x !== 0) {
            listOfLooks.push(newLook);
            var newLook = {};
            newLook.lookId = products[x].lookId;
            newLook.lookName = products[x].lookName;
            newLook.lookCreator = products[x].lookCreator;
            currentLook = products[x].lookName;
            console.log(newLook, currentLook);
          }
          if (!newLook[productType] && productType) {
            newLook[productType] = [];
          }
          newLook[productType].push(products[x]);
        }
        //we will still have one look that isn't pushed to the list because our if  condition didnt fire
        listOfLooks.push(newLook);
        this.setState({look: listOfLooks[0], relatedLooks: listOfLooks}, ()=> { console.log(this.state); });
      })
      .catch((err) => {
      });
  }

  // getLookById(id) {
  //   // axios.get('/api', {
  //   //   params: {
  //   //     lookId: id
  //   //   }
  //   // })
  //   model.getLooksById(id)
  //     .then((response) => {
  //       console.log('RESPONSE', response);
  //       // let products = response.data;
  //       let products = response;
  //       let newLook = {};
  //       for (var x = 0; x <= products.length - 1; x++) {
  //         if (!newLook[products[x].type]) {
  //           newLook[products[x].type] = [];
  //         }
  //         newLook[products[x].type].push(products[x]);
  //       }
  //       let newLooks = Object.values(newLook);
  //       this.setState({look: newLooks}, ()=>console.log(this.state));
  //     })
  //     .catch((err) => {
  //       // console.log('error', err);
  //       //removed error because it was making it difficult to read my jest tests.  ALSO, I need to learn how to mock this behavior in testing suite
  //     });
  // }

  updateCurrentlySelectedProduct(product) {
    this.setState({selectedProduct: product});
  }

  render() {
    let state = this.state.look;
    let look = {};
    for (var prop in state) {
      if (Array.isArray(state[prop])) {
        look[prop] = state[prop];
      }
    }
    const creator = state.lookCreator;
    const lookName = state.lookName;
    let looks = Object.values(look);

    let productCarousels = looks.map(carousel => {
      let order = (carousel[0].type === 'tops') ? -1 : (carousel[0].type === 'bottoms') ? 0 : 1;
      return ( <Carousel key={carousel[0].type} items={carousel} style={{'order': order}} selectFunc={this.updateCurrentlySelectedProduct}/>
      );
    });

    return (
      <Container className="app-container">
        <LeftPanel className="left-panel">
          {this.state.look ?
            <LookHeader className="look-name" onClick={()=> { this.changeLook(); }}>
              <LookName>
                {lookName}
                <br/>
              </LookName>
              <LookCreator>
                {creator}
              </LookCreator>
            </LookHeader> :
            <LookHeader className="look-name" onClick={()=> { this.changeLook(); }}/>
          }
          <LookWindow>
            {productCarousels}
          </LookWindow>
        </LeftPanel>
        <RightPanel className="right-panel">
          {(this.state.selectedProduct) ?
            <ProductView product={this.state.selectedProduct}/> : <Empty/>
          }
        </RightPanel>
        <ColumnFiller/>
      </Container>
    );
  }
}

export default Look;