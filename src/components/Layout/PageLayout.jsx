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