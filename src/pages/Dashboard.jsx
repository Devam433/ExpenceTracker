import React from 'react'
import Card from '../components/UI/Card'
import Button from '../components/UI/Button'
import RecentExpences from '../components/Tables/RecentExpences'
import TransactionHistory from '../components/Tables/TransactionHistory'
import TransactionHistoryChart from '../components/Graphs/TransactionHistoryChart'
import {useSelector} from 'react-redux'
import SetupForm from '../components/Forms/SetupForm'
function Dashboard() {

  const userData = useSelector(state=>state.auth.userData);
  console.log(userData)

  return (
    <main className='w-full h-[100%] flex justify-between mt-[60px]'>  
      <section className=' w-full h-full flex flex-col md:w:full lg:w-4/6'> {/** total 3 components */}
        <div className='h-full w-full flex flex-col md:flex-row gap-10 md:gap-3 lg:flex-row lg:gap-6'> {/** */}
          <div className='w-full flex gap-3 md:w-2/4 md:flex-col lg:w-5/12 md:h-3/5'>   {/** Mini card */}
            <Card>{
              { 
                title:'Savings Left',
                content:'Rs. 20000',
              }
            }</Card>
            <Card>
            {
              {  
                title:'Monthly Income',
                content:'Rs. 30000',
              }
            }
            </Card>
          </div>{/**overflow-x-auto overflow-y-scroll h-[300px] md:w-2/4 md:h-auto*/}
          <div className='overflow-x-auto overflow-y-scroll h-[300px] md:w-2/4 border md:h-3/5 shadow-sm rounded-md bg-slate-100'> {/**Recent Expenses */}
          <div className='flex flex-col  shadow-md rounded-md bg-slate-100' >
            <RecentExpences/>
          </div>
          </div>
        </div> {/**className='relative top-[10%] md:absolute w-full md:top-[65%] lg:w-[63%] ' */}
          <div className='relative top-[10%] md:absolute w-full md:top-[83%] lg:w-[63%] shadow-md rounded-md bg-slate-100 border'> {/**last 30 days data */}
          <TransactionHistoryChart />
          </div>
      </section>
      <div className='hidden md:w-4/7 md:h-3/5 lg:block lg:h-full rounded-md'> {/**Your Transaction */}
      <div className='hidden w-full h-[100px] bg-slate-100 border rounded-md mb-4 lg:block'></div>
            <TransactionHistory/>
      </div>
      <SetupForm/>
    </main>
  )
}

export default Dashboard
