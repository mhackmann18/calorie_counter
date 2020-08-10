import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ProgBar = ({ calories, calorieGoal }) => {
  const [width, setWidth] = useState(calories/calorieGoal*100)

  useEffect(() => {
    calories/calorieGoal*100 < 100 ? setWidth(calories/calorieGoal*100) : setWidth(100);
  }, [calories, calorieGoal]);

  return (
    <div className="load-bar">
      <div className="prog" style={{ width: `${width}%` }}></div>
    </div>
  )
}

ProgBar.propTypes = {
  calories: PropTypes.number.isRequired,
  calorieGoal: PropTypes.number.isRequired
}

export default ProgBar;
