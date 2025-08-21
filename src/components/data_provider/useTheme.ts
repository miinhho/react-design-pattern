import { use } from 'react'
import { ThemeContext } from './ThemeContext'

export const useTheme = () => {
  // React 19 부터 use를 사용하여 Context를 가져올 수 있습니다.
  // useContext 보다 유연한 사용이 가능합니다.
  const ctx = use(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return ctx
}
