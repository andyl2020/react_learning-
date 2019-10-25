import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div>
               <h3>{this.props.todoItem.taskName}</h3> 
            </div>
        )
    }
}

export default TodoItem
