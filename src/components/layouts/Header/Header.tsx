import React from 'react'
import { ILinkProps } from '../../shared/Link'
import { ThemeChanger } from '../ThemeChanger'
import { NavItem } from './NavItem'

export interface INavItemProps extends ILinkProps {
  text: string
}

export const Header : React.FC = () => {
  return (
    <nav className='flex justify-between items-center px-10 w-screen h-16 text-lg'>
      <div className='flex gap-8 md:gap-16'>
        <NavItem
          href='/blog'>
          Blog
        </NavItem>
        <NavItem
          href='/chat'>
          Chatroom
        </NavItem>
      </div>
      <ThemeChanger />
    </nav>
  )
}
