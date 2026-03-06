import React from 'react'
import { Link } from 'react-router'
import CountryCardStyles from './CountryCard.module.css'

const CountryCard = ({ country }) => {
  return (
    <Link to={`/${country.name.common}`} className={CountryCardStyles['card-link']}>
      <div className={CountryCardStyles['country-card']}>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className={CountryCardStyles['image-container']} />
        <div className={CountryCardStyles['card-body']}>
          <h2 className={CountryCardStyles['name']}>{country.name.common}</h2>
          <p className={CountryCardStyles['population']}><b>Population: </b>{country.population.toLocaleString()}</p>
          <p className={CountryCardStyles['region']}><b>Region: </b>{country.region}</p>
          <p className={CountryCardStyles['capital']}><b>Capital: </b>{country.capital}</p>
        </div>
      </div>
    </Link>
  )
}

export default CountryCard
