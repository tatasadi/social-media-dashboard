"use client"
import { createContext, useContext, useEffect } from "react"
import useLocalStorageState from "./useLocalStorageState"

const ThemeContext = createContext<{
  darkMode: any
  toggleDarkMode: () => void
} | null>(null)

export function ThemeProvider(props: React.PropsWithChildren<{}>) {
  const [darkMode, setDarkMode] = useLocalStorageState<boolean>(
    "darkmode",
    false,
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  function toggleDarkMode() {
    setDarkMode((prevDarkMode: boolean) => !prevDarkMode)
  }

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
