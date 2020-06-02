import React, { Component } from "react";

class MainWeatherInfo extends Component {
  render() {
    const { weatherIcon, name, country, status, mainTemp } = this.props;

    return (
      <div className="MainWeatherInfo">
        <div className="weather-main-container">
          <i className={`owf owf-${weatherIcon} owf-5x`} id="weather-logo"></i>
          <div className="weather-place-and-status">
            <h2>
              {name}, {country}
            </h2>
            <h3>{status}</h3>
          </div>
        </div>
        <div className="weather-temperature-container">
          <div id="weather-main-temperature">{mainTemp}</div>
          <div id="weather-main-unit">°C</div>
        </div>
      </div>
    );
  }
}

export default MainWeatherInfo;
