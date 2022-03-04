import Head from 'next/head'
import React from 'react'
import { Header } from './Header/Header'

const meta = {
  title: 'Sam...',
  description: 'Front-end Developer'
}

export const PageContainer : React.FC = ({ children }) => {
  return (
    <div className='min-h-screen background'>
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
      <div>
        {children}
      </div>
    </div>
  )
}
