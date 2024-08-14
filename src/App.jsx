import { Outlet, useNavigate } from "react-router-dom"
import Header from "./components/Layout/Header"
import PageContainer from "./components/Layout/PageContainer"
import PageLayout from "./components/Layout/PageLayout.jsx"
import { useEffect } from "react"
import authService from "./appwrite/authConfig.js"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./features/authSlice.js"
import { addUser } from "./features/usersSlice.js"
import dbService from "./appwrite/dbConfig.js"

function App() {
const navigate = useNavigate()
console.log('App render')
const userData = useSelector(state=>state.auth.userData);
console.log('App-userData', userData);
const userDocAllDetails = useSelector(state=>state.users.userDocAllDetails);
console.log('sApp userDocDetails',userDocAllDetails);
const dispatch = useDispatch();

  useEffect(()=>{
    console.log('App-fetchCall');
    authService.getCurrentUser()
    .then(Data=>{
      if(Data) {
        console.log('App login Success',Data);
        dispatch(login(Data));
        console.log('userData got')
        console.log(userData);
        dbService.getUserDocument(Data.$id).then(result=>{
          dispatch(addUser(result));
          navigate('/dashboard');
        })
        
      }
    })
    .catch(error=>{
      console.log('User not found',error);
    })
  },[]);

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