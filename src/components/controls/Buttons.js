import React, { Fragment } from 'react';
import Button from './Button';

const Buttons = () => {
  return (
    <Fragment>
      <Button route={'/'} text={'Today\'s Log'} classes={'fas fa-book'}/>
      <Button route={'/progress'} text={'Progress'} classes={'fas fa-chart-bar'}/>
      <Button route={'/add-custom'} text={'Add Custom'} classes={'fas fa-plus'}/>
    </Fragment>
  )
}

export default Buttons;
