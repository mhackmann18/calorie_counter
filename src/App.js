import './css/App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Button from './components/controls/Button';
import Progress from './components/progress/Progress';
import Search from './components/controls/Search';
import Foods from './components/foods_display/Foods';

//import axios from 'axios';

const App = () => {
  const [mode, setMode] = useState('log');
  // eslint-disable-next-line
  const [foods, setFoods] = useState([]); 
  const [loggedFoods, setLoggedFoods] = useState([]);
  const [nutrients, setNutrients] = useState({
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0
  });
  // Controls whether the loading icon shows
  const [loading, setLoading] = useState(false);

  // Update total nutrient information when a food is added, deleted or updated
  useEffect(() => {
    let calories = 0 ;
    let protein = 0; 
    let fat = 0; 
    let carbs = 0;
    loggedFoods.forEach((food) => {
      calories += food.calories;
      protein += food.carbs;
      fat += food.fat;
      carbs += food.carbs;
    });
    setNutrients({
      calories,
      protein,
      fat,
      carbs
    });
  }, [loggedFoods]);

  const searchFoods = async (query) => {
    setLoading(true);
    setFoods([]);
    setMode('search');
    if(query !== ''){
      await wait();
      setFoods([{
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
      }]);
    }
    setLoading(false);
  }

  const wait = async () => {
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }

  const addFood = (food) => {
    setLoggedFoods([...loggedFoods, food]);
  }

  const logButtonCick = () => {
    setMode('log');
  }

  const progButtonCick = () => {
    setMode('progress');
  }

  const savedFoodsButtonCick = () => {
    setMode('saved');
  }

  const removeFood = (id) => {
    setLoggedFoods(loggedFoods.filter(item => item.id !== id).map(item => item));
  }

  const editFood = (newFood) => {
    setLoggedFoods(loggedFoods.map(item => item.id  === newFood.id ? newFood : item));
  }

  return (
    <div className="App container">
      <Header nutrients={nutrients}/>
      <div id="control-panel" className="flex-container">
        <Button handleClick={logButtonCick} text={'Today\'s Log'} classes={'fas fa-book'}/>
        <Button handleClick={progButtonCick} text={'Progress'} classes={'fas fa-chart-bar'}/>
        <Button handleClick={savedFoodsButtonCick} text={'Saved Foods'} classes={'fas fa-utensils'}/>
        <Search searchFoods={searchFoods}/>
      </div>
      <div className="foods">
        { mode === 'log' && <Foods foods={loggedFoods} loading={false} display={'log'} removeFood={removeFood} editFood={editFood}/> }
        { mode === 'progress' && <Progress/> }
        { mode === 'search' && <Foods foods={foods} addFood={addFood} loading={loading} display={'search'}/> }
      </div>
    </div>
  );
}

export default App;
