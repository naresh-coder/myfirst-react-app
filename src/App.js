import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Naresh', age: 20 },
      { name: 'varun', age: 1 },
      { name: 'nithin', age: 1 }

    ]
  }

  swithHandler = (newName) => {

    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Niksheph', age: 1 },
        { name: 'nithin', age: 1 }

      ]
    });
    console.log(" called swith handler ");
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Naresh Darga', age: 20 },
        { name: 'Niksheph', age: 1 },
        { name: event.target.value, age: 1 }

      ]
    });
    // console.log(" called swith handler ");
  }
  render() {
    return (
      //this is rjx 
      <div className="App">
        <h1> this is first react js application </h1>
        <p> this is works fine</p>
        <button onClick={this.swithHandler.bind(this,'Naresh !!!!!!!!!!!!!!!')}> switchMe</button>
        <Person

          name={this.state.persons[0].name}
          age={this.state.persons[0].age} >

        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} >


        </Person>
        <Person
          changed ={this.nameChangeHandler}
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >


        </Person>

      </div>



      //React.createElement('div',{className:'App'},React.createElement('h1',null,'HI \, This is first application in react'))
    );
  }
}

export default App;
//<Person click={this.swithHandler.bind(this, 'D Naresh!!!!!!')} name={this.state.persons[0].name} age={this.state.persons[0].age} />
//<Person click={this.swithHandler.bind(this, 'D varun !!!!!!')} name={this.state.persons[1].name} age={this.state.persons[1].age} />