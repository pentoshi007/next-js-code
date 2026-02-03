import React, { createContext, useState, useContext } from 'react'

// 1️⃣ Create the context object.
//    This represents the "shared box" where we keep the current theme value.
//    Any component that reads from this context will always see the latest value.
export const ThemeContext = createContext(null)

// 2️⃣ Create a Provider component.
//    It owns the actual state (light / dark) and makes it available
//    to all children below via ThemeContext.Provider.
export const ThemeProvider = ({ children }) => {
  // This state lives *once* here, instead of being duplicated in many components.
  const [isDark, setIsDark] = useState(false)

  // Toggle function that flips between light and dark.
  const toggleTheme = () => setIsDark((prev) => !prev)

  // The value we pass to the Provider can be anything (object, string, etc).
  // Components that call useContext(ThemeContext) will receive this object.
  const value = { isDark, toggleTheme }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// 3️⃣ Optional helper hook.
//    This is just a tiny wrapper around useContext for a nicer DX.
export const useTheme = () => {
  const ctx = useContext(ThemeContext)

  if (!ctx) {
    // Helpful error if someone uses useTheme outside of the ThemeProvider.
    throw new Error('useTheme must be used inside a ThemeProvider')
  }

  return ctx
}

