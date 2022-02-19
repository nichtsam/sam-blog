import React from 'react'
import NextLink from 'next/link'
import classNames from 'classnames'

export interface ILinkProps {
    href: string,
    className?: string,
}

export const Link : React.FC<ILinkProps> = ({ href, className, children }) =>
  <NextLink href={href}><div className={classNames('cursor-pointer', className)}>{children}</div></NextLink>
