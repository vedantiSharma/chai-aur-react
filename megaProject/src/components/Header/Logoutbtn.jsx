import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authslice'
import authService from '../../store/authslice'

export default function Logoutbtn() {
  const dispatch = useDispatch()
  const logoutHandler =()=>{
      authService.logout().then(()=>{
        dispatch(logout())
      })
  }
  return (
   <button className='inline-block px-2 py-8 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}
