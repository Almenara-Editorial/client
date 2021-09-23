import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(initialValue)

  useEffect(() => {
    setState(() => {
      const item = localStorage.getItem(key)

      if (!item) return

      return JSON.parse(item)
    })
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
