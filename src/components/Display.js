import { React, useState } from 'react'

function Display() {

  const [displayText, setDisplayText] = useState('')



  return (
    <div className='Display'>
      <p>Hello</p>
      <p>{displayText}</p>
    </div>
  )
}

export default Display;