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
    this.getUpdatedProps = this.getUpdatedProps.bind(this);
    this.updateCurrentlySelectedProduct = this.updateCurrentlySelectedProduct.bind(this);
  }

  componentDidMount() {
    this.getLooksByProductId(10);
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
        console.log('rr', response);
        let newLook = {};
        for (var x = 0; x <= products.length - 1; x++) {
          if (!newLook[products[x].type]) {
            newLook[products[x].type] = [];
          }
          newLook[products[x].type].push(products[x]);
        }
        let newLooks = Object.values(newLook);
        this.setState({look: newLooks});
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
    this.setState({selectedProduct: product});
  }

  render() {
    let looks = this.getUpdatedProps();
    let productCarousels = looks.map(carousel => {
      let order = (carousel[0].type === 'tops') ? -1 : (carousel[0].type === 'bottoms') ? 0 : 1;
      return ( <Carousel key={carousel[0].type} items={carousel} style={{'order': order}} selectFunc={this.updateCurrentlySelectedProduct}/>
      );
    });

    return (
      <Container className="app-container">
        <LeftPanel className="left-panel">
          {this.state.look[0] ?
            <LookHeader className="look-name" onClick={()=> { this.changeLook(); }}>
              <LookName>
                {this.state.look[0][0].lookName}
                <br/>
              </LookName>
              <LookCreator>
                {this.state.look[0][0].creatorImgUrl}
                {this.state.look[0][0].lookCreator}
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