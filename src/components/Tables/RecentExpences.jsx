import React from 'react'

function RecentExpences() {
  return (
    <>
        <div className='px-5 py-3'><span>Recent Expences</span></div>
            <table className='table table-md table-pin-rows table-pin-cols '>
              <thead className="text-xs text-gray-700 uppercase ">
              <tr className='bg-gray-50'>
                <td>Subject</td> 
                <td>Amount</td> 
                <td>Time</td>  
              </tr>
              </thead>
              <tbody>
              <tr className='bg-white border-b'>
                <td>Burger King</td> 
                <td>3000</td> 
                <td>Today</td> 
              </tr>
              </tbody>
            </table>
    </>
  )
}

export default RecentExpences