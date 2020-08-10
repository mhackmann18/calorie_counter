import React from 'react';
import PropTypes from 'prop-types';
import ProgBar from './ProgBar';

const Calories = ({ calories }) => {
  return (
    <div id="calorie-progress">
      <h1>{calories}<span className="sub-content"> of {3000} calories</span></h1>
      <ProgBar calories={calories} calorieGoal={3000}/>
    </div>
  )
}

Calories.defaultProps = {
  calorieGoal: 3000
}

Calories.propTypes = {
  calories: PropTypes.number.isRequired,
  calorieGoal: PropTypes.number.isRequired,
}

export default Calories;
