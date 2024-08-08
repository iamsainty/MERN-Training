import React, { useEffect, useState } from 'react'

function Effect() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(count);
    })
    const handleclick = () => {
        setCount(count+1);
    }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleclick}>Increase</button>
    </div>
  )
}

export default Effect
