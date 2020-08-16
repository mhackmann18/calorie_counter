import React, { useState, useEffect, useContext } from 'react';
import FoodContext from '../../context/food/foodContext';

const Macros = () => { 
  const foodContext = useContext(FoodContext);
  const { protein, fat, carbs } = foodContext.nutrients;
  const [totalProtein, setProtein] = useState(0);
  const [totalFat, setFat] = useState(0);
  const [totalCarbs, setCarbs] = useState(0);

  useEffect(() => {
    setProtein(protein);
    setFat(fat);
    setCarbs(carbs);
  }, [protein, fat, carbs]);
  
  return (
    <div id="macros">
      <ul>
        <li>Protein: {parseInt(totalProtein)} g</li>
        <li>Carbs: {parseInt(totalCarbs)} g</li>
        <li>Fat: {parseInt(totalFat)} g</li>
      </ul>
    </div>
  ) 
}

export default Macros;
