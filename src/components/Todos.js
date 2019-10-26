import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropType from 'prop-types';

class Todos extends Component {
  render() {
      console.log(this.props.todoz)
    return this.props.todoz.map((singleTodo) => (
        <TodoItem key={singleTodo.id} todoItem={singleTodo}></TodoItem>
    ));
  }
}

//propTypes
Todos.propTypes = {
  todoz: PropType.array.isRequired
}

export default Todos;
