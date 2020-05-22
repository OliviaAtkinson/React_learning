import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1a", name: "Max", age: 28 },
      { id: "2b", name: "Manu", age: 29 },
      { id: "3c", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  //updating state without mutating it directly.
  //only update state for the input field that has been changed.
  nameChangeHandler = (e, id) => {
    //storing index of every person
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    //get person by accessing the element person index,
    //storing inside the new js object by using spread operator
    const person = { ...this.state.persons[personIndex] };

    //updating the persons name
    person.name = e.target.value;

    //update the array, reaching to the state persons.
    const persons = [...this.state.persons];
    //update the personIndex in the array with equlaing it to person object.
    persons[personIndex] = person;

    //updating state using a mutated copied array
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // if doesShow is false then showPersons is true
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    const switchNameButtonStyle = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    var persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                //pointing to areas to get data
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(e) => this.nameChangeHandler(e, person.id)}
              />
            );
          })}
        </div>
      );
      switchNameButtonStyle.backgroundColor = "red";
      switchNameButtonStyle[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    //valid css class list, dynamically assigning and adding classes
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        {/* passing a event handler/function to a component */}
        <button
          style={switchNameButtonStyle}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>

        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
