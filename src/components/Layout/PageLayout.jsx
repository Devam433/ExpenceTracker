import { useSelector } from 'react-redux'
import Aside from './Aside'

function PageLayout({children}) {

  const userStatus = useSelector(state=>state.auth.status);

  return (
    <div className=' h-[100vh] mt-[50px] lg:mt-[54px] flex px-2 lg:px-3 bg-gray-100'>
        {
          userStatus && <Aside/>
        }
        <div className="flex-1">
          {children}
        </div>
    </div>
  )
}

export default PageLayout