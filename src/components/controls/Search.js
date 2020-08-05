import React, { Component } from 'react';

/*
  @desc   The Search component returns a form with a text input field and a submit input.
  @props  This component takes in a function prop to execute when the form is submitted. The function will be passed the string from the text input.
*/

export class Searchbar extends Component {
  state = {
    text: ''
  }

  handleChange = e => this.setState({ text: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    e.target.querySelector('.searchbox').blur();
    this.props.searchFoods(this.state.text);
  }

  render() {
    return (
      <form className="searchbar" onSubmit={this.handleSubmit}>
        <input className="searchbox" type="text" onChange={this.handleChange} placeholder="Search for foods" spellCheck="false"></input>
        <button className="search-btn" type="submit" value="Search"><i className="fas fa-search"></i></button>
      </form>
    )
  }
}

export default Searchbar;
