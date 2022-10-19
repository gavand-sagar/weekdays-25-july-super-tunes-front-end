import React from 'react'

export default function SquareButton({ label, onClick, currentActiveButton }) {
  return (
    <>
      {currentActiveButton == label && <div className='square-button orange' onClick={onClick}>{label}</div>}
      {currentActiveButton != label && <div className='square-button' onClick={onClick}>{label}</div>}
    </>
  )
}
