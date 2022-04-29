import { useFetch } from '../hooks/useFetch'

export const getCountries = () => {
  return useFetch("https://restcountries.com/v3.1/all")
}
