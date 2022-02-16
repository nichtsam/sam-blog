import React from 'react'
import NextLink from 'next/link'

export interface ILinkProps {
    href: string,
    className?: string,
}

export const Link : React.FC<ILinkProps> = ({ href, className, children }) =>
  <NextLink href={href}><a className={className}>{children}</a></NextLink>
