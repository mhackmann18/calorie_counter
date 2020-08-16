import {
  SET_LOADING,
  SEARCH_FOODS, 
  SET_NUTRIENTS,
  SET_LOGGED_FOODS,
  CLEAR_SEARCH
} from '../types';

export default (state, action) => {
  switch(action.type){
    case CLEAR_SEARCH:
      return {
        ...state,
        foods: []
      }
    case SET_LOGGED_FOODS:
      return {
        ...state,
        loggedFoods: action.payload
      }
    case SET_NUTRIENTS:
      return {
        ...state,
        nutrients: action.payload
      }
    case SEARCH_FOODS:
      return {
        ...state,
        foods: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}