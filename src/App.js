import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header.js';
import AddressSearch from './components/AddressSearch.js';
import WeatherOneDay from './components/WeatherOneDay.js';
import WeatherFourDay from './components/WeatherFourDay.js';
import Footer from './components/Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
      selectedAddress: '29601.1.99999',
      selectedCity: 'Greenville, South Carolina',
      selectedDay: 1
    }
  }

  componentDidMount() {
    this.fetchForecast()
  }

  fetchForecast = () => {
    fetch(`http://api.wunderground.com/api/` + process.env.REACT_APP_WU_API_KEY + `/forecast/q/zmw:` + this.state.selectedAddress + `.json`)
    .then(response => {
      if (!response.ok) {
        throw Error("Something went wrong")
      }
      return response
    })
    .then(d => d.json())
    .then(d => {
      this.setState({
        forecastData: d
      })
      console.log('new forecastData')
    }, () => {
      this.setState({
        requestFailed: true
      })
    })
  }

  selectAddress = (zip) => {

    this.setState({
      selectedAddress: zip
    })

    console.log('You have selected an address');
    console.log('This zmv: ' + zip);
  };

  selectCity = (city) => {

    this.setState({
      selectedCity: city
    })

    console.log('You have selected a city');
    console.log('This city: ' + city);
  };

  selectDay = (day) => {
    this.setState({
      selectedDay: day
    })
    console.log('You ran selectDay')
  };

  render() {

    console.log('api key: ' + process.env.REACT_APP_WU_API_KEY)

    return (
      <div className="body-background">
        <Header />

      {process.env.REACT_APP_WU_API_KEY}

          <div className="body-container">

            <AddressSearch selectDay={this.selectDay} selectAddress={this.selectAddress} selectCity={this.selectCity} selectedCity={this.state.selectedCity} selectedAddress={this.state.selectedAddress}/>
            <WeatherFourDay selectAddress={this.selectAddress} selectedAddress={this.state.selectedAddress} selectDay={this.selectDay} selectedDay={this.state.selectedDay} fetchForecast={this.fetchForecast} forecastData={this.state.forecastData}/>
            <WeatherOneDay forecastData={this.state.forecastData} selectedCity={this.state.selectedCity} selectedDay={this.state.selectedDay} />

            <Footer />

          </div>
      </div>
    );
  }
}

export default App;
