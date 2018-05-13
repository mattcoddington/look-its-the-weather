import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import '../css/AddressSearchAutocomplete.css';

class AddressSearchAutocomplete extends Component {

  onClickSelectAddress = (zip, city) => {
    console.log('You clicked the select address button');
      this.props.selectAddress(zip);
      this.props.selectCity(city);
      this.props.selectDay(1);
      console.log('value of zip and city: ' + zip + city)
    }

  render() {
    const options = this.props.results.map(r =>

        <div className="options-line-item" onMouseDown={() => this.onClickSelectAddress(r.zmw, r.name)} key={r.zmw}>
          {r.name}
        </div>
    )

  return (

    <Panel className="autocomplete-container">
      <Panel.Body>
        <div className="options-container">
          {options}
        </div>
      </Panel.Body>
    </Panel>

  );

}
}

export default AddressSearchAutocomplete
