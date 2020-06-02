import React, { Component } from "react";
import LocationInput from "./LocationInput";
import MainWeatherInfo from "./MainWeatherInfo";
import DetailedWeatherInfo from "./DetailedWeatherInfo";
import HourlyForecast from "./HourlyForecast";
import PoweredAPI from "./PoweredAPI";
import Default from "../default.json";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      info: Default,
    };
    this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
  }

  handleSubmitLocation(city, country) {
    this.callWeather(city, country);
  }

  checkErrors(response) {
    if (response.status === 404) throw Error("Location not found");
    return response.json();
  }

  callWeather(city, country) {
    const API_PREFIX = process.env.REACT_APP_API_PREFIX;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_CITY = city || "";
    const API_COUNTRY = city ? `,${country}` : country;
    const URL = `${API_PREFIX}q=${API_CITY}${API_COUNTRY}&units=metric&appid=${API_KEY}`;

    fetch(URL)
      .then((response) => this.checkErrors(response))
      .then((data) => {
        this.setState({
          info: data,
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.callWeather("Antipolo", "Philippines");
  }

  adjustHourlyForecast(hourlyList) {
    const dateList = hourlyList.filter((dates) => {
      const today = new Date();
      const date = new Date(dates.dt * 1000);

      if (today < date) return dates;
    });
    return dateList;
  }

  render() {
    const { info } = this.state;
    return (
      <div className="Weather">
        <LocationInput handleSubmitLocation={this.handleSubmitLocation} />
        <MainWeatherInfo
          weatherIcon={info.list[0].weather[0].id}
          name={info.city.name}
          country={info.city.country}
          status={
            info.list[0].weather[0].description.slice(0, 1).toUpperCase() +
            info.list[0].weather[0].description.slice(1)
          }
          mainTemp={info.list[0].main.temp}
        />
        <DetailedWeatherInfo
          humidity={info.list[0].main.humidity}
          clouds={info.list[0].clouds.all}
          pressure={info.list[0].main.pressure}
          wind={info.list[0].wind.speed}
        />
        <HourlyForecast
          hourlyForecast={this.adjustHourlyForecast(info.list).splice(0, 4)}
        />
        <PoweredAPI />
      </div>
    );
  }
}

export default Weather;
