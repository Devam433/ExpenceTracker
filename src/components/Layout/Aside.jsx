import React, { useEffect, useState } from 'react';
import { navItems } from '../../constants/index';
import Button from '../UI/Button.jsx'
function Aside() {

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
    <aside className={`z-50 fixed left-0 w-full lg:w-1/7 lg:h-full lg:pt-1 bg-white shadow-lg 
      ${ screenWidth <= 1024 && (
        isScrollingUp ? '' : ' -translate-y-[50px]'
  )} transition-transform duration-300 ease-in-out
    `}>
      <nav className='flex lg:flex-col items-center lg:space-y-0'> {/** space-y-4 */}
        {navItems.map(item => (
            <Button key={item.id} href={item.url} className="w-full bg-white font-semibold hover:bg-gray-50 transition-colors text-lg mt-[0px]" px={'px-2'}>{item.title}</Button>
        ))}
      </nav>
    </aside>
  );
}

export default Aside;
