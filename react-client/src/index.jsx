import React from 'react';
import ReactDOM from 'react-dom';
import Look from './components/Look.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    console.log('click');
    let current = this.state.count;
    this.setState({count: current + 1});
  }

  render() {
    return (
      <div>HELLO WORLD
        <p onClick= {() => { this.handleClick(); }}>Count {this.state.count}</p>
        <Look />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
//export default App;