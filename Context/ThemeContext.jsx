import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    () => JSON.parse(localStorage.getItem('isDarkMode')) || false
  )

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDark))
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  )
}