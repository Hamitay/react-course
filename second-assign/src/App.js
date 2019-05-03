import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {
    textSize: 0,
    text: ''
  }
  
  changeTextHandler = (event) => {
    const text = event.target.value
    const textSize = text.length;
    this.setState( {textSize: textSize, text: text})
  }

  clickLetterHandler = (event, index) => {
    let text = this.state.text;
    text = text.slice(0, index) + text.slice(index+1)

    this.setState( {text: text} );
  }
  

  render() {

    let textArray = this.state.text.split('');

    let charString = (
      <div>
        {textArray.map((char, index) => {
          return <CharComponent character={char} key={index} clicked={(event) => this.clickLetterHandler(event, index)}/>
        })}
      </div>
    )

    return (
      <div className="App">
        <input type='text' onChange={this.changeTextHandler} value={this.state.text}/>
        <p>{this.state.textSize}</p>
        <ValidationComponent textSize={this.state.textSize}/>
        <div>
          {charString}
        </div>
      </div>
    );
  }
}

export default App;
