import React from 'react'
import { ILinkProps } from '../../shared/Link'
import { ThemeChanger } from '../ThemeChanger'
import { Menu } from './Menu'

export interface INavItemProps extends ILinkProps {
  text: string
}

export const Header : React.FC = () => {
  return (
    <nav className='flex relative justify-between items-center px-10 w-screen h-16 text-lg'>
      <Menu />
      <ThemeChanger />
    </nav>
  )
}
