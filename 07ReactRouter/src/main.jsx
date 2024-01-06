import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from  './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'



import './index.css'
const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
    path:'',
    element:<Home/>

  },
    {path:'About',
  element: <About/>}

]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router ={router}/>
    
  </React.StrictMode>,
)
