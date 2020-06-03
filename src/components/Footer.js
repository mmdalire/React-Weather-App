import React, { Component } from "react";
import reactLogo from "../images/react-logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={reactLogo} id="logo" alt="React logo" />
        <div className="footer-content">
          <h1>React Weather App</h1>
          <h3>Date started: May 30, 2020</h3>
          <h3>Date ended: June 3, 2020</h3>
        </div>
      </footer>
    );
  }
}

export default Footer;
