import React, { Component } from "react";

class LocationInput extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      country: "",
    };

    this.handleCity = this.handleCity.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
  }

  handleCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  handleCountry(e) {
    this.setState({
      country: e.target.value,
    });
  }

  handleSubmitLocation() {
    this.props.handleSubmitLocation(this.state.city, this.state.country);
    this.setState({
      city: "",
      country: "",
    });
  }

  render() {
    const { city, country } = this.state;
    return (
      <div className="LocationInput">
        <input
          type="text"
          className="location-input"
          placeholder="Enter city"
          value={city}
          onChange={this.handleCity}
        />
        <input
          type="text"
          className="location-input"
          placeholder="Enter country"
          value={country}
          onChange={this.handleCountry}
        />
        <button className="location-search" onClick={this.handleSubmitLocation}>
          Search
        </button>
      </div>
    );
  }
}

export default LocationInput;
