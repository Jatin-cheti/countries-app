import React from 'react'
import { useCountryFilters } from '../Hooks/useCountryFilters'
import FilterStyles from './FilterCountries.module.css'

const FilterCountries = () => {
  const { region, setRegion } = useCountryFilters()

  return (
    <div className={FilterStyles['filter-container']}>
      <select
        className={FilterStyles['filter-select']}
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        aria-label="Filter by region"
      >
        <option value="">Filter By Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}

export default FilterCountries
