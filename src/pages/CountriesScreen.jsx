import React from 'react'
import { Countries } from '../components/Countries'
import { Search } from '../components/Search'
import { Selector } from '../components/Selector'

export const CountriesScreen = () => {
  return (
    <>
      <div className='md:flex justify-between items-center gap-16'>
        <Search/>
        <Selector/>
      </div>
      <Countries/>
    </>
  )
}
