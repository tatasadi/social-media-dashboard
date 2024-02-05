"use client"
import { createContext, useContext, useEffect } from "react"
import useLocalStorageState from "use-local-storage-state"

const ThemeContext = createContext<{
  darkMode: boolean
  toggleDarkMode: () => void
} | null>(null)

export function ThemeProvider(props: React.PropsWithChildren<{}>) {
  const [darkMode, setDarkMode] = useLocalStorageState("darkmode", {
    defaultValue: false,
  })

  function toggleDarkMode() {
    setDarkMode((prevDarkMode: boolean) => !prevDarkMode)
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode as boolean)
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }} {...props} />
  )
}

export default function useTheme() {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return themeContext
}
