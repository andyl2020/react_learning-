import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropType from 'prop-types';

class Todos extends Component {

  render() {
      console.log(this.props.todoz)
    return this.props.todoz.map((singleTodo) => (
      // TODO: better format this css tag
        <TodoItem key={singleTodo.id} todoItem={singleTodo} markComplete={this.props.markComplete} deleteToDo={this.props.deleteToDo}></TodoItem>
    ));
  }
}

//propTypes
Todos.propTypes = {
  todoz: PropType.array.isRequired,
  markComplete: PropType.func.isRequired,
  deleteToDo: PropType.func.isRequired
}


export default Todos;
