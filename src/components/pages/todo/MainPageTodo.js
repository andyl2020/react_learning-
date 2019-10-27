import React, { Component } from 'react';

// components are capitalized
import Todos from './sub-components/Todos';
import AddTodo from './sub-components/AddTodo';

// packages are not capitalized
import axois from 'axios'

class MainPageTodo extends Component {
  state = {
    todos: []
  }
  
  //a lifecycle method like render()
  //TODO what does this do
  componentDidMount() {
    axois.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(res => this.setState({todos: res.data}))
  }


  deleteToDo = (id) => {
    //TODO understand how to spread ... operator works and how filter works, and why there's no {} after => here
    // TODO: promise backs - learn
    axois.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id
        )] })) //maunal delete/change state, coupled with an api delete to the backend.
    
  }

  toggleCompletedState = (id) => {
    console.log("from MainPageTodo.js...ID of todo: "+id)
    // TODO: understand the arrow function here (49:41) - x => y |vs| x = () => y
    this.setState({ todos: this.state.todos.map(singleTodo => {
      if (singleTodo.id === id) {
        singleTodo.completed = !singleTodo.completed
      }
      return singleTodo;
    }) })
  }

  //works but not used
  findMaxIdPlusOne = () => {
    let todoIds = this.state.todos.map(({id}) => id)
    let max = Math.max(...todoIds) + 1
    console.log(todoIds, max)
    return max
  }

  //adds a todo
  addTodo = (title) => {
    axois.post('https://jsonplaceholder.typicode.com/todos', { //id is handled for you by the post request
      title: title,
      completed: false,
      id: this.findMaxIdPlusOne //this wont work for jsonplaceholder, ids can't be set. good try tho
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  render() {
    console.log(this.state.todos)
    return (
      // TODO: look up classname
      <div className="App">
        <div className="container">
          <AddTodo addTodo={this.addTodo}/>
          <Todos
            todoz={this.state.todos} 
            markComplete={this.toggleCompletedState} 
            deleteToDo={this.deleteToDo}/>
        </div>
      </div>
    );
  }
}

export default MainPageTodo;
