import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'hamitay'
  }

  changedInputHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  style = {
    backgroundColor: 'blue'
  }

  render() {
    return (
      <div style={this.style}>
        <UserInput changeEvent={this.changedInputHandler} username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
