import React, { Component } from 'react';
import '../css/Footer.css';
import MC from '../images/mc.svg';

class Footer extends Component {
  render() {
    return (
    <div className="footer-container">

      <hr />

    <a href="http://www.matthewcoddington.com"><img src={MC} alt="App designed and developed by Matt Coddington"/></a>

    </div>

    );
  }
}

export default Footer;
