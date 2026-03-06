import React, { useContext } from 'react'
import HeaderStyles from './Header.module.css'
import { ThemeContext } from '../Context/ThemeContext'

const Header = () => {
  const [isDark, setIsDark] = useContext(ThemeContext)

  return (
    <header className={HeaderStyles.header}>
      <p>Where in the world?</p>
      <div className={`${HeaderStyles['toggle-container']}`}>
       <button onClick={() => setIsDark(prev => !prev)} className={`${HeaderStyles['toggle-button']}`}>
        {isDark ? (
          <i className={`fa fa-sun-o ${HeaderStyles.icon} ${HeaderStyles['sun-icon']}`} aria-hidden="true"></i>
        ) : (
          <i className={`fa fa-moon-o ${HeaderStyles.icon} ${HeaderStyles['moon-icon']}`} aria-hidden="true"></i>
        )}
      </button>
      <span className={`${HeaderStyles['toggle-text']}`}>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    </div>
    </header>
  )
}

export default Header
