import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Picture from './Picture.jsx';

const Row = styled.div`
  position: relative;
  width:25%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display:flex;
  align-items:center;
  justify-content:space-around;
  order: 1;
  overflow:hidden;
`;
const RightArrow = styled.div`
  display:flex;
  align-items:center;
  width:15%;
  position: absolute;
  height: 80%;
  right:0;
  background-color: white;
  opacity:1%;
  font-size:larger;
  &:hover {
    font-weight:bold;
    opacity: .5;
  }
`;
const LeftArrow = styled.div`
  position: absolute;
  display:flex;
  align-items:center;
  width:15%;
  height: 80%;
  left:0;
  background-color: white;
  opacity:1%;
  font-size:larger;
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
      viewport: 200
    };
    this.shiftLeft = this.shiftLeft.bind(this);
    this.shiftRight = this.shiftRight.bind(this);
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.items !== prevProps.items) {
      this.setState({items: this.props.items, viewport: 200});
    }
  }

  shiftLeft() {
    let currentView = this.state.viewport;
    if (currentView !== 200) {
      this.setState({viewport: currentView + 200}, ()=>console.log(this.state.viewport))
    }
  }
  shiftRight() {
    let currentView = this.state.viewport;
    if (currentView !== -200) {
      this.setState({viewport: currentView - 200}, ()=>console.log(this.state.viewport))
    }
  }

  render() {
    const vp = this.state.viewport;
    const leftArrow = '<'
    const rightArrow = '>'
    const shoePosition = {
      transform: `translateX(${vp}%)`,
      marginLeft: '4.5rem',
      marginRight: '4.5rem'
    }
    return (
      <Row key={this.state.items[0].id} >
        <LeftArrow onClick={this.shiftLeft}> { leftArrow } </LeftArrow>
        {this.state.items.map((item) => {
          return (
            <Picture key={item.imgurl} product={item} position={shoePosition}/>
          );
        })}
        <RightArrow onClick={this.shiftRight}>{rightArrow}</RightArrow>
      </Row>
    );
  }
}


// const Row = styled.div`
//   display:flex;
//   flex-direction:row;
//   justify-content: space-around;
//   order: 1;
// `;
// const Frame = styled.div`
//   background-color: black;
// `;

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: props.items,
//       viewport: 0
//     };
//   }
//   componentDidUpdate(prevProps) {
//     // Typical usage (don't forget to compare props):
//     if (this.props.items !== prevProps.items) {
//       this.setState({items: this.props.items});
//     }
//   }
//   render() {
//     return (
//       <Row key={this.state.items[0].id}>
//         {this.state.items.map((item) => {
//           return (
//             <Picture key={item.imgurl} product={item} />
//           );
//         })}
//       </Row>
//     );
//   }
// }

export default Carousel;