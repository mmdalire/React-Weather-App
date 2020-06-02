import React, { Component } from "react";

class ForecastItem extends Component {
  render() {
    const { weatherIcon, date, time, weather, minTemp, maxTemp } = this.props;

    return (
      <div className="ForecastItem">
        <h3>
          {date} <br />
          {time}
        </h3>
        <i className={`owf owf-${weatherIcon} owf-5x`} id="forecast-logo"></i>
        <h4>{weather}</h4>
        <span>{minTemp}°/ </span>
        <span>{maxTemp}°</span>
      </div>

      //<h4>Nice</h4>
    );
  }
}

export default ForecastItem;
