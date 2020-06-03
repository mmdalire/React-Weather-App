import React, { Component } from "react";

class ForecastItem extends Component {
  render() {
    const {
      weatherIcon,
      dayOrNight,
      date,
      time,
      weather,
      minTemp,
      maxTemp,
    } = this.props;

    return (
      <div className="ForecastItem">
        <h3>
          {date} <br />
          {time}
        </h3>
        <i
          className={`owf owf-${weatherIcon}-${dayOrNight} owf-5x`}
          id="forecast-logo"
        ></i>
        <h4>{weather}</h4>
        <span>{minTemp}°/ </span>
        <span>{maxTemp}°</span>
      </div>
    );
  }
}

export default ForecastItem;
