import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Moon from '@/assets/moon.svg'
import Sun from '@/assets/sun.svg'

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  return (
    <button
      className='cursor-pointer select-none'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {
        resolvedTheme === 'dark'
          ? <div className='fill-white'><Sun /></div>
          : <Moon />
      }
    </button>
  )
}
