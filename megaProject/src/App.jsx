//finally happen either it is working or not ie it will excute anyway
//dispatch is like combiner when u want to use react with redux

import { useEffect, useState } from 'react'
import {  useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import './App.css'
import {login, logout} from './store/authslice'
import {Header, Footer} from './components'
import {Outlet} from 'react-router-dom'
function App() {
  const [loading, SetLoading] = useState(true)

const dispatch = useDispatch()
  useEffect(() => {
    authservice.GetCurrentUser()
    .then((userData)=> {
      //applying dispatch functionality

      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
        
      }
    })
    .finally(()=> SetLoading(false) )
  },[])
    //it will contain login/logout so u need to import auth


   
    return !loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-black-400'>
        <div className='w-full block'>
          <Header/>
          <main>
          TODO:  <Outlet />
          </main>
          <Footer/>
        </div>
      </div>
    ) : null

   
  } 

export default App
