import React, { Component } from 'react';
import '../css/WeatherFourDay.css';

class WeatherFourDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestFailed: false
    }
  }

  componentDidUpdate() {
    if (this.props.selectedAddress !== '') {
      this.props.fetchForecast()
      this.props.selectAddress('');
    }
  }


  dayIsSelected = (forecastDay) => {
      if (forecastDay === this.props.selectedDay) {
      return (
        'selected-day'
      )
    } else {
    }
  }

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.props.forecastData) return <p>Getting your forecast...</p>

  let forecastDay = this.props.forecastData.forecast.simpleforecast.forecastday


    return (
      <div className="four-day-container">

            {forecastDay.map((forecastDay) =>
              <a href="#home" className={"four-day-card " + this.dayIsSelected(forecastDay.period)} key={forecastDay.period} onClick={this.props.selectDay.bind(this, forecastDay.period)}>
                    {(() => {
                      if (forecastDay.period === 1) {
                        return (
                          <div>Today</div>
                        )
                      }
                        else {
                        return (
                          <div>{forecastDay.date.weekday}</div>
                        )
                      }
                    })()}
                  <div className="weather-icon-container"><i className={`wi wi-wu-${forecastDay.icon} four-day-weather-icon`} alt={forecastDay.icon}></i></div>
                  <div className="temp-high">{forecastDay.high.fahrenheit}&#176;</div>
                  <div className="temp-low">{forecastDay.low.fahrenheit}&#176;</div>
              </a>
            )}

      </div>
    );
  }
}

export default WeatherFourDay;
