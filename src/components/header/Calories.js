import React, { useContext } from 'react';
import ProgBar from './ProgBar';
import FoodContext from '../../context/food/foodContext';

const Calories = () => {
  const foodContext = useContext(FoodContext);
  const { calories } = foodContext.nutrients;

  return (
    <div id="calorie-progress">
      <h1>{parseInt(calories)}<span className="sub-content"> of {3000} calories</span></h1>
      <ProgBar/>
    </div>
  )
}

export default Calories;
