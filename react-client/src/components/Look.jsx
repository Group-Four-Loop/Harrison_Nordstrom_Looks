import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Tops from './Tops.jsx';
import Bottoms from './Bottoms.jsx';
import Footwear from './Footwear.jsx';

const Container = styled.div`
  border: 1px solid black;
  display:flex;
`;
const LeftPanel = styled.div`
  border: 1px solid black;
  background-color: #FAEBD7;
  width: 50%;
  left: 0px;
  display:flex;
  flex-direction: column;
  align-items: center;
`;
const RightPanel = styled.div`
  border: 1px solid black;
  background-color: #F0F8FF;
  width:50%;
  right: 0px;
`;



class Look extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      look: {},
      currentLook: 1,
    };
    this.getLookById = this.getLookById.bind(this);
    this.changeLook = this.changeLook.bind(this);
    this.getUpdatedProps = this.getUpdatedProps.bind(this);
  }

  componentDidMount() {
    this.getLookById(this.state.currentLook);
  }

  changeLook() {
    console.log('cl');
    this.setState((prevState) => {
      return (
        {currentLook: prevState.currentLook + 1}
      );
    });
    this.getLookById(this.state.currentLook);
  }

  getLookById(id) {
    axios.get('/api', {
      params: {
        lookId: id
      }
    })
      .then((response) => {
        let products = response.data;
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
        console.log('error', err);
      });
  }

  getUpdatedProps() {
    return Object.values(this.state.look);
  }


  render() {
    let looks = this.getUpdatedProps();
    let car = looks.map(carousel =>{
      switch (carousel[0].type) {
      case 'tops':
        return ( <Tops key={carousel[0].type} items={carousel} />
        );
      case 'bottoms':
        return ( <Bottoms key={carousel[0].type} items={carousel} />
        );
      case 'footwear':
        return ( <Footwear key={carousel[0].type} items={carousel} />
        );
      default:
        return (<div>No Products Found</div>);
      }
    });
    return (

      <Container onClick={()=>{ this.changeLook(); }}>
        <h1>{this.state.currentLook}</h1>
        <LeftPanel>
          {car}
        </LeftPanel>
        <RightPanel>

        </RightPanel>
      </Container>
    );
  }
}

export default Look;