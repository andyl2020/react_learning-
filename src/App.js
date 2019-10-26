import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'japps jumpstart',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'japps IBM',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'japps purestoreage',
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

  //adds a todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title, //you can just do <title> (es6 syntax for collapsing)
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Header/>
                <AddTodo addTodo={this.addTodo}/>
                <Todos
                  todoz={this.state.todos} 
                  markComplete={this.toggleCompletedState} 
                  deleteToDo={this.deleteToDo}/>
              </React.Fragment>
            )}/>
            <Route path='/about' render={someVar => (
              <React.Fragment>
                <Header/>
                <About/>
              </React.Fragment>
            )}/>

          </div>
        </div>
      </Router>

    );
  }
}

export default App;
