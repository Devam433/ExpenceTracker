import React, { Children } from 'react'
import { useParams } from 'react-router-dom'

function PageContainer({children}) {
  
  return (
    <div className=' h-full px-2 lg:px-3 lg:ml-[calc(100%/7)] relative z-0 mt-[60px] lg:mt-5'>
      <div className='hidden w-full h-[100px] border-b rounded-md mb-4 lg:block'>
        <h1 className=' font-semibold text-3xl backdrop-blur-sm opacity-90'>Dashboard</h1>
      </div>
        {children}
    </div>
  )
}
   
export default PageContainer