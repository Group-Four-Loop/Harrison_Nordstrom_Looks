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
  order: 0;
  overflow:hidden;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      viewport: 215
    };
    this.shiftLeft = this.shiftLeft.bind(this);
    this.shiftRight = this.shiftRight.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setState({items: this.props.items, viewport: 215});
    }
  }

  shiftLeft() {
    console.log('left');
    let currentView = this.state.viewport;
    if (currentView !== 215) {
      this.setState({viewport: currentView + 215}, ()=>console.log(this.state.viewport));
    }
  }
  shiftRight() {
    console.log('right');
    let currentView = this.state.viewport;
    if (currentView !== -215) {
      this.setState({viewport: currentView - 215}, ()=>console.log(this.state.viewport));
    }
  }

  render() {
    const vp = this.state.viewport;
    const pantsLocation = {
      transform: `translateX(${vp}%)`,
      marginLeft: '4rem',
      marginRight: '4rem'
    };
    return (
      <Row key={this.state.items[0].id} >
        <LeftArrow shiftLeft={this.shiftLeft}/>
        {this.state.items.map((item) => {
          return (
            <Picture key={item.imgurl} product={item} position={pantsLocation}/>
          );
        })}
        <RightArrow shiftRight={this.shiftRight}/>
      </Row>
    );
  }
}

export default Carousel;