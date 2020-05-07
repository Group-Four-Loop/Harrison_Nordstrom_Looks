import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';


const Container = styled.div`
  border: 1px solid black;
  display:flex;
`;
const LeftPanel = styled.div`
  border: 1px solid black;
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
        // console.log('error', err);
        //removed error because it was making it difficult to read my jest tests.  ALSO, I need to learn how to mock this behavior in testing suite
      });
  }

  getUpdatedProps() {
    return Object.values(this.state.look);
  }


  render() {
    let looks = this.getUpdatedProps();
    let car = looks.map(carousel =>{
      return ( <Carousel key={carousel[0].type} items={carousel} />
      );
    }
    );
    return (
      <Container className="app-container">
        <h1>{this.state.currentLook}</h1>
        <LeftPanel className="left-panel">
          {car}
        </LeftPanel>
        <RightPanel onClick={()=> { this.changeLook(); }}>

        </RightPanel>
      </Container>
    );
  }
}

export default Look;