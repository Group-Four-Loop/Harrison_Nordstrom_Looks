import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Picture from './Picture.jsx';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';

const Row = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width:30%;
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content:space-around;
  overflow:hidden;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    // let sizing = (props.items[0].type === 'bottoms') ? 199.5 : 199.5;
    this.state = {
      items: props.items,
      type: props.items[0].type,
      //set viewport (or the position of currently displayed photo (will rename later) -- we want to show left-most photo so we need to shift our 'photoslide' to the right)
      picturePosition: 199.5,
      size: 199.5
    };
    this.shiftLeft = this.shiftLeft.bind(this);
    this.shiftRight = this.shiftRight.bind(this);
  }
  componentDidMount() {
    // if (this.state.type === 'bottoms') {
    //   this.setState({picturePosition: 199.5});
    // }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    if (this.props.items !== prevProps.items) {
      // let newPicPosition = (this.props.type === 'bottoms') ? 199.5 : 199.5;
      let newPicPosition = 199.5;
      this.setState({items: this.props.items, picturePosition: newPicPosition});
    }
  }
  //shiftLeft and shiftRight update state.picturePosition by an amount which matches the margin between pictures
  shiftLeft() {
    let currentView = this.state.picturePosition;
    if (currentView !== this.state.size) {
      this.setState({picturePosition: currentView + this.state.size});
    }
  }
  shiftRight() {
    let currentView = this.state.picturePosition;
    if (currentView !== -this.state.size) {
      this.setState({picturePosition: currentView - this.state.size});
    }
  }

  render() {
    const vp = this.state.picturePosition;
    //create a new css-class which we can pass down to each of our picture components.  Our class includes a transform attribute which 'shifts' our pictures to a position defined and maintained on this carousel component (state.picturePosition).

    let location = {
      transform: `translateX(${vp}%)`,
      marginLeft: '4.5rem',
      marginRight: '4.5rem'
    };

    // if (this.state.type === 'bottoms') {
    //   location.marginLeft = '4rem';
    //   location.marginRight = '4rem';
    // }
    return (
      <Row key={this.state.items[0].id} style={this.props.style}>
        <LeftArrow shiftLeft={this.shiftLeft} className='left-arrow'/>
        {this.state.items.map((item) => {
          return (
            <Picture key={item.imgurl + item.id} product={item} position={location} selectProduct={this.props.selectFunc}/>
          );
        })}

        <RightArrow className='right-arrow' shiftRight={this.shiftRight}/>
      </Row>
    );
  }
}

export default Carousel;