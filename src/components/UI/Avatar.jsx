import React from 'react'

function Avatar() {
  return (
    <div className='flex items-center gap-2'>
      <img alt="" width={45} height={45} className=' bg-slate-600 rounded-[100%]'/>
      <span className=' text-lg font-semibold hidden md:block'>Hi! User</span>
    </div>
  )
}

export default Avatar