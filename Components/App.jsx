import React from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import Header from './Header'
import CountriesList from './CountriesList'
import AppStyles from './App.module.css'
import QueryData from './QueryData'
import CountryDetails from './CountryDetails'
import { ThemeProvider } from '../Context/ThemeContext'
import './variables.css'

const App = () => {
  const [countries, setCountries] = React.useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital")
      .then((res) => res.json())
      .then((data) => setCountries(data))
  }, [])

  return (
    <ThemeProvider>
      <Header />
      <main className={AppStyles.main}>
        <Routes>
          <Route path="/" element={
            <>
              <QueryData />
              <CountriesList countries={countries} />
            </>
          } />
          <Route path="/:name" element={<CountryDetails />} />
        </Routes>
      </main>
    </ThemeProvider>
  )
}

export default App
