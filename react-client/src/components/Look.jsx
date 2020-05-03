import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
`;
const Picture = styled.img`
  border: 1px solid black;
`;


class Look extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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
        this.setState({items: response.data}, ()=>console.log(this.state.items));
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  render() {
    return (
      <Container onClick={()=>{ this.changeLook(); }}>
        {this.state.items.map((item) => {
          console.log(item);
          return (
            <Picture src={item.imgurl} key={item.id} />
          );
        })}
      </Container>
    );
  }
}

export default Look;