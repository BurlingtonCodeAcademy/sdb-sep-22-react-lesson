import React, { useState } from 'react'
import "./count.css"

function Count() {

  // Replace anonymous callback inside count useState() with this
  function iCount() {
    console.log("This runs every time state is updated")
    return 0
  }

    let [ count, setCount ] = useState(
      () => {
      console.log("This runs only once during initial render")
      return 0
    }
    // iCount()
    )

    function incrementCount() {
        // prevCount gives us access to the prior state of our state variable
        setCount(prevCount => prevCount + 1)

    }

    function decrementCount() {
        setCount(count - 1)
    }
    // ! be back 10:40ish ET

  return (
    <div className='counter-container'>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default Count