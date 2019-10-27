import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components are capitalized
import './App.css'; //TODO: idk how this is imported and works since it contains submit button stuff for the todomain page. how does it fetch?
import Header from './components/layout/Header';
import About from './components/pages/About';
import WeatherMP from './components/weather/WeatherMainPage';
import MainPageTodo from './components/pages/todo/MainPageTodo';

// packages are not capitalized
// import uuid from 'uuid';

class App extends Component {
  state = {
    todos: []
  }
  
  // //a lifecycle method like render()
  // //TODO what does this do
  // componentDidMount() {
  //   axois.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
  //     .then(res => this.setState({todos: res.data}))
  //   var API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";
  //   var API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  //   var url = `${API_ENDPOINT}?q=Langley&units=metric&appid=${API_KEY}`
  //   axois.get(url)
  //     .then(res => console.log(res))


  // }



  render() {
    console.log(this.state.todos)
    return (
      <Router>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Header/>
                <MainPageTodo/>
              </React.Fragment>
            )}/>
            <Route path='/about' render={someVar => (
              <React.Fragment>
                <Header/>
                <About/>
              </React.Fragment>
            )}/>
            <Route path='/weather' render={somevarr => (
              <React.Fragment>
                <Header/>
                <WeatherMP/>
              </React.Fragment>
            )}/>
      </Router>

    );
  }
}

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default App;
