import React, { Fragment } from 'react';
import FoodItem from './FoodItem';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

const Foods = ({ foods, addFood, loading, display, removeFood, editFood }) => {
  return (
    <Fragment>
      {
        foods.length === 0 ?
          loading ? <Spinner/> : <div className="center-msg">
            <p className="no-results-msg">{display === 'search' ? 'No results found' : 'No foods tracked yet'}</p>
            </div> 
          :
          foods.map((food, index)=> {
            return <FoodItem key={index} food={food} addFood={addFood} display={display} removeFood={removeFood} editFood={editFood}/>
          })
      }
    </Fragment>
  )
}

Foods.propTypes = { 
  foods: PropTypes.array.isRequired,
  //addFood: PropTypes.func.isRequired 
}

export default Foods;
