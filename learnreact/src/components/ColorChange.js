import React from 'react'

function ColorChange() {
    const [color, setColor] = React.useState('white');
    const [bgcolor, setBgcolor] = React.useState('white');

    const handlechange = (e) => {
        setColor( e.target.value);
    }

    const handleclick = () => {
        setBgcolor(color);
    }
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center'  ,justifyContent: 'center'}}>
      <input type="text" id="color" name="color" onChange={handlechange} placeholder='Enter a color' style={{padding: '2vh', width: '20vw', fontSize: '3vh'}}/>
      <button onClick={handleclick} style={{padding: '2vh', width: '20vw', fontSize: '3vh'}}> Change color</button>
      <div style={{backgroundColor: bgcolor, height: '50vh', width: '50vw', marginTop: '5vh'}}></div>
    </div>
  )
}

export default ColorChange
