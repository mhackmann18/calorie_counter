import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ServingsForm from './ServingsForm';

/*
@desc:  
@props: All listed props are required.
        Takes in a food object prop.
        Takes in a function, saveChanges which will be passed in a food object whose values will reflect the user's changes.
        Takes in a function, getServings, which will be called everytime the servings are changed
*/

const EditWindow = ({ food, getServings, saveChanges, checkmark }) => {
  const { name, servingSize, brand, calories, protein, fat, carbs, _id, servings } = food;
  const [newFood, setNewFood] = useState({
    name,
    servingSize,
    brand,
    calories,
    protein,
    fat,
    carbs,
    _id,
    servings
  });
  const [checkMarkClicked, setCheckMarkClicked] = useState(checkmark);

  useEffect(()=>{
    setCheckMarkClicked(checkmark);
    if(checkMarkClicked === true){
      saveChanges(newFood);
    }
  }, [checkmark, checkMarkClicked, newFood, saveChanges]);

  const handleSubmit = () => {
    passFoodUp();
  }

  // Sends the new food data to parent
  const passFoodUp = () => {
    saveChanges(newFood);
  }

  // Changes the nutrition facts in the UI according to the servings the user selected
  const changeServings = (newServings) => {
    setNewFood({
      name,
      servingSize,
      brand,
      calories: parseFloat(calories / servings * newServings),
      protein: parseFloat(protein / servings * newServings),
      fat: parseFloat(fat / servings * newServings),
      carbs: parseFloat(carbs / servings * newServings),
      _id,
      servings: parseFloat(newServings)
    });
    getServings(newServings);
  }
    
  return (
    <div className="food-item-area-edit">
      <div className="left">
        <ul>
          <li>Protein: {parseInt(newFood.protein)} g</li>
          <li>Carbs: {parseInt(newFood.carbs)} g</li>
          <li>Fat: {parseInt(newFood.fat)} g</li>
        </ul>
      </div>
      <ServingsForm getServings={changeServings} onSubmit={handleSubmit} newServings={newFood.servings}/>
    </div>
  )
}

EditWindow.propTypes = {
  food: PropTypes.object.isRequired,
  getServings: PropTypes.func.isRequired,
  saveChanges: PropTypes.func.isRequired,
  checkmark: PropTypes.bool.isRequired
}


export default EditWindow;