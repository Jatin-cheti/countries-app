import React from 'react'
import { useCountryFilters } from '../Hooks/useCountryFilters'
import CountryCard from './CountryCard'
import CountryCardSkeleton from './CountryCardSkeleton'
import CountryListStyles from './CountryList.module.css'

const SKELETON_COUNT = 8

const CountriesList = ({ countries }) => {
  const { filtered } = useCountryFilters(countries)

  if (countries.length === 0) {
    return (
      <div className={CountryListStyles['countries-list']} aria-label="Loading countries">
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <CountryCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  return (
    <div className={CountryListStyles['countries-list']}>
      {filtered.length > 0
        ? filtered.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))
        : <p className={CountryListStyles['no-results']}>No countries found.</p>
      }
    </div>
  )
}

export default CountriesList
