import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Picture from './Picture.jsx';

const Row = styled.div`
  position: relative;
  width:100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display:flex;
  align-items:center;
  order: 0;
  overflow:hidden;
`;
const RightArrow = styled.div`
  width:10%;
  position:absolute;
  height: 80%;
  right:0;
`;
const LeftArrow = styled.div`
position:absolute;
  width:10%;
  height: 80%;
  left:0;
`;


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      viewport: 0
    };
    this.shiftLeft = this.shiftLeft.bind(this);
    this.shiftRight = this.shiftRight.bind(this);
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.items !== prevProps.items) {
      this.setState({items: this.props.items});
    }
  }

  shiftLeft() {
    console.log('shiftleft')
    let currentView = this.state.viewport;
    this.setState({viewport: currentView - 100}, ()=>console.log(this.state.viewport))
  }
  shiftRight() {
    console.log('shiftright')
    let currentView = this.state.viewport;
    this.setState({viewport: currentView + 100}, ()=>console.log(this.state.viewport))
  }

  render() {
    const vp = this.state.viewport;
    console.log('vp', vp)
    return (
      <Row key={this.state.items[0].id} >
        <LeftArrow onClick={this.shiftLeft}>LEFT</LeftArrow>
        {this.state.items.map((item) => {
          return (
            <Picture key={item.imgurl} product={item} position={{transform: `translateX(${vp}%)`}}/>
          );
        })}
        <RightArrow onClick={this.shiftRight}>RIGHT</RightArrow>
      </Row>
    );
  }
}

export default Carousel;