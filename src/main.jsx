import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './reset.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      errorElement:null,
      children:[
        {
          path:'', //index path
          element:<Dashboard/>,
        },
        {
          path:'expenses', 
          element:'',
        },
        {
          path:'report', 
          element:'',
        },
        {
          path:'personalize', 
          element:'',
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> 
      <App /> 
    </RouterProvider>
  </React.StrictMode>,
)