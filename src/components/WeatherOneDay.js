import React, { Component } from 'react';
import '../css/weather-icons.min.css';
import '../css/WeatherOneDay.css';

class WeatherOneDay extends Component {

  whatDayIsIt = () => {
    if (this.props.selectedDay === 1) {
    return (
      0
    )
  } else if (this.props.selectedDay === 3) {
    return (
      4
    )
  } else if (this.props.selectedDay === 4) {
    return (
      6
    )
  } else {
     return (
       this.props.selectedDay
     )
   }
  }

  whatNightIsIt = () => {
    if (this.props.selectedDay === 1) {
    return (
      1
    )
  } else if (this.props.selectedDay === 2) {
    return (
      3
    )
  } else if (this.props.selectedDay === 3) {
    return (
      5
    )
  } else {
     return (
       7
     )
   }
  }

  render() {

    if (!this.props.forecastData) return <p>Getting your forecast...</p>

    let simpleForecastDay = this.props.forecastData.forecast.simpleforecast.forecastday
    let txtForecastDay = this.props.forecastData.forecast.txt_forecast.forecastday

    console.log(this.props.forecastData)
    console.log(this.simpleForecastDay)

    return (
        <div className="one-day-summary-container">

          <div className="today">
            <div className="icon-container"><i className={`wi wi-wu-clear one-day-today-icon`}></i></div>
            <div>
              <p className="what-day-is-it">{txtForecastDay[this.whatDayIsIt()].title}, {simpleForecastDay[this.props.selectedDay - 1].date.month}/{simpleForecastDay[this.props.selectedDay - 1].date.day}</p>
              <p className="one-day-temp-high">{simpleForecastDay[this.props.selectedDay - 1].high.fahrenheit}&#176; {simpleForecastDay[this.props.selectedDay - 1].conditions}</p>
              <p>{txtForecastDay[this.whatDayIsIt()].fcttext}</p>
              <p>Precipitation: <strong>{simpleForecastDay[this.props.selectedDay - 1].pop}%</strong> </p>
            </div>
          </div>

          <div className="tomorrow">
            <div><i className={`wi wi-wu-${simpleForecastDay[this.props.selectedDay - 1].icon} one-day-today-icon`} alt={simpleForecastDay.icon}></i></div>
            <div>
              <p className="what-day-is-it">{txtForecastDay[this.whatNightIsIt()].title}, {simpleForecastDay[this.props.selectedDay - 1].date.month}/{simpleForecastDay[this.props.selectedDay - 1].date.day}</p>
              <p className="one-day-temp-high">{simpleForecastDay[this.props.selectedDay - 1].low.fahrenheit}&#176; {simpleForecastDay[this.props.selectedDay - 1].conditions}</p>
              <p>{txtForecastDay[this.whatNightIsIt()].fcttext}</p>
              <p>Precipitation: <strong>{simpleForecastDay[this.props.selectedDay - 1].pop}%</strong> </p>
            </div>
          </div>

        </div>
    );
  }
}

export default WeatherOneDay;
