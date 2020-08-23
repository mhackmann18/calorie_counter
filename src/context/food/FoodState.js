import React, { useReducer, useEffect } from 'react';
import FoodContext from './foodContext';
import FoodReducer from './foodReducer';
import axios from 'axios';
import { 
  SEARCH_FOODS, 
  SET_LOADING,
  SET_NUTRIENTS,
  SET_LOGGED_FOODS,
  CLEAR_SEARCH
} from '../types';

const FoodState = props => {
  const initialState = {
    foods: [],
    loggedFoods: [],
    loading: false,
    nutrients: { calories: 0, protein: 0, carbs: 0, fat: 0 }
  }

  const [state, dispatch] = useReducer(FoodReducer, initialState);

  const isFoodTracked = id => {
    let isTracked = false;
    state.loggedFoods.forEach(item => item._id === id ? isTracked = true : null);
    return isTracked;
  }
  const wait = async () => {
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }
  useEffect(() => {
    setNutrients();
    //eslint-disable-next-line
  },[state.loggedFoods]);

  // Search foods
  const searchFoods = async query => {
    dispatch({ type: CLEAR_SEARCH });
    dispatch({ type: SET_LOADING, payload: true });

    const res = await axios.get('http://localhost:5000/api/v1/foods');

    if(query !== ''){
      await wait();

      dispatch({
        type: SEARCH_FOODS,
        payload: res.data
      });
    }

    dispatch({ type: SET_LOADING, payload: false });
  }

  // Add food
  const addFood = food => {
    if(isFoodTracked(food._id)){
      const { loggedFoods } = state;
      for(let i = 0; i < loggedFoods.length; ++i){
        if(food._id === loggedFoods[i]._id){
          food.servings += loggedFoods[i].servings;
          food.fat += loggedFoods[i].fat;
          food.protein += loggedFoods[i].protein;
          food.calories += loggedFoods[i].calories;
          food.carbs += loggedFoods[i].carbs;
        }
        dispatch({
          type: SET_LOGGED_FOODS,
          payload: loggedFoods.map(item => item._id  === food._id ? food : item )
        })
      }
    } else {
      dispatch({
        type: SET_LOGGED_FOODS,
        payload: [...state.loggedFoods, food]
      })
    }
    setNutrients();
  }

  // Remove food
  const removeFood = id => {
    dispatch({
      type: SET_LOGGED_FOODS,
      payload: state.loggedFoods.filter(item => item._id !== id).map(item => item)
    });
    setNutrients();
  }

  // Edit food
  const editFood = newFood => {
    dispatch({
      type: SET_LOGGED_FOODS,
      payload: state.loggedFoods.map(item => item._id  === newFood._id ? newFood : item)
    });
    setNutrients();
  }

  // Set nutrients
  const setNutrients = () => {
    let calories = 0 ;
    let protein = 0; 
    let fat = 0; 
    let carbs = 0;
    state.loggedFoods.forEach((food) => {
      calories += food.calories;
      protein += food.protein;
      fat += food.fat;
      carbs += food.carbs;
    });
    dispatch({
      type: SET_NUTRIENTS,
      payload: {
        calories,
        protein,
        fat,
        carbs
      }
    })
  }

  return <FoodContext.Provider
    value = {{
      loading: state.loading,
      foods: state.foods,
      nutrients: state.nutrients,
      loggedFoods: state.loggedFoods,
      searchFoods,
      setNutrients,
      addFood,
      removeFood,
      editFood
    }}
    >
    {props.children}
  </FoodContext.Provider>
}

export default FoodState;