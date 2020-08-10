import React from 'react';
import Calories from './Calories';
import Macros from './Macros';
import PropTypes from 'prop-types';

const Header = ({ nutrients }) => {
  return (
    <header id="main-header">
      <Calories calories={nutrients.calories}/>
      <Macros nutrients={nutrients}/>
    </header>
  )
}

Header.propTypes = {
  nutrients: PropTypes.object.isRequired
}

export default Header;
