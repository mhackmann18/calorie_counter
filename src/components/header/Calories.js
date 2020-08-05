import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgBar from './ProgBar';

export class Calories extends Component {
  static defaultProps = {
    totalCalories: 0,
    goalCalories: 3000
  }

  static propTypes = {
    totalCalories: PropTypes.number.isRequired,
    goalCalories: PropTypes.number.isRequired
  }

  render() {
    const { totalCalories, goalCalories } = this.props;
    return (
      <div id="calorie-progress">
        <h1>{totalCalories}<span className="sub-content"> of {goalCalories} calories</span></h1>
        <ProgBar/>
      </div>
    )
  }
}

export default Calories;
