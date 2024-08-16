import React, { useState, useEffect } from 'react';
import Logo from '../UI/Logo';
import Avatar from '../UI/Avatar';
import Dropdown from '../UI/Dropdown';
import Button from '../UI/Button';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom"

function Header() {

  const userStatus = useSelector(state=>state.auth.status);
  const [isScrollingUp, setIsScrollingUp] = useState(true); // Initial state: header visible
  const screenWidth = window.innerWidth;
  useEffect(() => {
    let lastScrollTop = 0;
    function handleScroll() {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Downscroll code
        setIsScrollingUp(false); // Hide header
      } else {
        // Upscroll code
        setIsScrollingUp(true); // Show header
      }
      lastScrollTop = currentScrollTop;
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 bg-white lg:px-3 px-2 border-b border-gray-500 lg:py-1 py-[2px] shadow-sm ${ screenWidth <= 1024 && (
        isScrollingUp ? '' : '-translate-y-full'
  )} transition-transform duration-300 ease-in-out`}
    >
      <div className='flex justify-between items-center'>
          <NavLink>
            <Logo/>
          </NavLink>
        {
        userStatus === true ?
        <div className='flex items-center gap-8'>
            <Avatar />
            <Dropdown/>
        </div>
        :
        <div className='flex items-center gap-8'>
            <Button href={'/signup'} className='bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>SingUp</Button>
            <Button href={'/login'} className='bg-gray-500 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500'>Login</Button>
        </div>
        }
        
      </div>
    </header>
  );
}

export default Header;
