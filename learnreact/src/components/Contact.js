import React from 'react'

function Contact() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh'}}>
      <h1>Get in Touch</h1>
      <p>Phone: 123-456-7890</p>
      <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
      <p>Address: 123 Main St, Anytown, USA</p>
    </div>
  )
}

export default Contact
