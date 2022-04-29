import { useFetch } from "../hooks/useFetch"

export const getCountriesByRegion = (region='') => {
  if(region.length === 0 ) return {data:null,loading: false,error:'error'}

  region = region.toLowerCase()
  return useFetch(`https://restcountries.com/v3.1/region/${region}`)
}
