import React, { Fragment } from 'react';
import Button from './Button';

const Buttons = () => {
  return (
    <Fragment>
      <Button route={'/'} text={'Today\'s Log'} classes={'fas fa-book mobile-rm'}/>
      <Button route={'/progress'} text={'Progress'} classes={'fas fa-chart-bar mobile-rm'}/>
      <Button route={'/add-custom'} text={'Manual Add'} classes={'fas fa-plus mobile-rm'}/>
    </Fragment>
  )
}

export default Buttons;
