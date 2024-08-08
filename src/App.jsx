import { Outlet, useNavigate } from "react-router-dom"
import Header from "./components/Layout/Header"
import PageContainer from "./components/Layout/PageContainer"
import PageLayout from "./components/Layout/PageLayout.jsx"
import { useEffect } from "react"
import authService from "./appwrite/authConfig.js"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./features/authSlice.js"

function App() {
  const navigate = useNavigate()
console.log('App run')
const userData1 = useSelector(state=>state.auth.userData)
 const dispatch = useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()
    .then(userData=>{
      if(userData) {
        console.log('App login',userData);
        dispatch(login(userData));
        console.log('userData got')
        console.log(userData1)
        navigate('/dashboard')
      }
      else {
        console.log('logout');
        dispatch(logout());
      }
    })
    .catch(error=>{
      console.log('User not found',error);
    })
  },[dispatch]);
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