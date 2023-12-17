import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addvalue =()=>{
    console.log("value added" , Math.random())
  }
    const counter =150;
    return (
    <>
   <h1>chai and react</h1>
   <p> Counter is {counter}</p>

   <button onClick={addvalue}>Add value </button>
   <br></br>
   <button>Remove value</button>
    </>
  )
}

export default App
