import React, { Component } from 'react';
import '../css/AddressSearch.css';
import {FormGroup, FormControl} from 'react-bootstrap';
import IconSearch from '../images/icon-search.svg';
import axios from 'axios'
import AddressSearchAutocomplete from '../components/AddressSearchAutocomplete.js'

class AddressSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
      addressFocused: false,
      value: ''
    }
  }

  getInfo = () => {
    axios.get(`https://thingproxy.freeboard.io/fetch/http://autocomplete.wunderground.com/aq?query=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data.RESULTS
        })
      })
  }

  inputValue = () => {
    if (this.props.selectedAddress === '' && this.state.addressFocused === true) {
      return (
        this.state.value
      )
    }
    else {
      return (
        this.props.selectedCity
      )
    }
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
      query: e.target.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      }
    })
  }

  handleOnFocus = () => {
    this.setState({
      addressFocused: true,
      value: ''
    })
    this.props.selectAddress('');
  }

  handleOnBlur = (e) => {
    this.setState({
      addressFocused: false
    })
  }

  render() {
    return (

      <div>

      <div className="address-search">

        <form>
          <FormGroup bsSize="large">
            <FormControl className="address-input" type="text" placeholder="Your city or zip code" value={this.inputValue()} onChange={this.handleInputChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}/>
            <FormControl.Feedback>
              <img src={IconSearch} className="icon-search" alt="Search icon"/>
            </FormControl.Feedback>
            {(() => {
              if (this.state.query && this.state.query.length > 1 && this.state.addressFocused === true) {
                return(
                  <AddressSearchAutocomplete results={this.state.results} selectCity={this.props.selectCity} selectAddress={this.props.selectAddress} selectDay={this.props.selectDay} />
                )
              }
            })()}
          </FormGroup>
        </form>

      </div>

      </div>

    )
  }
}

export default AddressSearch;
