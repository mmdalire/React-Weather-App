import React, { Component } from "react";
import ForecastItem from "./ForecastItem";

class HourlyForecast extends Component {
  constructor() {
    super();
    this.state = {
      hours: [
        {
          id: 1,
          time: "1:00",
          weather: "sunny",
          minTemp: "10°F",
          maxTemp: "20°F",
        },
        {
          id: 2,
          time: "2:00",
          weather: "sunny",
          minTemp: "10°F",
          maxTemp: "20°F",
        },
        {
          id: 3,
          time: "3:00",
          weather: "rainy",
          minTemp: "10°F",
          maxTemp: "20°F",
        },
        {
          id: 4,
          time: "4:00",
          weather: "hell",
          minTemp: "10°F",
          maxTemp: "20°F",
        },
      ],
    };
  }
  render() {
    const forecastItem = this.state.hours.map((forecast) => (
      <ForecastItem key={forecast.id} forecast={forecast} />
    ));
    return <div className="HourlyForecast">{forecastItem}</div>;
  }
}

export default HourlyForecast;
