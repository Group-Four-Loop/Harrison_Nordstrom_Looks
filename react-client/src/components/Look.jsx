import React from 'react';
import axios from 'axios';

class Look extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.getLookById = this.getLookById.bind(this);
  }

  componentDidMount() {
    this.getLookById(1);
  }

  getLookById(id) {
    axios.get('/api', {
      params: {
        lookId: id
      }
    })
      .then((response) => {
        console.log('rr', response.data);
        this.setState({items: response.data});
      }, ()=>console.log(this.state.items))
      .catch((err) => {
        console.log('error', err);
      });
  }

  render() {
    return (
      <div key="look-panel">
        <h1>{JSON.stringify(this.state.items)}</h1>
        {this.state.items.map((item) => {
          return (
            <img src={item.imgurl} key={item.id}/>
          );
        })}
      </div>
    );
  }
}

export default Look;