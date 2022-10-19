import { Button } from '@mui/material';
import React from 'react'
import { useState } from 'react'

function getCounter() {
  let localValue = localStorage.getItem('counter')
  if (localValue) {
    return Number(localValue)
  } else {
    return 0;
  }
}

export default function Counter({ onCounterChange }) {

  const [number, setNumber] = useState(getCounter());

  //this is a function
  const plusClick = () => {
    onCounterChange && onCounterChange(number + 1)
    setNumber(number + 1)

    localStorage.setItem('counter', number + 1)
  }

  //this is also a function
  const minusClick = () => {
    onCounterChange && onCounterChange(number - 1)
    setNumber(number - 1)
  }

  return (
    <div>
      <Button variant="outlined" onClick={minusClick} className='counter-button'>-</Button>
      <span>{number}</span>
      <Button variant="outlined" onClick={plusClick} className='counter-button'>+</Button>

    </div>
  )
}
