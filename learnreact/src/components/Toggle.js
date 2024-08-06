import React, { useState } from 'react'

function Toggle() {
    const [status, setStatus]  = useState('Hide');
    const handleclick = () =>{
      if(status === 'Hide'){
        setStatus('Show')
      }
      else{
        setStatus('Hide')
      }
    }
  return (
    <>
    <button onClick={handleclick}>Click me to {status} container</button> 
    <div style={{display: `${status === 'Show' ? 'none' : 'block'}`}}>This is a container</div>
    </>
  )
}

export default Toggle
