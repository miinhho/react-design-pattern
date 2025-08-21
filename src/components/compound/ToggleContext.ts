import { createContext } from 'react'

interface ToggleContextType {
  on: boolean
  toggle: () => void
}

export const ToggleContext = createContext<ToggleContextType | undefined>(
  undefined,
)
