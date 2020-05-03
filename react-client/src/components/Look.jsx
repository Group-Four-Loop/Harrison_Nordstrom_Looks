import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
const Carousel = styled.div`
  display:flex;
  flex-direction:row;
`;
const Picture = styled.img`
  border: 1px solid black;
  max-width:100px;
  padding:1rem;
`;


class Look extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      look: {},
      currentLook: 1,
    };
    this.getLookById = this.getLookById.bind(this);
    this.changeLook = this.changeLook.bind(this);
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
        console.log('ITS A FUNCTION I SAY', newLooks);
        this.setState({items: response.data, look: newLook}, ()=>console.log(this.state));
      })
      .catch((err) => {
        console.log('error', err);
      });
  }


  render() {
    const looks = Object.values(this.state.look);
    let car;
    if (looks.length > 0) {
      car = looks.map((carousel) => {
        return (
          <Carousel >
            {carousel.map((item) => {
              return (
                <Picture src={item.imgurl} key={item.id}/>);
            })}
          </Carousel>);
      });
    } else {
      car = <div></div>;
    }

    return (
      <Container onClick={()=>{ this.changeLook(); }}>
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