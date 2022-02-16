import Head from 'next/head'
import React from 'react'
import { Header } from './Header'

const meta = {
  title: 'Sam...',
  description: 'Front-end Developer'
}

export const Layout : React.FC = ({ children }) => {
  return (
    <div className='min-h-screen bg-white dark:bg-black'>
      <Head>
        <title>{meta.title}</title>
        <meta
          content={meta.description}
          name="description" />
        <meta
          name="robots"
          content="follow, index" />
      </Head>
      <Header />
      <div className='p-5 m-auto max-w-screen-xl border-2'>
        {children}
      </div>
    </div>
  )
}
