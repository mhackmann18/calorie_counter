import React, { Fragment } from 'react';
import spinner from '../resources/spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block', paddingBottom: '13%' }}/>
    </Fragment>
  )
}

export default Spinner;
