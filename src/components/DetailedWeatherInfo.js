import React, { Component } from "react";

class DetailedWeatherInfo extends Component {
  render() {
    const { humidity, clouds, pressure, wind } = this.props;
    return (
      <div className="DetailedWeatherInfo">
        <div className="detailed-info">
          <i className="wi wi-humidity" id="detailed-icon"></i>
          <span>
            <b>Humidity:</b> {humidity}%
          </span>
        </div>
        <div className="detailed-info">
          <i className="wi wi-barometer" id="detailed-icon"></i>
          <span>
            <b>Pressure:</b> {pressure} hPa
          </span>
        </div>
        <div className="detailed-info">
          <i className="wi wi-cloud" id="detailed-icon"></i>
          <span>
            <b>Cloudiness:</b> {clouds}%
          </span>
        </div>
        <div className="detailed-info">
          <i className="wi wi-strong-wind" id="detailed-icon"></i>
          <span>
            <b>Wind:</b> {wind} m/s
          </span>
        </div>
      </div>
    );
  }
}

export default DetailedWeatherInfo;
