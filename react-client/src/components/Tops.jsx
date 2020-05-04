import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Picture from './Picture.jsx';
import Arrow from './Arrow.jsx';

const Row = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  min-height: 200px;
  order:-1;
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
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.items !== prevProps.items) {
      this.setState({items: this.props.items});
    }
  }

  previousSlide () {
    let products = this.state.items;
    const lastIndex = products.length - 1;
    const currentImageIndex = this.state.viewport;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;


    this.setState({
      viewport: index
    }, () => { console.log('states', this.state); });
  }

  nextSlide () {
    let products = this.state.items;
    const lastIndex = products.length - 1;
    const currentImageIndex = this.state.viewport;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      viewport: index
    }, () => { console.log('states', this.state); });
  }

  render() {
    return (
      <Row key={this.state.items[0].id}>
        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />
        {[this.state.items[this.state.viewport]].map((item) => {
          return (
            <div>
              <Picture key={item.imgurl} product={item} />
              {this.state.viewport}
            </div>
          );
        })}
        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
      </Row>
    );
  }
}

export default Carousel;