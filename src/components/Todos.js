import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
      console.log(this.props.todoz)
    return this.props.todoz.map((singleTodo) => (
        <TodoItem key={singleTodo.id} todoItem={singleTodo}></TodoItem>
    ));
  }
}

export default Todos;
