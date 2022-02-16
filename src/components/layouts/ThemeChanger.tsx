import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  return (
    <button
      className='cursor-pointer'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {
        resolvedTheme === 'dark'
          ? 'Turn Light'
          : 'Turn Dark'
      }
    </button>
  )
}
