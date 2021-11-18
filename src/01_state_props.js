import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      name: 'Reza R II'
    };
  }

  onCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render(){
    return (
      <div>
        <h1>Count On State</h1>
        <p>Count On Plus: {this.state.count}</p>
        <button onClick={this.onCount}>Count On Me</button>
        <User name={this.state.name} />
        <User name="Bill" />
        <User name="Nay" />
      </div>
    );
  }
}

// other component
class User extends Component {
  render(){
    return(
      <div>
        <h1>Hello: {this.props.name}</h1>
      </div>
    );
  }
}