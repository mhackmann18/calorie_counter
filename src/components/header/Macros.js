import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Macros extends Component {
  static defaultProps = {
    totalProtein: 0,
    totalFat: 0,
    totalCarbs: 0
  }

  static propTypes = {
    totalProtein: PropTypes.number.isRequired,
    totalFat: PropTypes.number.isRequired,
    totalCarbs: PropTypes.number.isRequired,
  }

  render() {
    const { totalProtein, totalFat, totalCarbs } = this.props;
    return (
      <div id="macros">
        <ul>
          <li>Protein: {totalProtein} g</li>
          <li>Fat: {totalFat} g</li>
          <li>Carbs: {totalCarbs} g</li>
        </ul>
      </div>
    )
  }
}

export default Macros;
