import React from "react"
import { NavItem } from "../NavItem"

export const DesktopMenu: React.FC = () => (
    <div className="hidden gap-5 md:flex">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/blog">Blog</NavItem>
      <NavItem href="/chat">Chatroom</NavItem>
    </div>
  )
