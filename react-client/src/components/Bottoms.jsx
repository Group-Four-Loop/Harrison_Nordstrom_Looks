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
//NOTE: We set viewport to 215 here (as opposed to 200 as we did on the other carousels) because Pants are generally skinnier photoes.  As such, we need to slightly adjust the starting position of our slide, AND the amount that we increment whenever we 'slide'.
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
    //NOTE: Similar to our adjustment on starting position, the margins on our Pants must be altered slightly.  This solution isn't ideal.  There is probably a better way to find the exact width of our pants and increment/margin-out the distance according to that.  Sorry future Harrison, that one's your's.
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