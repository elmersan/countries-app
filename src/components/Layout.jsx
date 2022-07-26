import React from 'react'
import { Header } from './Header'

export const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <main className='min-h-screen wrapper pt-6 md:pt-12'>
        {
          children
        }
      </main>
    </>
  )
}
