import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header/Header.jsx'

import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Work from './Components/Work/Work.jsx'
import Contact from './Components/Contact/Contact.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
