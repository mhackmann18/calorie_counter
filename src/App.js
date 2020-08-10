import './css/App.css';
import React, { useState } from 'react';
import Header from './components/header/Header';
import Search from './components/controls/Search';
import Foods from './components/foods_display/Foods';

const App = () => {
  // eslint-disable-next-line
  const [foods, setFoods] = useState([
    { 
      name: '2% Reduced Fat Milk',
      servingSize: '8 oz',
      brand: 'Prairie Farms',
      calories: 120,
      protein: 12,
      fat: 2,
      carbs: 11,
      id: 1,
      servings: 1
    }
  ]); 
  const [savedFoods, setSavedFoods] = useState([]);
  const [nutrients, setNutrients] = useState({
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0
  });
  
  const searchFoods = async (query) => {
    console.log(query);
  }

  const addFood = (food) => {
    setSavedFoods([...savedFoods, food]);
    setNutrients({
      calories: nutrients.calories += food.calories,
      protein: nutrients.protein += food.protein,
      fat: nutrients.fat += food.fat,
      carbs: nutrients.carbs += food.carbs,
    });
  }

  return (
    <div className="App container">
      <Header nutrients={nutrients}/>
      <div id="control-panel" className="flex-container">
        <button id="log-btn" className="btn add-food"><i className="fas fa-book"></i> Logged</button>
        <Search searchFoods={searchFoods}/>
      </div>
      <Foods foods={foods} addFood={addFood}/>
    </div>
  );
}

export default App;
