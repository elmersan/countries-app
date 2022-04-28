import React from 'react'

export const Header = () => {
  return (
    <header className='py-7 shadow-md bg-White'>
      <div className='flex justify-between wrapper'>
        <h1 className='text-base font-extrabold'>Where in the world?</h1>
        <button className='text-sm font-semibold flex justify-center items-center'>
          <ion-icon name="moon-outline"></ion-icon>
          <span className='ml-2'>Dark Mode</span>
        </button>
      </div>
    </header>
  )
}
