import React, { useState, useContext } from 'react';
import FoodContext from '../../context/food/foodContext';
import { useHistory } from 'react-router-dom';

/*
  @desc   The Search component returns a form with a text input field and a submit input.
*/

const Search = () => {
  const foodContext = useContext(FoodContext);

  const [text, setText] = useState('');
  const history = useHistory();

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    e.target.querySelector('.searchbox').blur();
    history.push('/search');
    foodContext.searchFoods(text);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input className="searchbox" type="text" onChange={handleChange} placeholder="Search for foods" spellCheck="false"></input>
      <button className="search-btn" type="submit" value="Search"><i className="fas fa-search"></i></button>
    </form>
  )
}

export default Search;
