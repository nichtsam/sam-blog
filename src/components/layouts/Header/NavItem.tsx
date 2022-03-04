import React from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { ILinkProps, Link } from '@/components/shared/Link'

export const NavItem : React.FC<ILinkProps> = ({ className, ...props }) => {
  const router = useRouter()
  const isActive = props.href === '/' ? router.asPath === '/' : router.asPath.startsWith(props.href)

  return <Link
    {...props}
    className={
      clsx(
        className,
        isActive ? 'from-violet-500 to-fuchsia-500 text-gardient-to-r' : ''
      )
    } />
}
