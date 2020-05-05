import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Picture from './Picture.jsx';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';

const Row = styled.div`
  position: relative;
  width:30%;
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content:space-around;
  order: 1;
  overflow:hidden;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      viewport: 200
    };
    this.shiftLeft = this.shiftLeft.bind(this);
    this.shiftRight = this.shiftRight.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setState({items: this.props.items, viewport: 200});
    }
  }

  shiftLeft() {
    let currentView = this.state.viewport;
    if (currentView !== 200) {
      this.setState({viewport: currentView + 200}, ()=>console.log(this.state.viewport));
    }
  }
  shiftRight() {
    let currentView = this.state.viewport;
    if (currentView !== -200) {
      this.setState({viewport: currentView - 200}, ()=>console.log(this.state.viewport));
    }
  }

  render() {
    const vp = this.state.viewport;
    const shoePosition = {
      transform: `translateX(${vp}%)`,
      marginLeft: '4.5rem',
      marginRight: '4.5rem'
    };
    return (
      <Row key={this.state.items[0].id} >
        <LeftArrow shiftLeft={this.shiftLeft}/>
        {this.state.items.map((item) => {
          return (
            <Picture key={item.imgurl} product={item} position={shoePosition}/>
          );
        })}
        <RightArrow shiftRight={this.shiftRight}/>
      </Row>
    );
  }
}

export default Carousel;