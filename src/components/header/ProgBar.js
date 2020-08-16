import React, { useEffect, useState, useContext } from 'react';
import FoodContext from '../../context/food/foodContext';

const ProgBar = () => {
  const foodContext = useContext(FoodContext);
  const { calories, } = foodContext.nutrients;
  
  const [width, setWidth] = useState(calories/3000*100)

  useEffect(() => {
    calories/3000*100 < 100 ? setWidth(calories/3000*100) : setWidth(100);
  }, [calories]);

  return (
    <div className="load-bar">
      <div className="prog" style={{ width: `${width}%` }}></div>
    </div>
  )
}

export default ProgBar;
