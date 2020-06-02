import React, { Component } from "react";

class PoweredAPI extends Component {
  render() {
    return (
      <div className="PoweredAPI">
        <a
          href="https://openweathermap.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Powered by: OpenWeather</h4>
        </a>
        <a
          href="https://websygen.github.io/owfont/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span id="icons-by">Icons by: owfont </span>
        </a>
        and
        <a
          href="https://erikflowers.github.io/weather-icons/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span id="icons-by"> erikflowers</span>
        </a>
      </div>
    );
  }
}

export default PoweredAPI;
