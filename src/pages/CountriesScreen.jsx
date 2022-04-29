import React from 'react'
import { Countries } from '../components/Countries'
import { Search } from '../components/Search'
import { Selector } from '../components/Selector'

export const CountriesScreen = () => {
  return (
    <>
      <div>
        <Search/>
        <Selector/>
      </div>
      <Countries/>
    </>
  )
}
