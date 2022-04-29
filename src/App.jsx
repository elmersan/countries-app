import React, { useEffect, useState } from 'react'
import { UserContext } from './context/UserContext'
import { getCountries } from './helpers/getCountries'
import { AppRouter } from './routers/AppRouter'

export const App = () => {
  
  const [countries, setCountries] = useState({data:null, loading:true,error:null})

  const data = getCountries()

  useEffect(() => {
    setCountries({...data})
  }, [setCountries,data])

  return (
    <UserContext.Provider value={{countries, setCountries}}>
      <AppRouter/>
    </UserContext.Provider>
  )
}

