import React from 'react';

const Button = ({ classes, text, handleClick }) => {

  return (
    <button className="btn" onClick={handleClick}><i className={classes}></i> {text}</button>
  )
}

export default Button;

