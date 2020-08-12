import React, { useState } from 'react';
import EditWindow from './EditWindow';
import PropTypes from 'prop-types';

const FoodItem = ({ food, addFood, display, removeFood, editFood }) => {
  const [edit, setEdit] = useState(false);
  const [servings, setServings] = useState(food.servings);
  const [checkmark, setCheckmark] = useState(false);

  const startEdit = () => {
    setEdit(true);
  }

  const cancelEdit = () => {
    setEdit(false);
    setServings(food.servings);
  }

  const quickAdd = () => {
    addFood(food);
  }

  const manualAdd = (newFood) => {
    if(display === 'search'){
      if(newFood.servings !== 0) {
        addFood(newFood);
      }
      setCheckmark(false);
      cancelEdit();
    } else {
      if(newFood.servings === 0){
        deleteFood();
      } else {
        editFood(newFood);
        setServings(newFood.servings);
      }
      setCheckmark(false);
      setEdit(false);
    }
  }

  const checkClicked = () => {
    setCheckmark(true);
  }
  
  const deleteFood = () => {
    removeFood(food.id);
  }

  const { calories, name, brand, servingSize } = food;
  return (
    <div className="food-item-area">
      <div className="food-item">
        <div className="food-item-label">
          <h3>{brand} {name}</h3>
          <p>{ display === 'log' ? edit ? Math.floor(calories / food.servings * servings) : Math.floor(calories) : Math.floor(calories * servings)} Calories, Serving Size: {servingSize}</p>
        </div>
        <div className="food-item-btns">
          <button onClick={ edit ? cancelEdit : startEdit } className="btn-icon">
            <i className={edit ? "fas fa-times" : "fas fa-pencil-alt"}></i>
          </button>
          <button onClick={ edit ? checkClicked : display === 'search' ? quickAdd : deleteFood } className="btn-icon">
            <i className={edit ? "fas fa-check" : display === 'search' ? "fas fa-plus" : "fas fa-trash-alt"}></i>
          </button>
        </div>
      </div>
      { edit && <EditWindow food={food} getServings={setServings} saveChanges={manualAdd} checkmark={checkmark}/> }
    </div>
  )
}

FoodItem.propTypes = {
  food: PropTypes.object.isRequired,
  //addFood: PropTypes.func.isRequired 
}

export default FoodItem;
