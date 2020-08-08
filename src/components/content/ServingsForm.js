import React, { Component } from 'react';
import { validateInput } from '../../functions/validation';
import PropTypes from 'prop-types';

/*
  @desc:  The ServingsForm component is a simple form with an input that accepts any number from 0 to 100 inclusive.
  @props: Takes in two function props, both of which are required. 
          getServings(servings) will be called and passed the input everytime it is changed in the form. 
          onSubmit() will be called when the user submits the form.
*/

class ServingsForm extends Component {
  state = { input: 1 }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    getServings: PropTypes.func.isRequired
  }

  checkKey = (e) => {
    if(validateInput(e.key) === false || e.target.value.length > 3){
      if(e.key !== 'Backspace' && e.key !== 'Enter'){ 
        e.preventDefault(); 
      }
    }
  }

  changeServings = (e) => {
    e.preventDefault();
    const servings = e.target.value;

    if(servings !== ''){
      this.setState({ input: parseFloat(servings) });
      this.passUpServings(parseFloat(servings));
    } else {
      this.setState({ input: '' });
      this.passUpServings(0);
    }
  }

  passUpServings = (servings) => {
    this.props.getServings(servings);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.input !== ''){
      this.passUpServings(this.state.input);
    } else {
      this.passUpServings(0);
    }
    this.props.onSubmit();
  }

  render() {
    return (
      <form className="servings-form" onSubmit={this.handleSubmit}>
        <label>Servings: </label>
        <input onChange={this.changeServings} onKeyDown={this.checkKey} min="0" max="100" step=".01" type="number" value={this.state.input}/>
      </form>
    )
  }
}

export default ServingsForm;
