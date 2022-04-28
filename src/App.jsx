import React from 'react'
import { Countries } from './components/Countries'
import { Layout } from './components/Layout'
import { Search } from './components/Search'
import { Selector } from './components/Selector'

export const App = () => {
  return (
    <>
      <Layout>
        <div>
          <Search/>
          <Selector/>
        </div>
        <Countries/>
      </Layout>
    </>
  )
}

