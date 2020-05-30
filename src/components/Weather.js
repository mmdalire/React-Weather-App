import React, { Component } from "react";
import MainWeatherInfo from "./MainWeatherInfo";
import DetailedWeatherInfo from "./DetailedWeatherInfo";
import HourlyForecast from "./HourlyForecast";
import PoweredAPI from "./PoweredAPI";

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <MainWeatherInfo />
        <DetailedWeatherInfo />
        <HourlyForecast />
        <PoweredAPI />
      </div>
    );
  }
}

export default Weather;
