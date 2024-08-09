import React from 'react'
import useCounter from './useCounter'

function Counter() {
    const { count, increament, decreament} = useCounter(0);
  return (
    <div>
      <div>Count is : {count}</div>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
    </div>
  )
}

export default Counter
