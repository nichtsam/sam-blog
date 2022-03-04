import clsx from 'clsx'
import React, { useState } from 'react'
import { NavItem } from '../NavItem'

export const MobileMenu : React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='md:hidden'>
      <button
        className='w-8 h-8 rounded-lg border-2 border-black dark:border-white'
        onClick={() => setIsMenuOpen(prev => !prev)}>
        {isMenuOpen ? 'x' : '='}
      </button>
      {
        isMenuOpen &&
        <div
          className={
            clsx([
              'absolute top-16 left-0 w-screen h-[calc(100vh-4rem)]',
              'flex flex-col gap-5 px-10 pt-5 background'
            ])
          }>
          <NavItem
            href='/'>
            Home
          </NavItem>
          <NavItem
            href='/blog'>
            Blog
          </NavItem>
          <NavItem
            href='/chat'>
            Chatroom
          </NavItem>
        </div>
      }
    </div>)
}
