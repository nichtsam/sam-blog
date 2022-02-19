import classNames from 'classnames'
import { useRouter } from 'next/router'
import React from 'react'
import { ILinkProps, Link } from '../shared/Link'
import { ThemeChanger } from './ThemeChanger'

export interface INavItemProps extends ILinkProps {
  text: string
}

const NavItem : React.FC<ILinkProps> = ({ className, ...props }) => {
  const router = useRouter()
  const isActive = props.href === '/' ? router.asPath === '/' : router.asPath.startsWith(props.href)

  return <Link
    {...props}
    className={
      classNames(
        className,
        isActive ? 'text-gardient-to-r from-violet-500 to-fuchsia-500' : ''
      )
    } />
}

export const Header : React.FC = () => {
  return (
    <nav className='flex justify-between items-center px-10 w-screen h-16 text-lg'>
      <NavItem
        href='/'>
        SAM BLOG
      </NavItem>
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
