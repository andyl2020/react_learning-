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

  deleteToDo = (id) => {
    //TODO understand how to spread ... operator works and how filter works, and why there's no {} after => here
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id
    )] })
  }
  toggleCompletedState = (id) => {
    console.log("from app.js"+id)
    // TODO: understand the arrow function here (49:41) - x => y |vs| x = () => y
    this.setState({ todos: this.state.todos.map(singleTodo => {
      if (singleTodo.id === id) {
        singleTodo.completed = !singleTodo.completed
      }
      return singleTodo;
    }) })
  }
  render() {
    console.log(this.state.todos)
    return (
    <div className="App">
      <h1>App.js</h1>
      <Todos todoz={this.state.todos} markComplete={this.toggleCompletedState} deleteToDo={this.deleteToDo}></Todos>
    </div>
    );
  }
}

export default App;
