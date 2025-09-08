import { useContext } from 'react'
import { ToggleContext } from './ToggleContext'

export const useToggle = () => {
  const ctx = useContext(ToggleContext)
  if (!ctx) {
    throw new Error('useToggle must be used within a ToggleProvider')
  }
  return ctx
}
