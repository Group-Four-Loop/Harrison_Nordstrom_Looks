import React from 'react';
import Look from './Look.jsx';

const App = () => {
  return (
    <Look />
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     console.log('click');
//     let current = this.state.count;
//     this.setState({count: current + 1});
//   }

//   render() {
//     return (
//       <div>
//         <p onClick= {() => { this.handleClick(); }}>Count {this.state.count}</p>

//       </div>
//     );
//   }
// }

export default App;