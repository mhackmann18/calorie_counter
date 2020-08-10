import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Macros = ({ nutrients }) => { 
  const { protein, fat, carbs } = nutrients;
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
        <li>Protein: {totalProtein} g</li>
        <li>Carbs: {totalCarbs} g</li>
        <li>Fat: {totalFat} g</li>
      </ul>
    </div>
  ) 
}

Macros.propTypes = {
  nutrients: PropTypes.object.isRequired
}

export default Macros;
