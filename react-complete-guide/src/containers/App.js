import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import PersonList from '../components/PersonList/PersonList';
import CockPit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age:28, id:1},
      { name: "Jose", age: 29, id:2},
      { name: "Maria", age: 26, id:3}
    ],

    showPersons: false
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonsHandler = (event) => {
    this.setState(
      {
        showPersons: !this.state.showPersons
      }
    )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        <PersonList 
          persons={this.state.persons} 
          changed={this.nameChangedHandler} 
          clicked={this.deletePersonHandler}/>
        </div>
      );
    }

    return (
      <StyleRoot>
        <div className="App">
          <CockPit 
            showPersons={this.state.showPersons} 
            persons={this.state.persons} 
            clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
