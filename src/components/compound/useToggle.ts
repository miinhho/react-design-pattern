import { use } from 'react'
import { ToggleContext } from './ToggleContext'

export const useToggle = () => {
  const ctx = use(ToggleContext)
  if (!ctx) {
    throw new Error('useToggle must be used within a ToggleProvider')
  }
  return ctx
}
