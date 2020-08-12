import React, { useState } from 'react';
import { validateInput } from '../../functions/validation';
import PropTypes from 'prop-types';

/*
  @desc:  The ServingsForm component is a simple form with an input that accepts any number from 0 to 100 inclusive.
  @props: Takes in two function props, both of which are required. 
          getServings(servings) will be called and passed the input everytime it is changed in the form. 
          onSubmit() will be called when the user submits the form.
*/

const ServingsForm = ({ getServings, onSubmit, newServings }) => {
  const [input, setInput] = useState(newServings);

  const checkKey = (e) => {
    if(validateInput(e.key) === false || e.target.value.length > 3){
      if(e.key !== 'Backspace' && e.key !== 'Enter'){ 
        e.preventDefault(); 
      }
    }
  }

  const changeServings = (e) => {
    e.preventDefault();
    const servings = e.target.value;

    if(servings !== ''){
      setInput(parseFloat(servings));
      passUpServings(parseFloat(servings));
    } else {
      setInput('');
      passUpServings(0);
    }
  }

  const passUpServings = (servings) => {
    getServings(servings);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input !== ''){
      passUpServings(input);
    } else {
      passUpServings(0);
    }
    onSubmit();
  }

  return (
    <form className="servings-form" onSubmit={handleSubmit}>
      <label>Servings: </label>
      <input onChange={changeServings} onKeyDown={checkKey} min="0" max="100" step=".01" type="number" value={input}/>
    </form>
  )
}

ServingsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  getServings: PropTypes.func.isRequired
}

export default ServingsForm;
