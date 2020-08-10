import React from 'react';
import FoodItem from './FoodItem';
import PropTypes from 'prop-types';

const Foods = ({ foods, addFood }) => {
  return (
    <div className="foods">
      {foods.length === 0 ?
        <div className="center-msg"><p className="no-results-msg">No results found.</p></div> 
        :
        foods.map(food => {
          return <FoodItem key={food.id} food={food} addFood={addFood}/>
      })}
    </div>
  )
}

Foods.propTypes = { 
  foods: PropTypes.array.isRequired,
  addFood: PropTypes.func.isRequired 
}

export default Foods;
