"use client"
import { useEffect, useRef, useState } from "react"

export default function useLocalStorageState(
  key: string,
  defaultValue: boolean | string | (() => T) = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
  // Initialize state without trying to access localStorage immediately
  const [state, setState] = useState(
    typeof defaultValue === "function" ? defaultValue() : defaultValue,
  )

  // Use a ref to store whether we have initialized the state
  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      // This code runs once and ensures that we don't try to access localStorage during SSR
      const valueInLocalStorage = window.localStorage.getItem(key)
      if (valueInLocalStorage) {
        try {
          setState(deserialize(valueInLocalStorage))
        } catch (error) {
          window.localStorage.removeItem(key)
        }
      } else {
        // Handle function default values correctly
        setState(
          typeof defaultValue === "function" ? defaultValue() : defaultValue,
        )
      }
      initialized.current = true
    }

    // Synchronize the state to localStorage when it changes
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize, deserialize, defaultValue])

  const prevKeyRef = useRef(key)

  return [state, setState]
}
