import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components are capitalized
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import WeatherMP from './components/weather/WeatherMainPage';

// packages are not capitalized
// import uuid from 'uuid';
import axois from 'axios'

class App extends Component {
  state = {
    todos: []
  }
  
  //a lifecycle method like render()
  //TODO what does this do
  componentDidMount() {
    axois.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(res => this.setState({todos: res.data}))
    var API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";
    var API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    var url = `${API_ENDPOINT}?q=Langley&units=metric&appid=${API_KEY}`
    axois.get(url)
      .then(res => console.log(res))

  }


  deleteToDo = (id) => {
    //TODO understand how to spread ... operator works and how filter works, and why there's no {} after => here
    // TODO: promise backs - learn
    axois.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id
        )] })) //maunal delete/change state, coupled with an api delete to the backend.
    
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
      id: this.findMaxIdPlusOne //this wont work for jsonplaceholder, ids can't be set. 
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
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
            <Route path='/weather' render={somevarr => (
              <WeatherMP/>
            )}/>

          </div>
        </div>
      </Router>

    );
  }
}

export default App;
