import React, { Children } from 'react'

function PageContainer({children}) {
  return (
    <div className=' h-full px-2 lg:px-3 lg:ml-[calc(100%/7)] relative z-0 lg:mt-3'>
        {children}
    </div>
  )
}

export default PageContainer