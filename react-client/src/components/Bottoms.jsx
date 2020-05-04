import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Picture from './Picture.jsx';

const Row = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  min-height: 200px;
  order: 0
`;
const Frame = styled.div`
  background-color: black;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      viewport: 0
    };
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.items !== prevProps.items) {
      this.setState({items: this.props.items});
    }
  }
  render() {
    return (
      <Row key={this.state.items[0].id}>
        {this.state.items.map((item) => {
          return (
            <Picture key={item.imgurl} product={item} />
          );
        })}
      </Row>
    );
  }
}

export default Carousel;