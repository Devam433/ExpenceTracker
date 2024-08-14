import { useDispatch, useSelector } from 'react-redux'
import Aside from './Aside'
import SetupForm from '../Forms/SetupForm';
import { useEffect } from 'react';
import dbService from '../../appwrite/dbConfig';
import addUser from '../../features/usersSlice';
import authService from '../../appwrite/authConfig';
import { login } from '../../features/authSlice';

function PageLayout({children}) {
  console.log('pagelayout render');

  const dispatch = useDispatch();
  const userStatus = useSelector(state=>state.auth.status);
  const userData = useSelector(state=>state.auth.userData);
  const userDocAllDetails = useSelector(state=>state.users.userDocAllDetails);
  // console.log('pl- userStatus', userStatus)
  // console.log('pl- userData', userData)
  // console.log('pl- userDocAllDetails',userDocAllDetails)
  // console.log(!userDocAllDetails,userStatus)
  // useEffect(()=>{
  //   async function fetchDoc(){
  //     console.log('fetch call')
  //     try {
  //       const Data = await authService.getCurrentUser();
  //       dispatch(login(Data));
  //       console.log(userData);
  //       const result = await dbService.getUserDocument(userData.$id);
  //       // if (result.code === 409) {
  //       //   throw { code: 409, message: 'Email already exists!'};
  //       // }
  //       console.log('pl-insideFetch-result ->',result);
  //       if(result == 404){ 
  //         console.log('doc not found');
  //         dispatch(addUser(null));
  //         return;
  //       }
  //       console.log('user doc found');
  //       dispatch(addUser(result));
  //       console.log('pl-insideFetch-userDocAllDetailsRedux ->',userDocAllDetails)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchDoc();
  // },[dispatch])
  return (
    <div className=' h-[100vh] mt-[50px] lg:mt-[54px] flex px-2 lg:px-3 bg-gray-100'>
        {
          userStatus && <Aside/>
        }
        <div className="flex-1">
          { (!userDocAllDetails && userStatus) &&
          <SetupForm
          className=" absolute z-[100] px-8"
          // isOpen={false}
        />
        }
          {children}
        </div>
    </div>
  )
}

export default PageLayout