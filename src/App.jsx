import React, { useEffect, useState } from 'react'
import { UserContext } from './context/UserContext'
import { getCountries } from './helpers/getCountries'
import { AppRouter } from './routers/AppRouter'

export const App = () => {

  const [theme, setTheme]= useState(null)
  
  const [countries, setCountries] = useState({data:null, loading:true,error:null})
  
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    
    if(theme==='dark'){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  const data = getCountries()

  useEffect(() => {
    setCountries({...data})
  }, [setCountries,data])


  return (
    <UserContext.Provider value={{countries, setCountries,theme,setTheme}}>
      <AppRouter/>
    </UserContext.Provider>
  )
}

