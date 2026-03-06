import { useSearchParams } from 'react-router'

export function useCountryFilters(countries = []) {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') || ''
  const region = searchParams.get('region') || ''

  const setSearch = (value) => {
    const p = new URLSearchParams(searchParams)
    value ? p.set('search', value) : p.delete('search')
    setSearchParams(p)
  }

  const setRegion = (value) => {
    const p = new URLSearchParams(searchParams)
    value ? p.set('region', value) : p.delete('region')
    setSearchParams(p)
  }

  const filtered = countries.filter((c) => {
    const matchSearch = c.name.common.toLowerCase().includes(search.toLowerCase())
    const matchRegion = region ? c.region.toLowerCase() === region.toLowerCase() : true
    return matchSearch && matchRegion
  })

  return { search, region, setSearch, setRegion, filtered }
}
