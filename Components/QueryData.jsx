import React from 'react'
import QueryDataStyles from './QueryData.module.css'
import SearchCountries from './SearchCountries'
import FilterCountries from './FilterCountries'

const QueryData = () => {
  return (
    <div className={QueryDataStyles['query-data-container']}>
      <SearchCountries />
      <FilterCountries />
    </div>
  )
}

export default QueryData
