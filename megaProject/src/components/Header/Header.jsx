import React from 'react'
import {useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import {Logo , container , Logoutbtn} from '../index'

export default function Header() {

  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate()

  const navItem =[
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
   <header className='py-3 shadow bg-gray-300'>
   <container>
    <nav className='flex'>
      <div className='mr-4'>
        <Link to='/'> <Logo width='70px'></Logo>
        </Link>
      </div>
      <ul>
        {/* writing js and applying map on navitem */}
        {
          navItem.map((item)=>
          item.active ? (
            <li key={item.name}>
              <button onClick={()=>navigate(item.slug)}
               className='inline-block py-2 px-6 hover:bg-blue-100 rounded-full'>{item.name}</button>
            </li>
          ): null)
        }

        {authStatus && (
          <li>
            <Logoutbtn/>
            </li>
        )}


      </ul>


    </nav>
   </container>
   </header>
  )
}

