import React, { Component } from 'react';
import '../css/Footer.css';
import MC from '../images/mc.svg';

class Footer extends Component {
  render() {
    return (
    <div className="footer-container">

      <hr />
      <div className="footer-copyrights">
        <div><a href="http://www.matthewcoddington.com"><img src={MC} alt="App designed and developed by Matt Coddington"/></a></div>
        <div>Weather icons by <a href="http://erikflowers.github.io/weather-icons/">Erik Flowers</a></div>
      </div>

    </div>

    );
  }
}

export default Footer;
