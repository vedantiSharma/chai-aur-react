import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'


function App() {
  const [count, setCount] = useState(0)
  // let myobj ={
  //   username:"leo",
  //   age:21
  // }
  // let newArr = [1,2,3]
  

  return (
    <>
     <h1 className='bg-pink-400 rounded-xl text-black p-4'>testing tailwind</h1>
     
  <Card username="Katherine " btntext= "clickMe" />
 
    </>
  )
}

export default App
