import React from "react"
import { DesktopMenu } from "./DesktopMenu"
import { MobileMenu } from "./MobileMenu"

export const Menu: React.FC = () => (
    <>
      <MobileMenu />
      <DesktopMenu />
    </>
  )
