import React, { Component } from 'react';
import '../css/Header.css';
import {Navbar} from 'react-bootstrap';
import logo from '../images/logo.svg';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home"><img src={logo} alt="Look, it's the weather logo"/></a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>

    );
  }
}

export default Header;
