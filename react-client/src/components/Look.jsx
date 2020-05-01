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
            <a key={wheel}>{wheel}</a>
          );
        })}
      </div>
    );
  }
}

export default Look;