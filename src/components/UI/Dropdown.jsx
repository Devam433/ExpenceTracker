import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import { Navigate } from 'react-router-dom';
import authService from '../../appwrite/authConfig';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';

const Dropdown = () => {
const dispatch = useDispatch()
  async function handleLogout() {
    await authService.logout();
    dispatch(logout());
    
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-full w-[45px] h-[45px] inline-flex items-center justify-center bg-white outline-none border hover:shadow-md hover:border-none"
          aria-label="Customise options"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade fixed right-[0px] z-50 flex flex-col gap-2 py-2"
          sideOffset={20}
        >
          <DropdownMenu.Item className="group text-[18px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:cursor-pointer hover:bg-gray-100">
            My Profile{' '}
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[18px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:cursor-pointer hover:bg-gray-100" >
            How to use{' '}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="group text-[18px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:cursor-pointer hover:bg-gray-100" onClick={handleLogout}
          >
            LogOut{' '}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="group text-[18px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:cursor-pointer hover:bg-gray-100"
          >
            Help{' '}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;