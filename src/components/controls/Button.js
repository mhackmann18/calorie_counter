import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ classes, text, route }) => {

  return (
    <Link to={route} className="btn"><i className={classes}></i><span className="padding-left">{text}</span></Link>
  )
}

export default Button;

