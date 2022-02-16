import { useTheme } from 'next-themes'

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className='cursor-pointer'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? 'Turn Light' : 'Turn Dark'}
    </button>
  )
}
