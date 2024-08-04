import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './reset.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      errorElement:null,
      children:[
        {
          path:'',//index path
          element:<Home/>
        },
        {
          path:'dashboard', 
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
        {
          path:'signup',
          element:<Signup/>
        },
        {
          path:'login',
          element:<Login/>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}> 
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)