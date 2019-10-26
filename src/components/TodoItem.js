import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        // TODO: use the const variable and add the changing property (i.e. crossing it out) to the variable
        // todoItemStyle = Object.assign({textDecoration: this.props.todoItem.completed ? 'line-through' : 'none'},todoItemStyle)
        // return{
        //     todoItemStyle
        // }
        return{
            background: '#e1ffe0', //lime green (light)
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todoItem.completed ? 'line-through' : 'none'
        }
    }

    render() {
        //destructuring
        const { id, taskName } = this.props.todoItem

        return (
            <div style={this.getStyle()}>         
               <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                    {taskName}
                    <button onClick={this.props.deleteToDo.bind(this,id)} style={delBtnStyle}>x</button>
                </p> 
                
            </div>
        )
    }
}

const delBtnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

var todoItemStyle = {
    background: '#e1ffe0', //lime green (light)
    padding: '10px',
    borderBottom: '1px #ccc dotted'
}

//propTypes
TodoItem.propType = {
    key: PropTypes.number.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default TodoItem
