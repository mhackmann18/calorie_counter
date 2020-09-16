import React, { useState, useContext } from 'react';
import EditWindow from './EditWindow';
import PropTypes from 'prop-types';
import FoodContext from '../../context/food/foodContext';

const FoodItem = ({ food }) => {
  const [edit, setEdit] = useState(false);
  const [servings, setServings] = useState(food.servings);
  const [checkmark, setCheckmark] = useState(false);

  const foodContext = useContext(FoodContext);
  const { addFood } = foodContext;

  const startEdit = () => {
    setEdit(true);
  }

  const cancelEdit = () => {
    setEdit(false);
    setServings(food.servings);
  }

  const quickAdd = () => {
    let copiedFood = JSON.parse(JSON.stringify(food));
    addFood(copiedFood);
  }

  const manualAdd = (newFood) => {
    if(newFood.servings !== 0) {
      let copiedFood = JSON.parse(JSON.stringify(newFood))
      addFood(copiedFood);
    }
    setCheckmark(false);
    cancelEdit();
  }

  const checkClicked = () => {
    setCheckmark(true);
  }

  const { calories, name, brand, servingSize } = food;
  return (
    <div className="food-item-area-search">
      <div className="food-item">
        <div className="food-item-label">
          <h3>{brand} {name}</h3>
          <p>{Math.floor(calories * servings)} Calories, Serving Size: {servingSize}</p>
        </div>
        <div className="food-item-btns">
          <button onClick={ edit ? cancelEdit : startEdit } className="btn-icon">
            <i className={edit ? "fas fa-times" : "fas fa-pencil-alt"}></i>
          </button>
          <button onClick={ edit ? checkClicked : quickAdd } className="btn-icon">
            <i className={edit ? "fas fa-check" : "fas fa-plus"}></i>
          </button>
        </div>
      </div>
      { edit && <EditWindow food={food} getServings={setServings} saveChanges={manualAdd} checkmark={checkmark}/> }
    </div>
  )
}

FoodItem.propTypes = {
  food: PropTypes.object.isRequired
}

export default FoodItem;
