
import React, { Component } from 'react'
import './stylesheets/form.css'
import './stylesheets/structure.css'

export class WeatherMainPage extends Component {
  render() {
    return (
      <div>
        <h1>Andy's Weather App</h1>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="stylesheet" href="/stylesheets/structure.css" />
        <link rel="stylesheet" href="/stylesheets/form.css" /> */}
        <main role="main">
          <form className="Form" id="weather-form">
            <span>
              What's the weather in
              <input type="text" autoFocus aria-label="City Name" placeholder="city name..." name="city" />
              <button onClick={handleFormSubmit} aria-label="Get Weather" type="submit">GO</button>
              ?
            </span>
          </form>
          <section role="region" className="Response">
            <span id="response-output" className="empty">Empty Response</span>
          </section>
        </main>

      </div>
    )
  }
}

// Outputs reponse to page with given class name and message
// if output element exists
function outputResponse(className, message) {
  // var outputElement = document.querySelector("#response-output");
  var outputElement = "hi";

  if (!outputElement) {
    return;
  }

  // outputElement.classList = className;
  // outputElement.innerHTML = message;
}

// Handles the response of the weather API call
function handleFormResponse(data) {
  if (data.weather) {
    // TODO: Add temperature to response output
    var temperature = data.main.temp.toFixed(1); //decimal point control to 1 dec
    //my code^
    var description = data.weather[0].description;
    var weatherOutput = `${temperature}°C ${description} ABC`; //you need to do ${} cuz this will be run in a server. on a terminal.

    outputResponse("weather", weatherOutput);
  } else {
    var errorOutput = data.message;

    outputResponse("error", errorOutput);
  }
}

// Returns the value of the city name input if it exists
// (returns empty string otherwise)
function getCityInputValue() {
  // var cityInputElement = document.querySelector("input[name='city']");
  var cityInputElement = 'Langley';

  if (!cityInputElement) {
    return "";
  }

  return cityInputElement.value;
}

// Handles form submission by making API call to weather endpoint
// with given city name
function handleFormSubmit(event) {
  event.preventDefault();
  // document.activeElement.blur();

  // DONE: Add loading state output
  outputResponse("loading", "..."); //shows ... when loading. im assuming loading is a valid param. 

  // TODO: Add loading state output
  fetch(`/weather/${getCityInputValue()}`, {
    method: "get",
    headers: { "Content-Type": "application/json" }
  })
    .then(r => r.json()) //get rrequest happens, then the output becomes r, then r(json) becomes data in the next line
    .then(data => handleFormResponse(data));
}

export default WeatherMainPage

