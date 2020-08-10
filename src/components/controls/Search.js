import React, { useState } from 'react';
import PropTypes from 'prop-types';

/*
  @desc   The Search component returns a form with a text input field and a submit input.
  @props  This component takes in a function prop to execute when the form is submitted. The function will be passed the string from the text input.
*/

const Search = ({ searchFoods }) => {
  const [text, setText] = useState('');

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    e.target.querySelector('.searchbox').blur();
    searchFoods(text);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input className="searchbox" type="text" onChange={handleChange} placeholder="Search for foods" spellCheck="false"></input>
      <button className="search-btn" type="submit" value="Search"><i className="fas fa-search"></i></button>
    </form>
  )
}

Search.propTypes = {
  searchFoods: PropTypes.func.isRequired
}

export default Search;
