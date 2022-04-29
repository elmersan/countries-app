import { useFetch } from '../hooks/useFetch'

export const getCountriesByCodes = (bord) => {
  return bord.length > 0
  ? useFetch(
      `https://restcountries.com/v3.1/alpha?codes=${bord.toString()}`
    )
  : { data: null, loading: false, error: 'error' }
}
