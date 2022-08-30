import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [onSignIn, setOnSignIn] = useState(false)

  return (
    <AppContext.Provider value={{ onSignIn, setOnSignIn }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
