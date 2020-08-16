import React, { Fragment, useContext } from 'react';
import LFItem from './LFItem';
import FoodContext from '../../context/food/foodContext';


const Foods = () => {
  const foodContext = useContext(FoodContext);
  const { loggedFoods } = foodContext;

  return (
    <Fragment>
      {
        loggedFoods.length === 0 ?
          <div className="center-msg">
            <p className="no-results-msg">You haven't tracked any foods yet</p>
          </div> 
          :
          loggedFoods.map((food, index)=> {
            return <LFItem key={index} food={food}/>
          })
      }
    </Fragment>
  )
}

export default Foods;
