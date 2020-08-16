import './css/App.css';
import React from 'react';
import Header from './components/header/Header';
import Buttons from './components/controls/Buttons';
import Search from './components/controls/Search';
import Foods from './components/foods_display/Foods';
import LoggedFoods from './components/logged_foods/LoggedFoods';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FoodState from './context/food/FoodState';
import CustomFood from './components/custom_food/CustomFood';
import BarChart from './components/progress/BarChart';

const App = () => {
  return (
    <FoodState>
    <Router>
    <div className="App container">
      <Header/>
      <div id="control-panel" className="flex-container">
        <Buttons/>
        <Search/>
      </div>
      <div className="foods">
        <Switch>
          <Route exact path='/' component={LoggedFoods}/>
          <Route exact path='/add-custom' component={CustomFood}/>
          <Route exact path='/progress' component={BarChart}/>
          <Route exact path='/search' component={Foods}/>
        </Switch>
      </div>
    </div>
    </Router>
    </FoodState>
  )
}

export default App;
