import React from 'react';

class Look extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['one', 'two', 'three', 'four']
    };
  }

  render() {
    return (
      <div key="look-panel">
        {this.state.items.map((wheel) => {
          return (
            <img src="https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/Footwear/bfa5f26f-acbe-4352-a285-e9ddb3b7d558.jpeg" key={wheel}/>
          );
        })}
      </div>
    );
  }
}

export default Look;