import React, { useReducer, useEffect } from 'react';
import FoodContext from './foodContext';
import FoodReducer from './foodReducer';
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
    state.loggedFoods.forEach(item => item.id === id ? isTracked = true : null);
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

    if(query !== ''){
      await wait();
      
      var foods = [{
        name: '2% Reduced Fat Milk',
        servingSize: '1 Cup',
        brand: 'Prairie Farms',
        calories: 120,
        protein: 12,
        fat: 4,
        carbs: 11,
        id: 1,
        servings: 1
      },
      {
        name: 'Cheddar crackers',
        servingSize: '28 Crackers',
        brand: 'Cheez its',
        calories: 150,
        protein: 3,
        fat: 11,
        carbs: 28,
        id: 2,
        servings: 1
      }];

      dispatch({
        type: SEARCH_FOODS,
        payload: foods
      });
    }

    dispatch({ type: SET_LOADING, payload: false });
  }

  // Add food
  const addFood = food => {
    if(isFoodTracked(food.id)){
      const { loggedFoods } = state;
      for(let i = 0; i < loggedFoods.length; ++i){
        if(food.id === loggedFoods[i].id){
          food.servings += loggedFoods[i].servings;
          food.fat += loggedFoods[i].fat;
          food.protein += loggedFoods[i].protein;
          food.calories += loggedFoods[i].calories;
          food.carbs += loggedFoods[i].carbs;
        }
        dispatch({
          type: SET_LOGGED_FOODS,
          payload: loggedFoods.map(item => item.id  === food.id ? food : item )
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
      payload: state.loggedFoods.filter(item => item.id !== id).map(item => item)
    });
    setNutrients();
  }

  // Edit food
  const editFood = newFood => {
    dispatch({
      type: SET_LOGGED_FOODS,
      payload: state.loggedFoods.map(item => item.id  === newFood.id ? newFood : item)
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