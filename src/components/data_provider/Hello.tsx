import HelloButton from './HelloButton'
import { ThemeProvider } from './ThemeProvider'

const Hello = () => {
  return (
    <ThemeProvider>
      <HelloButton />
    </ThemeProvider>
  )
}

export default Hello
