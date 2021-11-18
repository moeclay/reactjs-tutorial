import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      size: 100
    };
    this.boxRef = React.createRef();
  }

  handleIncrementClick = () => {
    console.log('update data');
    this.setState((state, props) => ({ size: state.size + 1}));
  };

  componentDidUpdate(prevState, prevProps){
    this.boxRef.current.style.width = `${this.state.size}px`
    this.boxRef.current.style.height = `${this.state.size}px`
    this.boxRef.current.style.borderRadius = `5px`
  }

  render(){
    return (
      <div>
        <button onClick={this.handleIncrementClick}>Resize</button>
        <div style={{backgroundColor: 'red'}} ref={this.boxRef}></div>
      </div>
    );
  }
}