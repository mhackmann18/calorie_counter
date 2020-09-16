import React, { Fragment, useContext } from 'react';
import FoodItem from './FoodItem';
import Spinner from '../Spinner';
import FoodContext from '../../context/food/foodContext';
import { Link } from 'react-router-dom';

const Foods = () => {
  const foodContext = useContext(FoodContext);
  const { foods, loading } = foodContext;

  return (
    <Fragment>
      {
        foods.length === 0 ?
          loading ? <Spinner/> :  <div className="center-msg"><p className="no-results-msg">No results found.</p></div> 
          :
          foods.map((food)=> {
            return <FoodItem key={food._id} food={food}/>
          })
      }
      {foods.length !== 0 && <div className="custom-food-msg"><p>Can't find what you're looking for?</p>
      <Link to={'/add-custom'} className="link"> Add food manually</Link></div>}
    </Fragment>
  )
}

export default Foods;
