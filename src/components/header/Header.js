import React from 'react';
import Calories from './Calories';
import Macros from './Macros';

const Header = () => {
  return (
    <header id="main-header">
      <Calories/>
      <Macros/>
    </header>
  )
}

export default Header;
