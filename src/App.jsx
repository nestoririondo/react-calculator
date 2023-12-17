import React, { useState } from 'react'
import './style.css'
import Display from './components/Display'
import Keypad from './components/Keypad'

function App() {

  const [previous, setPrevious] = useState(0)
  const [current, setCurrent] = useState(0)

  const handleClick = (e) => {
    setCurrent(current + e.target.innerText)
  }

  return (
    <>
      <div class="calculator-container">
        <Display current={current}/>
        <Keypad onClick={handleClick}/>
        </div>
    </>
  )
}

export default App
