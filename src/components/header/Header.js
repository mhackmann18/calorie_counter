import React, { Component } from 'react';
import Calories from './Calories';
import Macros from './Macros';

export class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <Calories/>
        <Macros/>
      </header>
    )
  }
}

export default Header;
