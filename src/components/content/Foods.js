import React, { Component } from 'react';
import FoodItem from './FoodItem';

const food = {
  name: '2% Reduced Fat Milk',
  servingSize: '8 oz',
  brand: 'Prairie Farms',
  calories: 120,
  protein: 12,
  fat: 2,
  carbs: 11,
  id: null,
  servings: 1
}

class Foods extends Component {
  render() {
    return (
      <div className="foods">
        <FoodItem food={food}/>
        <FoodItem food={food}/>
        <FoodItem food={food}/>
        <FoodItem food={food}/>
        <FoodItem food={food}/>
        <FoodItem food={food}/>
        <FoodItem food={food}/>
      </div>
    )
  }
}

export default Foods;
