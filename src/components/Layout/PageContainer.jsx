import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function PageContainer({children}) {
  const userStatus = useSelector(state=>state.auth.status);
  return (
    <div className={` h-[100vh] ${userStatus && `lg:ml-[calc(100%/7)]`} z-0 mt-[0px] lg:mt-0 px-2 lg:px-3`}> {/**px-2 lg:px-3 */}
     { /**<div className='hidden w-full h-[100px] border-b rounded-md mb-4 lg:block'>
         <h1 className=' font-semibold text-3xl backdrop-blur-sm opacity-90'>Dashboard</h1> 
      </div> */}
        {children} {/** Routes will be here */}
    </div>
  )
}
   
export default PageContainer