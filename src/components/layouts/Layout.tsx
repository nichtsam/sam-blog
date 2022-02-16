import React from 'react'
import { Header } from './Header'

export const Layout : React.FC = ({ children }) => {
  return (
    <div className='bg-black min-h-screen'>
        <Header/>
        {children}
    </div>
  )
}
