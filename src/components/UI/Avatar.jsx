import React from 'react'
import { useSelector } from 'react-redux'

function Avatar() {
  const userData = useSelector(state => state.auth.userData);
  return (
    <div className='flex items-center gap-2'>
      <img alt="" width={45} height={45} className=' bg-slate-600 rounded-[100%]'/>
      <span className=' text-lg font-semibold hidden md:block'>Hi! {userData.name}</span>
    </div>
  )
}

export default Avatar