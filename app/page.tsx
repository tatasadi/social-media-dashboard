"use client"
import Reference from "./components/Reference"
import useTheme from "./hooks/useTheme"

export default function Home() {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <main className="flex h-full min-h-screen w-full max-w-7xl flex-col items-center bg-white px-4 pt-20 text-black lg:min-h-0 lg:pt-32 dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold underline" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </h1>

      <Reference />
    </main>
  )
}
