import React, { useState, useContext } from 'react';
import FoodContext from '../../context/food/foodContext';
import axios from 'axios';

const CustomFood = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [servingSize, setServingSize] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  const foodContext = useContext(FoodContext);

  const nameChange = e => setName(e.target.value);

  const brandChange = e => setBrand(e.target.value);

  const servingSizeChange = e => setServingSize(e.target.value);

  const caloriesChange = e => setCalories(parseInt(e.target.value));

  const proteinChange = e => setProtein(parseInt(e.target.value));

  const carbsChange = e => setCarbs(parseInt(e.target.value));

  const fatChange = e => setFat(parseInt(e.target.value));

  const handleSubmit = async e => {
    e.preventDefault();
    if(
      !isNaN(fat)
      && !isNaN(calories)
      && !isNaN(protein)
      && !isNaN(carbs)
      && name !== ''
      && servingSize !== ''
    ){
      const req = await axios.post('http://localhost:5000/api/v1/foods', {
        "name": name,
        "brand": brand,
        "servingSize": servingSize,
        "calories": calories,
        "fat": fat,
        "protein": protein,
        "carbs": carbs,
        "servings": 1
      });

      foodContext.addFood(req.data);
    }
  }

  return (
    <form className="custom-food-form" onSubmit={handleSubmit} action="submit">
      <h1>Create a New Food</h1>
      <ul>
        <li>
          <label htmlFor="name">Food Name: </label>
          <input required
          type="text"
          onChange={nameChange}/>
        </li>
        <li>
          <label htmlFor="name">Brand Name: </label>
          <input 
          type="text"
          onChange={brandChange}
          />
        </li>
        <li>
          <label htmlFor="name">Serving Size: </label>
          <input required
          type="text"
          onChange={servingSizeChange}/>
        </li>
        <li className="inline">
          <label className="mobile-inline" htmlFor="name">Calories: </label>
          <input required
          min="0" 
          type="number"
          onChange={caloriesChange}
          max="5000"/>
        </li>
        <li className="inline">
          <label className="mobile-inline" htmlFor="name">Protein (grams): </label>
          <input required
          min="0" 
          type="number"
          onChange={proteinChange}
          max="500"/>
        </li>
        <li className="inline">
          <label className="mobile-inline" htmlFor="name">Carbs (grams): </label>
          <input required
          min="0" 
          type="number"
          onChange={carbsChange}
          max="1000"/>
        </li>
        <li className="inline">
          <label className="mobile-inline" htmlFor="name">Fat (grams): </label>
          <input required
          min="0" 
          type="number"
          onChange={fatChange}
          max="500"/>
        </li>
      </ul>
      <button className="btn">Add Food</button>
    </form>
  )
}

export default CustomFood;
