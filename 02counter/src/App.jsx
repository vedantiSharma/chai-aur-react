import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)


  const addvalue =()=>{
    setCounter(counter+1);
    console.log("value added" , Math.random())
  }

  const removevalue= () => {
    setCounter(counter-1)
    console.log("remove value" , Math.random())
  }
    //const counter =150;
    return (
    <>
   <h1>chai and react</h1>
   <p> Counter is {counter}</p>

   <button onClick={addvalue}>Add value </button>
   <br></br>
   <button onClick={removevalue}>Remove value</button>

   <h2> changed values {counter}</h2>
    </>
  )
}

export default App
