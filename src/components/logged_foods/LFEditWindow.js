import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ServingsForm from '.././foods_display/ServingsForm';

const EditWindow = ({ food, getServings, saveEdit, checkmark }) => {
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
      saveEdit(newFood);
    }
  }, [checkmark, checkMarkClicked, newFood, saveEdit]);

  const handleSubmit = () => {
    passFoodUp();
  }

  // Sends the new food data to parent
  const passFoodUp = () => {
    saveEdit(newFood);
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
  saveEdit: PropTypes.func.isRequired,
  checkmark: PropTypes.bool.isRequired
}


export default EditWindow;