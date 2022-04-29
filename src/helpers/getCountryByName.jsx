import { useFetch } from '../hooks/useFetch'

export const getCountryByName = (name='') => {

  if(name.length === 0 ) return {data:null,loading: false,error:'error'}

  name = name.toLowerCase()

  return useFetch(
    `https://restcountries.com/v3.1/name/${name}`
  )
}
