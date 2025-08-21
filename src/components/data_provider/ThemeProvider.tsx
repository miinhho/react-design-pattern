import React, { useState } from 'react'
import { type Theme, ThemeContext } from './ThemeContext'

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>('system')

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>
}
