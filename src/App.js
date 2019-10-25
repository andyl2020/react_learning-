import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        taskName: 'japps jumpstart',
        completed: false
      },
      {
        id: 2,
        taskName: 'japps IBM',
        completed: false
      },
      {
        id: 3,
        taskName: 'japps purestoreage',
        completed: false
      }
    ]
  }
  render() {
    console.log(this.state.todos)
    return (
    <div className="App">
      <h1>App.js</h1>
      <Todos todoz={this.state.todos}></Todos>
    </div>
    );
  }
}

export default App;
