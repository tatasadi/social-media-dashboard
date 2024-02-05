import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

export default function useLocalStorageState<T>(
  key: string,
  defaultValue: T | (() => T),
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
): [T, Dispatch<SetStateAction<T>>] {
  // Initialize state with defaultValue to avoid referencing window.localStorage on initial render
  const [state, setState] = useState<T>(
    typeof defaultValue === "function"
      ? (defaultValue as () => T)()
      : defaultValue,
  )

  useEffect(() => {
    // Check if the value is stored in localStorage
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      try {
        // Only update the state if value is found
        setState(deserialize(valueInLocalStorage))
      } catch (error) {
        window.localStorage.removeItem(key)
      }
    }
  }, [key, deserialize])

  const prevKeyRef = useRef(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    // Serialize and save the new state in localStorage whenever state or key changes
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}
