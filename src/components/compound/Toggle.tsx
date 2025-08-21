/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import styles from './Toggle.module.css'
import { ToggleContext } from './ToggleContext'
import { useToggle } from './useToggle'

const Toggle = ({ children }: React.PropsWithChildren) => {
  const [on, setOn] = useState(false)
  const toggle = () => setOn(!on)

  return (
    <ToggleContext value={{ on, toggle }}>
      <div className={styles.container}>{children}</div>
    </ToggleContext>
  )
}

Toggle.On = ({ children }: React.PropsWithChildren) => {
  const { on } = useToggle()
  return on ? children : null
}

Toggle.Off = ({ children }: React.PropsWithChildren) => {
  const { on } = useToggle()
  return on ? null : children
}

Toggle.Button = () => {
  const { toggle } = useToggle()

  return (
    <button className={styles.toggleButton} onClick={toggle}>
      Toggle
    </button>
  )
}

export default Toggle
