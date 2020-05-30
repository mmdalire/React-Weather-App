import React, { Component } from "react";

class ForecastItem extends Component {
  render() {
    const { time, weather, minTemp, maxTemp } = this.props.forecast;
    return (
      <div className="ForecastItem">
        <h3>{time}</h3>
        <img
          src="http://openweathermap.org/img/wn/11d@2x.png"
          id="forecast-logo"
          alt="Cloudy logo"
        />
        <h4>{weather}</h4>
        <span>{minTemp}</span>
        <span>{maxTemp}</span>
      </div>
    );
  }
}

export default ForecastItem;
