import React from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { ILinkProps, Link } from '@/components/shared/Link'

export const NavItem : React.FC<ILinkProps> = ({ className, ...props }) => {
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
