import React from 'react'

function Card({className,children}) {
  return (
    <div className={`card bg-white backdrop-blur-sm rounded-md w-2/4 h-fit md:w-full md:h-2/4`}>
        <div className=' card-body'>
            <h1 className=' card-title'>{children.title ?? 'Title'}</h1>
            <div>
                {children.content ?? 'This is the content'}
            </div>
        </div>
    </div>
  )
}

export default Card