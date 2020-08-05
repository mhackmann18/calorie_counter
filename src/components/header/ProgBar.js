import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProgBar extends Component {
  static defaultProps = {
    width: '0px'
  }

  static propTypes = {
    width: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="load-bar">
        <div className="prog" style={{ width: this.props.width }}></div>
      </div>
    )
  }
}

export default ProgBar;
