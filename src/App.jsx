
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'


function App() {
 const [count , setCount] = useState(0);
 const [count2 , setCount2] = useState(0);
 const [count3 , setCount3] = useState(0);
  const styleBox = {
    margin: '20px',
    padding: '20px',
    border: '2px solid black',
    
  }
  return (
    <div>
    <h1>Tajbi</h1>
    <div style={{display: 'flex'}}>
    <Tajbi style={styleBox} times='33' title='SubhanAllah'  count={count} setCount={setCount}></Tajbi>
    <Tajbi style={styleBox} times='33' title='Alhamdulillah'  count={count2} setCount={setCount2}></Tajbi>
    <Tajbi style={styleBox} times='34' title='AllahuAkbar'  count={count3} setCount={setCount3}></Tajbi>
    </div>
    </div>
  )
}

function Tajbi ({times,title,count,setCount,style}){
  const add= () =>{
    setCount(count+1)
  }
  const remove= () =>{
    setCount(count-1)
  }
  return (
    <div style={style}>
      <h3>{times} Times</h3>
      <h3>{title} : {count}</h3>
      <div style={{display:'flex', gap: '5px'}}>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
      </div>
    </div>
  )
}

export default App
