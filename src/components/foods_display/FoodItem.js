import React, { useState } from 'react';
import EditWindow from './EditWindow';
import PropTypes from 'prop-types';

const FoodItem = ({ food, addFood }) => {
  const [edit, setEdit] = useState(false);
  const [servings, setServings] = useState(1);

  const startEdit = () => {
    setEdit(true);
  }

  const cancelEdit = () => {
    setEdit(false);
    setServings(1);
  }

  const quickAdd = () => {
    addFood(food);
  }

  const manualAdd = (newFood) => {
    if(newFood.servings !== 0) {
      addFood(newFood);
    }
    cancelEdit();
  }

  const { calories, name, brand, servingSize } = food;
  return (
    <div className="food-item-area">
      <div className="food-item">
        <div className="food-item-label">
          <h3>{brand} {name}</h3>
          <p>{Math.floor(calories * servings)} Calories, Serving Size: {servingSize}</p>
        </div>
        <div className="food-item-btns">
          <button onClick={ edit ? cancelEdit : startEdit } className="btn-icon"><i className={edit ? "fas fa-times" : "fas fa-pencil-alt"}></i></button>
          <button onClick={ edit ? null : quickAdd } className="btn-icon"><i className={edit ? "fas fa-check" : "fas fa-plus"}></i></button>
        </div>
      </div>
      { edit && <EditWindow food={food} getServings={setServings} saveChanges={manualAdd}/> }
    </div>
  )
}

FoodItem.propTypes = {
  food: PropTypes.object.isRequired,
  addFood: PropTypes.func.isRequired 
}

export default FoodItem;
