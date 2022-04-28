import React from 'react'

export const Search = () => {
  return (
    <div className='bg-White shadow-md px-8 rounded-md flex items-center gap-7' id='search'>
      <ion-icon name="search-outline"></ion-icon>
      <input className='py-[14px] w-full outline-none text-sm' placeholder='Search for a country...'>
      </input>
    </div>
  )
}
