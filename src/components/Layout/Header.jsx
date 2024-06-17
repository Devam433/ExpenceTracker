import React, { useState, useEffect } from 'react';
import Logo from '../UI/Logo';
import Avatar from '../UI/Avatar';
import Dropdown from '../UI/Dropdown';

function Header() {
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
        <a href="#home">
          <Logo />
        </a>
        <div className='flex items-center gap-8'>
          <Avatar />
          <Dropdown/>
        </div>
      </div>
    </header>
  );
}

export default Header;
