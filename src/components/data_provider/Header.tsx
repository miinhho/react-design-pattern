import Navbar from './Navbar'
import { ThemeProvider } from './ThemeProvider'

const Header = () => {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  )
}

export default Header
