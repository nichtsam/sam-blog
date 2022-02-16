import dynamic from 'next/dynamic'
import React from 'react'

const ThemeChanger = dynamic(
  async () => await (await import('@/components/layouts/ThemeChanger')).ThemeChanger,
  { ssr: false })

export const Header : React.FC = () => {
  return (
    <nav className='grid grid-cols-12 items-center w-screen h-16 text-lg dark:text-gray-50'>
      <p className='col-start-2 text-xl'>SAM BLOG</p>
      <p className='col-start-9'>Blog</p>
      <p>Chatroom</p>
      <ThemeChanger />
    </nav>
  )
}
