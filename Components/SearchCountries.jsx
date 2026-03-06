import React from 'react'
import { useCountryFilters } from '../Hooks/useCountryFilters'
import SearchStyles from './SearchCountries.module.css'

const SearchCountries = () => {
  const { search, setSearch } = useCountryFilters()

  return (
    <div className={SearchStyles['search-container']}>
      <i className={`fa fa-search ${SearchStyles.icon}`} aria-hidden="true"></i>
      <input
        className={SearchStyles['search-input']}
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchCountries
