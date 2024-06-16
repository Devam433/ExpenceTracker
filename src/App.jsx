import { Outlet } from "react-router-dom"
import Header from "./components/Layout/Header"
import PageContainer from "./components/Layout/PageContainer"
import PageLayout from "./components/Layout/PageLayout.jsx"

function App() {
  return (
    <>
      <Header/>
        <PageLayout>
          <PageContainer>
            <Outlet/>
          </PageContainer>
        </PageLayout>
    </>
  )
}

export default App