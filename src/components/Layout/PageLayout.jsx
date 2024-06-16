import Aside from './Aside'

function PageLayout({children}) {
  return (
    <div className=' mt-[55px] lg:mt-[59px] flex px-2 lg:px-3 bg-gray-100'>
        <Aside/>
        <div className="flex-1">
          {children}
        </div>
    </div>
  )
}

export default PageLayout