import styles from './HelloButton.module.css'
import { useTheme } from './useTheme'

const HelloButton = () => {
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
        }}
      >
        <h1
          style={{
            color: theme === 'dark' ? '#fff' : '#000',
          }}
        >
          Hello Navbar
        </h1>
      </div>
      <button onClick={handleThemeToggle} className={styles.button}>
        Toggle Theme
      </button>
    </>
  )
}

export default HelloButton
