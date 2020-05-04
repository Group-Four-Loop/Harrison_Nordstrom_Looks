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
  justify-content:space-evenly;
  order: 0;
  overflow:hidden;
`;
const RightArrow = styled.div`
  display:flex;
  align-items:center;
  width:10%;
  position: absolute;
  height: 80%;
  right:0;
  opacity: .25;
  background-color: white;
  &:hover {
    font-weight:bold;
    opacity: .5;
  }
`;
const LeftArrow = styled.div`
  position: absolute;
  display:flex;
  align-items:center;
  width:10%;
  height: 80%;
  left:0;
  background-color: white;
  &:hover {
    font-weight:bold;
    opacity: .5;
  }
`;


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      viewport: 150
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
    let currentView = this.state.viewport;
    this.setState({viewport: currentView + 150}, ()=>console.log(this.state.viewport))
  }
  shiftRight() {
    let currentView = this.state.viewport;
    this.setState({viewport: currentView - 150}, ()=>console.log(this.state.viewport))
  }

  render() {
    const vp = this.state.viewport;
    const leftArrow = '<'
    const rightArrow = '>'
    return (
      <Row key={this.state.items[0].id} >
        <LeftArrow onClick={this.shiftLeft}> { leftArrow } </LeftArrow>
        {this.state.items.map((item) => {
          return (
            <Picture key={item.imgurl} product={item} position={{transform: `translateX(${vp}%)`}}/>
          );
        })}
        <RightArrow onClick={this.shiftRight}>{rightArrow}</RightArrow>
      </Row>
    );
  }
}

export default Carousel;