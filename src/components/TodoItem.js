import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        // TODO
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

    checkboxComplete = (e) => {
        console.log(this.props)
    }

    render() {
        return (
            
            <div style={this.getStyle()}>         
               <p>
                    <input type="checkbox" onChange={this.checkboxComplete}/> {' '}
                    {this.props.todoItem.taskName}
                </p> 
            </div>
        )
    }
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
