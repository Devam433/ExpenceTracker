import React, { forwardRef, useId } from 'react'

const Input = forwardRef(
    function Input(
    {
      type='text',
      label,
      placeholder='',
      height='',
      width='',
      className='',
      ...props
    },ref) {
      
    const id = useId();
    return (
      <div className='w-full h-[45px] text-lg'>
          {label && <label className='text-lg' htmlFor={id}>{label}</label>}
          <input ref={ref} type={`${type}`} id={id} className={`${className} indent-3 rounded-sm h-${height===true ? height : `10`} w-72 `} {...props} />
      </div>
    )
  }
) 
export default Input