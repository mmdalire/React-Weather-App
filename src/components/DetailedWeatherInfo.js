import React, { Component } from "react";

class DetailedWeatherInfo extends Component {
  render() {
    return (
      <div className="DetailedWeatherInfo">
        <div className="detailed-info">
          <i class="wi wi-humidity" id="detailed-icon"></i>
          <span>Humidity: </span>
        </div>
        <div className="detailed-info">
          <i class="wi wi-barometer" id="detailed-icon"></i>
          <span>Pressure: </span>
        </div>
        <div className="detailed-info">
          <i class="wi wi-cloud" id="detailed-icon"></i>
          <span>Cloudiness: </span>
        </div>
        <div className="detailed-info">
          <i class="wi wi-strong-wind" id="detailed-icon"></i>
          <span>Wind: </span>
        </div>
      </div>
    );
  }
}

export default DetailedWeatherInfo;
