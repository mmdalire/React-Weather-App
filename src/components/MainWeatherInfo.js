import React, { Component } from "react";
//import cloud from "../images/cloudy.png";

class MainWeatherInfo extends Component {
  render() {
    return (
      <div className="MainWeatherInfo">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          id="weather-logo"
          alt="Cloudy logo"
        />
        <div className="weather-place-and-status">
          <h2>Antipolo City, PH</h2>
          <h3>Cloudy</h3>
        </div>
        <div className="weather-temperature-container">
          <div id="weather-main-temperature">75</div>
          <div id="weather-main-unit">°F</div>
        </div>
      </div>
    );
  }
}

export default MainWeatherInfo;
