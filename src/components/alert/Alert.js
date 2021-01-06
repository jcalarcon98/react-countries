import React from 'react'
import './Alert.css';

export const Alert = ({message = 'Default message'}) => {
  return (
    <div className='alert'>
      <p>  
        Warning: <span> {message} </span>
      </p>
    </div>
  )
}
