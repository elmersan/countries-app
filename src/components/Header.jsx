import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Header = () => {

  const {theme,setTheme} = useContext(UserContext)

  const handleThemeSwitch = ()=>{
    setTheme(theme==='dark'?'light':'dark')
  }

  return (
    <header className='shadow-md bg-White dark:bg-Dark_Blue_dark_elements'>
      <div className='flex py-7 shadow-md justify-between wrapper text-Very_Dark_Blue_Light_Mode_Text dark:text-White'>
        <h1 className='text-base font-extrabold '>Where in the world?</h1>
        <button onClick={handleThemeSwitch} className='text-sm font-semibold flex justify-center items-center'>
          {
            theme==='dark'?(
              <ion-icon name="moon-sharp"></ion-icon>
            ):(
              <ion-icon name="moon-outline"></ion-icon>
            )
          }
          <span className='ml-2'>Dark Mode</span>
        </button>
      </div>
    </header>
  )
}
