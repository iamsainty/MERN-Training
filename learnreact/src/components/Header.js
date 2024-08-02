import React, { useState } from 'react'

export default function Header(props) {
  const [input, setInput]=useState('hello');
  return (
    <div>
      <h1>Input value:{input}</h1>
      <input  type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <p>This is para of Header.</p>
      <p>My name is  {props.name}</p>
    </div>
  )
}

