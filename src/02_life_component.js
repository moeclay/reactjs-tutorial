import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      name: 'Reza R II',
      date: new Date()
    };
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log(this.state.date.toLocaleString());
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
    console.log('unmount');
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <h1>Hallo, dunia</h1>
        <h2>Ini {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}