import React, { useState, useContext } from 'react';
import LFEditWindow from './LFEditWindow';
import PropTypes from 'prop-types';
import FoodContext from '../../context/food/foodContext';

const FoodItem = ({ food }) => {
  const [edit, setEdit] = useState(false);
  const [servings, setServings] = useState(food.servings);
  const [checkmark, setCheckmark] = useState(false);

  const foodContext = useContext(FoodContext);
  const { editFood, removeFood } = foodContext;

  const startEdit = () => {
    setEdit(true);
  }

  const cancelEdit = () => {
    setEdit(false);
    setServings(food.servings);
  }

  // Saves the changes made in the edit window to the logged food in the state
  const saveEdit = (newFood) => {
    if(newFood.servings === 0){
      deleteFood();
    } else {
      editFood(newFood);
      setServings(newFood.servings);
    }
    setCheckmark(false);
    setEdit(false);
  }

  const checkClicked = () => {
    setCheckmark(true);
  }

  const deleteFood = () => {
    removeFood(food._id);
  }

  const { calories, name, brand, servingSize } = food;
  return (
    <div className="food-item-area">
      <div className="food-item">
        <div className="food-item-label">
          <h3>{brand} {name}</h3>
          <p>{edit ? Math.floor(calories / food.servings * servings) : Math.floor(calories)} Calories, Serving Size: {servingSize}</p>
        </div>
        <div className="food-item-btns">
          <button onClick={ edit ? cancelEdit : startEdit } className="btn-icon">
            <i className={edit ? "fas fa-times" : "fas fa-pencil-alt"}></i>
          </button>
          <button onClick={ edit ? checkClicked : deleteFood } className="btn-icon">
            <i className={edit ? "fas fa-check" : "fas fa-trash-alt"}></i>
          </button>
        </div>
      </div>
      { edit && <LFEditWindow food={food} getServings={setServings} saveEdit={saveEdit} checkmark={checkmark}/> }
    </div>
  )
}

FoodItem.propTypes = {
  food: PropTypes.object.isRequired
}

export default FoodItem;
