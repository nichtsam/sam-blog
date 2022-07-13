import React, { ReactNode } from "react"
import NextLink from "next/link"
import clsx from "clsx"

export interface ILinkProps {
  href: string
  className?: string
  children: ReactNode
}

export const Link: React.FC<ILinkProps> = ({ href, className, children }) => (
  <NextLink href={href} passHref>
    <a
      href="href" // workaround fot Nextjs Link & a11y eslint
      className={clsx("cursor-pointer", className)}
    >
      {children}
    </a>
  </NextLink>
)
