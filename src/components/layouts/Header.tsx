import React from 'react'

export const Header : React.FC = () => {
  return (
    <nav className='w-screen h-16 grid grid-cols-12 items-center text-white text-lg'>
        <p className='col-start-2 text-xl'>SAM BLOG</p>
        <p className='col-start-9'>About</p>
        <p>Showcase</p>
        <p>Blog</p>
    </nav>
  )
}
