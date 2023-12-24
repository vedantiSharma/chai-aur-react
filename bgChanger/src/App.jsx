import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

 
  return (
<div  className='w-full  h-screen duration-200' style={{background: color}}>
  

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-52 px-5' >
      <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2"> 

      <button onClick={()=> setColor("green")} className=' outline-none px-4 py-1 rounded-full ' style={{background:"green"} } >Green</button>
      <button onClick={()=> setColor("yellow")} className=' outline-none px-4 py-1 rounded-full ' style={{background:"yellow"} } >Yellow</button>

      <button onClick={()=> setColor("pink")} className=' outline-none px-4 py-1 rounded-full ' style={{background:"pink"} } >pink</button>

      <button onClick={()=> setColor("orange")} className=' outline-none px-4 py-1 rounded-full ' style={{background:"orange"} } >orange</button>
      <button onClick={()=> setColor("blue")} className=' outline-none px-4 py-1 rounded-full ' style={{background:"blue"} } >Blue</button>
      <button onClick={()=> setColor("purple")} className=' outline-none px-4 py-1 rounded-full ' style={{background:"purple"} } >purple</button>
      <button onClick={()=> setColor("grey")} className=' outline-none px-4 py-1 rounded-full ' style={{background:"grey"} } >grey</button>
      <button onClick={()=> setColor("red")} className=' outline-none px-4 py-1 rounded-full ' style={{background:"red"} } >Red</button>
      <button onClick={()=> setColor("olive")} className=' outline-none px-4 py-1 rounded-full ' style={{background:"olive"} } >olive</button>


        </div>
        </div>
     </div>
    

  )
}

export default App
