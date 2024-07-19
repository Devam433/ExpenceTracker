import React from 'react'
import { Navigate } from 'react-router-dom'

function Home() {
  return (
    <div className='flex justify-center items-center gap-5 flex-col'>
        <h1>This is Home Page</h1>
        <button className='px-3 py-2 bg-blue-400 ' onClick={Navigate('/login')}>LogIn</button>
    </div>
  )
}

export default Home