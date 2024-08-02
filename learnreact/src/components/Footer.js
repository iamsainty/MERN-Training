import React from 'react'

export default function Footer(props) {
  return (
    <div>
         <h1>This is Footer.</h1>
      <p>This is para of Footer.</p>
      <p>My name is {props.name}</p>
      
    </div>
  )
}