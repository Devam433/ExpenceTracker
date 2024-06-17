import React from 'react'
import Card from '../components/UI/Card'
import Button from '../components/UI/Button'

function Dashboard() {
  return (
    <main className=' h-[100%] flex'>
      <section className=' w-full flex md:w:full lg:w-4/6'> {/** total 3 components */}
        <div className=' w-full flex flex-col md:flex-row gap-3 lg:flex-row lg:gap-6'> {/** */}
          <div className='w-full flex gap-3 md:w-2/4 md:flex-col lg:w-5/12 md:h-3/5'>   {/** Mini card */}
            <Card> {/**balance */}{
              { 
                title:'Savings Left',
                content:'Rs. 20000',
              }
            }</Card>
            <Card> {/**Monthly Income */}
            {
              {  
                title:'Monthly Income',
                content:'Rs. 30000',
              }
            }
            </Card>
          </div>
          <div className='overflow-x-auto overflow-y-scroll h-[300px] md:w-2/4 border md:h-3/5'> {/**Recent Expenses */}
            <table className='table table-md table-pin-rows table-pin-cols '>
              <thead>
              <tr>
                <td>Subject</td> 
                <td>Amount</td> 
                <td>Time</td>  
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Burger King</td> 
                <td>3000</td> 
                <td>Today</td> 
              </tr>
              <tr>
                <td>Burger King</td> 
                <td>3000</td> 
                <td>Today</td> 
              </tr>
              <tr>
                <td>Burger King</td> 
                <td>3000</td> 
                <td>Today</td> 
              </tr>
              <tr>
                <td>Burger King</td> 
                <td>3000</td> 
                <td>Today</td> 
              </tr>
              <tr>
                <td>Burger King</td> 
                <td>3000</td> 
                <td>Today</td> 
              </tr>
              <tr>
                <td>Burger King</td> 
                <td>3000</td> 
                <td>Today</td> 
              </tr>
              <tr>
                <td>Burger King</td> 
                <td>3000</td> 
                <td>Today</td> 
              </tr>
              <tr>
                <td>Burger King</td> 
                <td>3000</td> 
                <td>Today</td> 
              </tr>
              <tr>
                <td>Burger King</td> 
                <td>3000</td> 
                <td>Today</td> 
              </tr>
              <tr>
                <td>Burger King</td> 
                <td>3000</td> 
                <td>Today</td> 
              </tr>
              <tr>
                <td>Burger King</td> 
                <td>3000</td> 
                <td>Today</td> 
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div> {/**last 30 days data */}
          
        </div>
      </section>
      <div> {/**Your Transaction */}

      </div>
    </main>
  )
}

export default Dashboard
{/* <Card>{
  {
    title:'Savings',
    content:'Rs. 50000',
  }
  }</Card> */}