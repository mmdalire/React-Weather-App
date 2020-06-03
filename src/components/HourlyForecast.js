import React, { Component } from "react";
import ForecastItem from "./ForecastItem";

class HourlyForecast extends Component {
  parseZero(number) {
    if (number < 10) return `0${number}`;
    return number;
  }

  convertToDate(unix) {
    const date = new Date(unix * 1000);
    return `${this.parseZero(date.getMonth() + 1)} / ${this.parseZero(
      date.getDate()
    )}`;
  }

  convertToTime(unix) {
    const time = new Date(unix * 1000);
    return `${this.parseZero(time.getHours())}:${this.parseZero(
      time.getMinutes()
    )}`;
  }

  dayOrNight(unix) {
    const time = parseInt(this.convertToTime(unix).split(":")[0]);
    return time >= 4 && time < 19 ? "d" : "n";
  }

  render() {
    const forecastItem = this.props.hourlyForecast.map((forecast) => (
      <ForecastItem
        key={forecast.dt}
        weatherIcon={forecast.weather[0].id}
        dayOrNight={`${this.dayOrNight(forecast.dt)}`}
        date={`${this.convertToDate(forecast.dt)}`}
        time={`${this.convertToTime(forecast.dt)}`}
        weather={forecast.weather[0].main}
        minTemp={forecast.main.temp_min}
        maxTemp={forecast.main.temp_max}
      />
    ));
    return <div className="HourlyForecast">{forecastItem}</div>;
    //return <h4>Nice</h4>;
  }
}

export default HourlyForecast;
