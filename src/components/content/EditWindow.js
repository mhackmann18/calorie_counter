import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ServingsForm from './ServingsForm';

/*
@desc:  
@props: All listed props are required.
        Takes in a food object prop.
        Takes in a function, saveChanges which will be passed in a food object whose values will reflect the user's changes.
        Takes in a function, getServings which will be called everytime the servings are changed
*/

class EditWindow extends Component {
  constructor(props){
    super(props);
    const { name, servingSize, brand, calories, protein, fat, carbs, id, servings } = this.props.food;
    this.state = {
      newFood: {
        name,
        servingSize,
        brand,
        calories,
        protein,
        fat,
        carbs,
        id,
        servings
      }
    }
  }

  static propTypes = {
    food: PropTypes.object.isRequired,
    getServings: PropTypes.func.isRequired,
    saveChanges: PropTypes.func.isRequired
  }

  handleSubmit = () => {
    this.passFoodUp();
    this.collapse();
  }

  // Sends the new food data to parent
  passFoodUp = () => {
    this.props.saveChanges(this.state.newFood);
  }

  // Sets the edit window's height to zero
  collapse = () => {
    this.setState({height: '0px'});
  }

  // Changes the nutrition facts in the UI according to the servings the user selected
  changeServings = (servings) => {
    const { name, servingSize, brand, calories, protein, fat, carbs, id } = this.props.food;
    
    this.setState({
      newFood: {
        name,
        servingSize,
        brand,
        calories: parseFloat(calories * servings),
        protein: parseFloat(protein * servings),
        fat: parseFloat(fat * servings),
        carbs: parseFloat(carbs * servings),
        id,
        servings: parseFloat(servings)
      }
    });
    this.props.getServings(servings);
  }

  render() {
    const { fat, protein, carbs } = this.state.newFood;
    
    return (
      <div className="food-item-area-edit">
        <div className="left">
          <ul>
            <li>Protein: {parseInt(protein)} g</li>
            <li>Carbs: {parseInt(carbs)} g</li>
            <li>Fat: {parseInt(fat)} g</li>
          </ul>
        </div>
        <ServingsForm getServings={this.changeServings} onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default EditWindow;