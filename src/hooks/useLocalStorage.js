import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [valueStored, setValue] = useState(() => {
    try {
      return window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const saveLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [valueStored, saveLocalStorage]
}
