import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Sun } from "@/components/shared/icons/Sun"
import { Moon } from "@/components/shared/icons/Moon"

export const ThemeChanger: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      className="cursor-pointer select-none"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </button>
  )
}
