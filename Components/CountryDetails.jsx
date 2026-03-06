import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import styles from './CountryDetails.module.css'
import CountryDetailsSkeleton from './CountryDetailsSkeleton'

const CountryDetails = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState(null)
  const [borderCountries, setBorderCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    setCountry(null)
    setBorderCountries([])

    const fields = 'name,flags,population,region,subregion,capital,tld,currencies,languages,borders'
    fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true&fields=${fields}`)
      .then((res) => {
        if (!res.ok) throw new Error('Country not found')
        return res.json()
      })
      .then((data) => {
        const found = data[0]
        setCountry(found)
        setLoading(false)

        if (found.borders && found.borders.length > 0) {
          return fetch(
            `https://restcountries.com/v3.1/alpha?codes=${found.borders.join(',')}&fields=name,cca3`
          )
            .then((res) => res.json())
            .then((borders) =>
              setBorderCountries(borders.map((b) => ({ code: b.cca3, name: b.name.common })))
            )
        }
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [name])

  if (loading) return <CountryDetailsSkeleton />
  if (error) return <p className={styles.status}>Could not find "{name}".</p>
  if (!country) return null

  const nativeName =
    country.name.nativeName
      ? Object.values(country.name.nativeName)[0]?.common
      : country.name.official

  const currencies = country.currencies
    ? Object.values(country.currencies).map((c) => c.name).join(', ')
    : 'N/A'

  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'N/A'

  const tld = country.tld ? country.tld.join(', ') : 'N/A'
  const capital = country.capital ? country.capital.join(', ') : 'N/A'

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backBtn}>
        <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
      </button>

      <div className={styles.detail}>
        <img
          src={country.flags.png}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          className={styles.flag}
        />

        <div className={styles.info}>
          <h1 className={styles.countryName}>{country.name.common}</h1>

          <div className={styles.infoColumns}>
            <div className={styles.infoCol}>
              <p><span className={styles.label}>Native Name:</span> {nativeName}</p>
              <p><span className={styles.label}>Population:</span> {country.population.toLocaleString()}</p>
              <p><span className={styles.label}>Region:</span> {country.region}</p>
              <p><span className={styles.label}>Sub Region:</span> {country.subregion}</p>
              <p><span className={styles.label}>Capital:</span> {capital}</p>
            </div>
            <div className={styles.infoCol}>
              <p><span className={styles.label}>Top Level Domain:</span> {tld}</p>
              <p><span className={styles.label}>Currencies:</span> {currencies}</p>
              <p><span className={styles.label}>Languages:</span> {languages}</p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div className={styles.borders}>
              <span className={styles.label}>Border Countries:</span>
              <div className={styles.borderTags}>
                {borderCountries.map((b) => (
                  <Link key={b.code} to={`/${b.name}`} className={styles.borderTag}>
                    {b.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountryDetails
