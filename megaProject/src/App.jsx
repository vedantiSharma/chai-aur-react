
import { useEffect, useState } from 'react'
import {useDispatch} from '@reduxjs/toolkit'
import './App.css'

function App() {
 const[Loading, SetLoading] =useState(true)
const dispatch = useDispatch()
//dispatch is like combiner when u want to use react with redux

  return (
    
      <>
      <h1>appplication run app.js </h1></>
      
  )
}

export default App
