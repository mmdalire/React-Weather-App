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
      </div>
    );
  }
}

export default PoweredAPI;
