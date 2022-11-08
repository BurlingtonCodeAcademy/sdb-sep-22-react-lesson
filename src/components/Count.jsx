import React, { useState } from 'react'
import "./count.css"

function Count() {

    let [ count, setCount ] = useState(0)

    function incrementCount() {
        setCount(count + 1)
    }

    function decrementCount() {
        setCount(count - 1)
    }

  return (
    <div className='counter-container'>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default Count