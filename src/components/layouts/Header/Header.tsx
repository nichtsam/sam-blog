import React from "react"
import { ILinkProps } from "../../shared/Link"
import { ThemeChanger } from "../ThemeChanger"
import { Menu } from "./Menu"

export interface INavItemProps extends ILinkProps {
  text: string
}

export const Header: React.FC = () => (
    <nav className="relative flex h-16 w-screen items-center justify-between px-10 text-lg">
      <Menu />
      <ThemeChanger />
    </nav>
  )
